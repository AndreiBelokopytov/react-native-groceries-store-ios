import * as React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "../../shared/StyledText";

class FavoritesListEmpty extends React.PureComponent {
  render() {
    return (
      <View style={styles.root}>
        <StyledText text="В избранном пока ничего нет" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FavoritesListEmpty;
