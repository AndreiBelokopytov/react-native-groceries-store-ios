import React, { Component } from "react";
import {
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
    transparent: false,
    iconLeft: false
  };

  render() {
    const { onPress, outline, transparent, large, iconLeft } = this.props;
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

    if (iconLeft) {
      modifierStyles = modifierStyles.concat(iconLeftStyles);
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
    if (outline || transparent) {
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
          <React.Fragment>{children}</React.Fragment>
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
    paddingLeft: 14,
    paddingRight: 14
  },
  text: {
    fontSize: 13,
    color: "#fff"
  }
});

const largeStyles = StyleSheet.create({
  root: {
    height: 50,
    paddingLeft: 25,
    paddingRight: 25
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
    color: colors.primary,
    fontSize: 17,
    lineHeight: 22
  }
});

const iconLeftStyles = StyleSheet.create({
  root: {
    paddingLeft: 0
  }
});

export default StyledButton;
