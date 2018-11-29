import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import colors from "../constants/colors";

class StyledButton extends Component {
  static defaultProps = {
    large: false,
    clear: false,
    transparent: false
  };

  render() {
    const { onPress, outline, transparent, large } = this.props;
    let modifierStyles = [];

    if (large) {
      modifierStyles = modifierStyles.concat(largeStyles);
    }

    if (outline) {
      modifierStyles = modifierStyles.concat(outlineStyles);
    }

    if (transparent) {
      modifierStyles = modifierStyles.concat(transparentStyles);
    }

    const children = React.Children.map(this.props.children, element => {
      if (element.type === Text) {
        return React.cloneElement(element, {
          style: [
            normalBtnStyles.text,
            ...modifierStyles.map(style => style.text)
          ]
        });
      }
      return element;
    });
    if (outline) {
      return (
        <TouchableOpacity
          style={[
            normalBtnStyles.root,
            ...modifierStyles.map(style => style.root)
          ]}
          onPress={onPress}
          activeOpacity={0.5}
        >
          <React.Fragment>{children}</React.Fragment>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableHighlight
          style={[
            normalBtnStyles.root,
            ...modifierStyles.map(style => style.root)
          ]}
          onPress={onPress}
          underlayColor={colors.primaryDark}
        >
          <View>{children}</View>
        </TouchableHighlight>
      );
    }
  }
}

const normalBtnStyles = StyleSheet.create({
  root: {
    height: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: colors.primary,
    paddingHorizontal: 14
  },
  text: {
    fontSize: 13,
    color: "#fff"
  }
});

const largeStyles = StyleSheet.create({
  root: {
    height: 50,
    paddingHorizontal: 25
  },
  text: {
    fontSize: 17
  }
});

const outlineStyles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: "#fff"
  },
  text: {
    color: colors.primary
  }
});

const transparentStyles = StyleSheet.create({
  root: {
    backgroundColor: "transparent"
  },
  text: {
    color: colors.primary
  }
});

export default StyledButton;
