import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites
} from "../../../actions/profileActions";
import BookmarkIcon from "../../../shared/icons/BookmarkIcon";
import BookmarkOutlineIcon from "../../../shared/icons/BookmarkOutlineIcon";
import IconButton from "../../../shared/IconButton";

class ProductDetailsHeaderRight extends Component {
  state = {
    product: null
  };

  componentDidMount() {
    const { navigation, products } = this.props;
    const productId = navigation.getParam("productId");
    const product = products.find(item => item.id === productId);

    this.setState({
      product
    });
  }

  render() {
    const { favorites } = this.props;
    const { product } = this.state;
    if (!product) {
      return null;
    }
    const inFavorites = favorites.has(product.id);
    return (
      <IconButton
        onPress={inFavorites ? this.removeFromFavorites : this.addToFavorites}
      >
        {inFavorites ? (
          <BookmarkIcon width={24} height={24} fill="#fff" />
        ) : (
          <BookmarkOutlineIcon width={24} height={24} fill="#fff" />
        )}
      </IconButton>
    );
  }

  addToFavorites = () => this.props.addToFavorites(this.state.product.id);

  removeFromFavorites = () =>
    this.props.removeFromFavorites(this.state.product.id);
}

const mapStateToProps = state => {
  return {
    products: state.catalog.products.get(state.catalog.selectedCategory),
    favorites: state.profile.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavorites: productId => dispatch(addToFavorites(productId)),
    removeFromFavorites: productId => dispatch(removeFromFavorites(productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsHeaderRight);
