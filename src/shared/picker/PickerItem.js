import React, { PureComponent } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";
import CheckmarkIcon from "../icons/CheckmarkIcon";

class PickerItem extends PureComponent {
  render() {
    const { text, checked } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this.selectItem}>
        <View style={styles.root}>
          <Text style={styles.text}>{text}</Text>
          {checked && (
            <CheckmarkIcon width={24} height={24} fill={colors.primary} />
          )}
        </View>
      </TouchableOpacity>
    );
  }

  selectItem = () => this.props.onPress && this.props.onPress(this.props.value);
}

const styles = StyleSheet.create({
  root: {
    height: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 13,
    lineHeight: 16,
    color: "#000"
  }
});

export default PickerItem;
