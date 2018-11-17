import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

class HeaderButtons extends PureComponent {
  static defaultProps = {
    side: "left"
  };

  render() {
    const { side } = this.props;
    return (
      <View style={side === "left" ? styles.left : styles.right}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  left: {
    marginLeft: 14
  },
  right: {
    marginRight: 14
  }
});

export default HeaderButtons;
