import * as React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  InteractionManager
} from "react-native";
import colors from "../../constants/colors";
import { ProductList } from "../../shared/productList";
import FavoritesListEmpty from "./FavoritesListEmpty";

class Favorites extends React.Component {
  state = {
    interactionEnded: false,
    allowVerticalScroll: true
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        interactionEnded: true
      });
    });
  }

  render() {
    const { interactionEnded } = this.state;

    const { products } = this.props;

    return (
      <View style={styles.root}>
        {interactionEnded ? (
          <ProductList
            products={products}
            ListEmptyComponent={FavoritesListEmpty}
          />
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={colors.icon} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

Favorites.navigationOptions = {
  title: "Избранное"
};

export default Favorites;
