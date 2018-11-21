import React, { PureComponent } from "react";
import { TouchableHighlight, View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

class StyledButton extends PureComponent {
  static defaultProps = {
    touchable: true
  };

  render() {
    const { onPress, touchable, big } = this.props;
    const Wrapper = touchable ? TouchableHighlight : View;
    const styles = big ? bigStyles : normalStyles;

    const children = React.Children.map(this.props.children, element => {
      if (element.type === Text) {
        return React.cloneElement(element, {
          style: styles.text
        });
      }
      return element;
    });
    return (
      <Wrapper
        style={styles.root}
        onPress={touchable ? onPress : null}
        underlayColor={colors.primaryDark}
      >
        <View>{children}</View>
      </Wrapper>
    );
  }
}

const normalStyles = StyleSheet.create({
  root: {
    borderRadius: 40,
    height: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 14
  },
  text: {
    fontSize: 13,
    color: "#fff"
  }
});

const bigStyles = StyleSheet.create({
  root: {
    ...normalStyles.root,
    height: 50,
    paddingHorizontal: 25
  },
  text: {
    ...normalStyles.text,
    fontSize: 17
  }
});

export default StyledButton;
