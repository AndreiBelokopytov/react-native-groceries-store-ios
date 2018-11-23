import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class Title extends Component {
  static defaultProps = {
    variant: "h1"
  };

  render() {
    const { variant } = this.props;
    let titleStyle;
    switch (variant) {
      case "h1": {
        titleStyle = styles.h1;
        break;
      }
      case "h2": {
        titleStyle = styles.h2;
        break;
      }
      default:
        titleStyle = styles.h1;
    }
    const children = React.Children.map(this.props.children, element => {
      if (element.type === Text) {
        return React.cloneElement(element, {
          style: titleStyle
        });
      }
      return element;
    });
    return <View>{children}</View>;
  }
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "600"
  },
  h1: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: "600"
  }
});

export default Title;
