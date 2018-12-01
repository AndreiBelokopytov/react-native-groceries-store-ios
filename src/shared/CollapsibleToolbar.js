import * as React from "react";
import { Animated, StyleSheet } from "react-native";

class CollapsibleToolbar extends React.Component {
  getOverlayOpacity = () => {
    const { scrollY, expandedHeight, headerHeight } = this.props;
    return scrollY.interpolate({
      inputRange: [0, expandedHeight - headerHeight],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });
  };

  getToolbarHeight = () => {
    const { scrollY, expandedHeight } = this.props;
    return scrollY.interpolate({
      inputRange: [0, expandedHeight],
      outputRange: [expandedHeight, expandedHeight - expandedHeight / 4]
    });
  };

  render() {
    const {
      renderBackground,
      scrollY,
      expandedHeight,
      headerHeight,
      renderTitle,
      overlayColor
    } = this.props;
    return (
      <Animated.View style={[styles.root, { height: this.getToolbarHeight() }]}>
        {renderBackground && renderBackground({ style: styles.background })}
        <Animated.View
          style={[
            styles.overlay,
            {
              backgroundColor: overlayColor,
              opacity: this.getOverlayOpacity()
            }
          ]}
        />
        {renderTitle &&
          renderTitle({
            style: styles.title,
            scrollY,
            expandedHeight,
            headerHeight
          })}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  gradient: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%"
  },
  overlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%"
  },
  title: {
    position: "absolute",
    top: 0
  }
});

export default CollapsibleToolbar;
