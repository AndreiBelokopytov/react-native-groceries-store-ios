import React, { PureComponent } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MinusCircleIcon from "./icons/MinusCircleIcon";
import PlusCircleIcon from "./icons/PlusCircleIcon";

export default class NumericInput extends PureComponent {
  static defaultProps = {
    value: 0
  };

  render() {
    const { renderValue, value } = this.props;

    return (
      <View style={styles.root}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onMinus} activeOpacity={0.5}>
            <MinusCircleIcon width={24} height={24} fill="#000" />
          </TouchableOpacity>
        </View>
        {renderValue && renderValue(value)}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onPlus} activeOpacity={0.5}>
            <PlusCircleIcon width={24} height={24} fill="#000" />
          </TouchableOpacity>
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
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center"
  }
});
