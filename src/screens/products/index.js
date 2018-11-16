import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, FlatList } from "react-native";
import SearchInput from "../../shared/SearchInput";
import navigationService from "../../utils/navigationService";
import ProductListHeader from "./components/ProductListHeader";
import ProductListItem from "./components/ProductListItem";
import ProductListSeparator from "./components/ProductListSeparator";

class Products extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: "#fff"
  };

  render() {
    const { category, products } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <ProductListHeader category={category} />
        </View>
        <View style={styles.filter}>
          <SearchInput placeholder="Поиск" onOpenFilter={this.openFilter} />
        </View>
        <FlatList
          style={styles.products}
          data={products}
          keyExtractor={this.productKeyExtractor}
          renderItem={this.renderListItem}
          ItemSeparatorComponent={ProductListSeparator}
          contentContainerStyle={{
            paddingVertical: 20
          }}
        />
      </View>
    );
  }

  productKeyExtractor = item => item.id;

  renderListItem = ({ item }) => <ProductListItem item={item} />;

  openFilter = () => navigationService.navigate("Filter");
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 222,
    width: "100%"
  },
  filter: {
    width: "100%",
    height: 68,
    paddingLeft: 14,
    paddingRight: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  products: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  }
});

const mapStateToProps = state => {
  const selectedCategory = state.catalog.selectedCategory;
  return {
    products: state.catalog.products.get(state.catalog.selectedCategory),
    category: selectedCategory
      ? state.catalog.categories.find(item => item.id === selectedCategory)
      : null
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
