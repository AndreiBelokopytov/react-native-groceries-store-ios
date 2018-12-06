import * as React from "react";
import { Header, Body, Icon, Left, Right, Title } from "native-base";
import { Animated, StatusBar, StyleSheet, View } from "react-native";
import { Header as Nav } from "react-navigation";
import navigationService from "../utils/navigationService";
import IconButton from "./IconButton";

const HEADER_HEIGHT = Nav.HEIGHT;

const AnimatedHeader = Animated.createAnimatedComponent(Header);
const AnimatedTitle = Animated.createAnimatedComponent(Title);
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default class TranslucentHeader extends React.Component {
  showTransparentBg = true;
  darkMode = false;
  backgroundTransform = new Animated.Value(0);
  tintColorTransform = new Animated.Value(0);

  componentDidMount() {
    const { scrollY, toolbarHeight } = this.props;

    // I don't know why I need timer here, but it works
    setTimeout(() => {
      StatusBar.setBarStyle(this.getStatusBarStyle(), true);
    }, 100);

    scrollY.addListener(scrollY => {
      if (
        scrollY.value > toolbarHeight - HEADER_HEIGHT &&
        this.showTransparentBg
      ) {
        this.showTransparentBg = false;
        Animated.timing(this.backgroundTransform, {
          toValue: 1,
          duration: 150
        }).start();
      } else if (
        scrollY.value < toolbarHeight - HEADER_HEIGHT &&
        !this.showTransparentBg
      ) {
        this.showTransparentBg = true;
        Animated.timing(this.backgroundTransform, {
          toValue: 0,
          duration: 150
        }).start();
      }

      if (scrollY.value > toolbarHeight / 2 && !this.darkMode) {
        this.darkMode = true;
        StatusBar.setBarStyle(this.getStatusBarStyle(), true);
        Animated.timing(this.tintColorTransform, {
          toValue: 1,
          duration: 150
        }).start();
      } else if (scrollY.value < toolbarHeight / 2 && this.darkMode) {
        this.darkMode = false;
        StatusBar.setBarStyle(this.getStatusBarStyle(), true);
        Animated.timing(this.tintColorTransform, {
          toValue: 0,
          duration: 150
        }).start();
      }
    });
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { title, backTitle, HeaderRightComponent } = this.props;
    return (
      <View style={styles.root}>
        <AnimatedHeader
          transparent
          noShadow
          style={{
            height: HEADER_HEIGHT,
            backgroundColor: this.backgroundTransform.interpolate({
              inputRange: [0, 1],
              outputRange: ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
            }),
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: this.backgroundTransform.interpolate({
              inputRange: [0, 1],
              outputRange: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.3)"]
            })
          }}
        >
          <Left>
            <IconButton onPress={navigationService.goBack}>
              <AnimatedIcon
                name="ios-arrow-back"
                style={{
                  color: this.tintColorTransform.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)"]
                  })
                }}
              />
            </IconButton>
          </Left>
          <Body>
            {title && (
              <AnimatedTitle
                style={{
                  color: this.tintColorTransform.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
                  })
                }}
              >
                {title}
              </AnimatedTitle>
            )}
          </Body>
          <Right>
            {HeaderRightComponent && (
              <HeaderRightComponent
                darkMode={this.darkMode}
                backgroundTransform={this.backgroundTransform}
                tintColorTransform={this.tintColorTransform}
                {...this.props}
              />
            )}
          </Right>
        </AnimatedHeader>
      </View>
    );
  }

  getStatusBarStyle = () => {
    return this.darkMode ? "dark-content" : "light-content";
  };
}

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: 0,
    width: "100%"
  }
});
