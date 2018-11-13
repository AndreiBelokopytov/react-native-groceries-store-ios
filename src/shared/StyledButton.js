import React, { PureComponent } from "react";
import { TouchableHighlight, View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

const BORDER_RADIUS = 40;

class StyledButton extends PureComponent {
  static defaultProps = {
    touchable: true
  };

  render() {
    const { text, onPress, touchable } = this.props;
    const Wrapper = touchable ? TouchableHighlight : View;
    return (
      <Wrapper style={styles.root} onPress={touchable ? onPress : null}>
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    borderRadius: BORDER_RADIUS,
    height: 28
  },
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: BORDER_RADIUS
  },
  text: {
    fontSize: 13,
    color: "#fff",
    letterSpacing: -0.006
  }
});

export default StyledButton;
