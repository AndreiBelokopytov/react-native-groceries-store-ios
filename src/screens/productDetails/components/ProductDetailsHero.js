import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, StyleSheet } from "react-native";
import ImageGradient from "../../../shared/ImageGradient";

class ProductDetailsHero extends Component {
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
    const { product } = this.state;

    return (
      <View style={styles.root}>
        {product && product.images && product.images.length && (
          <React.Fragment>
            <View style={styles.background}>
              <Image
                style={styles.image}
                source={{ uri: product.images[0].url_large }}
              />
            </View>
            <View style={styles.gradient}>
              <ImageGradient />
            </View>
          </React.Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "stretch"
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%"
  }
});

const mapStateToProps = state => {
  return {
    products: state.catalog.products.get(state.catalog.selectedCategory)
  };
};

export default connect(mapStateToProps)(ProductDetailsHero);
