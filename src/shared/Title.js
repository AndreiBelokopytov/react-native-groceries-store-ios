import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";

class Title extends PureComponent {
  render() {
    const children = React.Children.map(this.props.children, element => {
      if (element.type === Text) {
        return React.cloneElement(element, {
          style: styles.text
        });
      }
      return element;
    });
    return <View>{children}</View>;
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "600",
    color: "#000"
  }
});

export default Title;
