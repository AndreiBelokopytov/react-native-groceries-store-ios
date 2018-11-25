import React, { Component } from "react";
import { Animated, Dimensions, Platform, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

const IPHONE_XS_HEIGHT = 812; // iPhone X and XS
const IPHONE_XR_HEIGHT = 896; // iPhone XR and XS Max
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const IS_IPHONE_X =
  Platform.OS === "ios" &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (WINDOW_HEIGHT === IPHONE_XS_HEIGHT ||
    WINDOW_WIDTH === IPHONE_XS_HEIGHT ||
    WINDOW_HEIGHT === IPHONE_XR_HEIGHT ||
    WINDOW_WIDTH === IPHONE_XR_HEIGHT);

const IPHONE_HEADER_HEIGHT = 44;
const IPHONE_STATUS_BAR_HEIGHT = IS_IPHONE_X ? 44 : 20;

const COLLAPSIBLE_DEFAULT_HEIGHT = 220;
const COLLAPSIBLE_TITLE_BOUNCING_HEIGHT = 40;
const HEADER_HEIGHT = IPHONE_HEADER_HEIGHT + IPHONE_STATUS_BAR_HEIGHT;

function collapsibleHeader(
  WrappedComponent,
  { HeroComponent, backgroundColor, tintColor, accentColor } = {}
) {
  const navigationOptions = WrappedComponent.navigationOptions || {};
  const collapsibleOptions = ({ navigation }) => {
    let transparentNav = navigation.getParam("transparentNav");
    if (transparentNav == null) {
      transparentNav = true;
    }
    return {
      ...navigationOptions,
      headerTransparent: true,
      title: transparentNav ? null : navigationOptions.title,
      headerTintColor: transparentNav ? accentColor : tintColor,
      headerStyle: {
        backgroundColor: transparentNav ? "transparent" : backgroundColor,
        borderBottomWidth: transparentNav ? 1 : StyleSheet.hairlineWidth,
        borderBottomColor: transparentNav
          ? "transparent"
          : colors.hairlineBorder
      }
    };
  };

  class ScreenWithCollapsible extends Component {
    scrollY = new Animated.Value(0);
    collapsibleHeight = COLLAPSIBLE_DEFAULT_HEIGHT;

    getCollapsibleOpacity = () =>
      this.scrollY.interpolate({
        inputRange: [
          COLLAPSIBLE_TITLE_BOUNCING_HEIGHT,
          this.collapsibleHeight - HEADER_HEIGHT
        ],
        outputRange: [1, 0],
        extrapolate: "clamp"
      });

    componentDidMount() {
      this.scrollY.addListener(scrollY => {
        const { navigation } = this.props;
        let transparentNav = navigation.getParam("transparentNav");
        if (transparentNav == null) {
          transparentNav = true;
        }

        if (
          scrollY.value > this.collapsibleHeight - HEADER_HEIGHT &&
          transparentNav
        ) {
          navigation.setParams({
            transparentNav: false
          });
        } else if (
          scrollY.value < this.collapsibleHeight - HEADER_HEIGHT &&
          !transparentNav
        ) {
          navigation.setParams({
            transparentNav: true
          });
        }
      });
    }

    render() {
      return (
        <View style={styles.root}>
          <Animated.View
            style={[
              styles.hero,
              {
                height: this.collapsibleHeight,
                opacity: this.getCollapsibleOpacity()
              }
            ]}
          >
            {HeroComponent && (
              <HeroComponent
                scrollY={this.scrollY}
                collapsibleHeight={this.collapsibleHeight}
                {...this.props}
              />
            )}
          </Animated.View>
          <WrappedComponent
            scrollY={this.scrollY}
            collapsibleHeight={this.collapsibleHeight}
            {...this.props}
          />
        </View>
      );
    }
  }

  ScreenWithCollapsible.navigationOptions = null;

  const screenWithCollapsible = props => (
    <ScreenWithCollapsible ScreenComponent={WrappedComponent} {...props} />
  );
  screenWithCollapsible.navigationOptions = collapsibleOptions;
  return screenWithCollapsible;
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  hero: {
    width: "100%",
    position: "absolute",
    top: 0
  }
});

export default collapsibleHeader;
