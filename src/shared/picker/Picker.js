import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PickerItem from "./PickerItem";

class Picker extends Component {
  render() {
    const { items, selectedValue, onChange } = this.props;

    const pickerItems = items.map((item, index) => (
      <View key={index}>
        <PickerItem
          text={item.text}
          value={item.value}
          checked={item.value === selectedValue}
          onPress={onChange}
        />
        {index !== items.length && <View style={styles.splitter} />}
      </View>
    ));
    return <View style={styles.root}>{pickerItems}</View>;
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: "stretch"
  },
  splitter: {
    marginBottom: 12
  }
});

export default Picker;
