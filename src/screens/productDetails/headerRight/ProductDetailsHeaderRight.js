import * as React from "react";
import BookmarkIcon from "../../../shared/icons/BookmarkIcon";
import BookmarkOutlineIcon from "../../../shared/icons/BookmarkOutlineIcon";
import IconButton from "../../../shared/IconButton";

export default class ProductDetailsHeaderRight extends React.PureComponent {
  render() {
    const { favorites, product } = this.props;
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

  addToFavorites = () => this.props.addToFavorites(this.props.product.id);

  removeFromFavorites = () =>
    this.props.removeFromFavorites(this.props.product.id);
}
