import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";
import navigationService from "../../utils/navigationService";

class PopularListItem extends React.PureComponent {
  render() {
    const {
      searchRequest: { name }
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.root}
        activeOpacity={0.5}
        onPress={this.onPress}
      >
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    const {
      searchRequest: { name },
      searchProducts
    } = this.props;

    searchProducts(name);
    navigationService.navigate("SearchResults", {
      search: name
    });
  };
}

const styles = StyleSheet.create({
  root: {
    height: 57,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 19,
    lineHeight: 22,
    color: colors.primary
  }
});

export default PopularListItem;
