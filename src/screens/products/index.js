import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  FlatList,
  InteractionManager,
  StatusBar
} from "react-native";
import { bookmarkProduct } from "../../actions/profileActions";
import SearchInput from "../../shared/SearchInput";
import navigationService from "../../utils/navigationService";
import ProductListHeader from "./components/ProductListHeader";
import ProductListItem from "./components/ProductListItem";

class Products extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: "#fff"
  };

  state = {
    category: null,
    interactionEnded: false,
    allowVerticalScroll: false
  };

  componentDidMount() {
    const { navigation, categories } = this.props;

    const categoryId = navigation.getParam("category");
    const category = categoryId
      ? categories.find(item => item.id === categoryId)
      : null;
    this.setState({
      category
    });
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        interactionEnded: true
      });
    });
    StatusBar.setBarStyle("light-content");
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content");
  }

  render() {
    const { products } = this.props;
    const { category, allowVerticalScroll, interactionEnded } = this.state;
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <ProductListHeader category={category} />
        </View>
        <View style={styles.filter}>
          <SearchInput placeholder="Поиск" onOpenFilter={this.openFilter} />
        </View>
        {interactionEnded && (
          <FlatList
            style={styles.products}
            data={products}
            keyExtractor={this.productKeyExtractor}
            renderItem={this.renderListItem}
            scrollEnabled={allowVerticalScroll}
            contentContainerStyle={{
              paddingBottom: 20
            }}
          />
        )}
      </View>
    );
  }

  productKeyExtractor = item => item.id;

  renderListItem = ({ item }) => {
    const bookmarked = this.props.bookmarkedProducts.has(item.id);
    return (
      <ProductListItem
        product={item}
        onSwipe={this.swipeScrollEvent}
        onBookmark={this.props.bookmark}
        bookmarked={bookmarked}
      />
    );
  };

  openFilter = () => navigationService.navigate("Filter");

  swipeScrollEvent = allowParentScroll => {
    if (this.state.allowVerticalScroll !== allowParentScroll) {
      this.setState({ allowVerticalScroll: allowParentScroll });
    }
  };
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
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    products: state.catalog.products.get(state.catalog.selectedCategory),
    categories: state.catalog.categories,
    bookmarkedProducts: state.profile.bookmarkedProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bookmark: productId => dispatch(bookmarkProduct(productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
