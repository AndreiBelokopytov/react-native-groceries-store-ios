import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

class TransparentButton extends PureComponent {
  render() {
    const { onPress } = this.props;
    const children = React.Children.map(this.props.children, element => {
      if (element.type === Text) {
        return React.cloneElement(element, {
          style: styles.text
        });
      }
      return element;
    });
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View>{children}</View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.primary
  }
});

export default TransparentButton;
