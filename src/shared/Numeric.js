import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import MinusCircleIcon from "./icons/MinusCircleIcon";
import PlusCircleIcon from "./icons/PlusCircleIcon";
import TransparentButton from "./TransparentButton";

export default class NumericInput extends PureComponent {
  static defaultProps = {
    value: 0
  };

  render() {
    const { renderValue, value } = this.props;

    return (
      <View style={styles.root}>
        <View style={styles.buttonContainer}>
          <TransparentButton onPress={this.onMinus}>
            <MinusCircleIcon width={36} height={36} fill="#000" />
          </TransparentButton>
        </View>
        {renderValue && renderValue(value)}
        <View style={styles.buttonContainer}>
          <TransparentButton width={36} height={36} onPress={this.onPlus}>
            <PlusCircleIcon width={36} height={36} fill="#000" />
          </TransparentButton>
        </View>
      </View>
    );
  }

  onMinus = () => {
    const { minValue, value } = this.props;
    if (minValue != null && value === minValue) {
      return;
    }
    this.props.onChange(value - 1);
  };

  onPlus = () => {
    const { maxValue, value } = this.props;
    if (maxValue != null && value === maxValue) {
      return;
    }
    this.props.onChange(value + 1);
  };
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  buttonContainer: {
    width: 52,
    alignItems: "center",
    justifyContent: "center"
  }
});
