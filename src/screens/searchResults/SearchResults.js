import * as React from "react";
import {
  View,
  StyleSheet,
  InteractionManager,
  ActivityIndicator
} from "react-native";
import colors from "../../constants/colors";
import { ProductList } from "../../shared/productList";
import productListEmpty from "../../shared/productList/ProductListEmpty";
import { SearchResultsListHeader } from "./SearchResultsListHeader";

const ProductListEmpty = productListEmpty(
  "По вашему запросу ничего не найдено"
);

export default class SearchResults extends React.Component {
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
            ListEmptyComponent={ProductListEmpty}
            ListHeaderComponent={SearchResultsListHeader}
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
