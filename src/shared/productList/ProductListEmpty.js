import * as React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "../StyledText";

const productListEmpty = message => {
  return () => (
    <View style={styles.root}>
      <StyledText text={message} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default productListEmpty;
