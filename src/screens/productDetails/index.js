import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet, Animated } from "react-native";
import connect from "react-redux/es/connect/connect";
import { addToShoppingCart } from "../../actions/profileActions";
import colors from "../../constants/colors";
import sliverHeader from "../../shared/sliverHeader";
import Label from "../../shared/Label";
import StyledButton from "../../shared/StyledButton";
import StyledText from "../../shared/StyledText";
import ProductDetailsHeaderRight from "./components/ProductDetailsHeaderRight";
import ProductDetailsHero from "./components/ProductDetailsHero";

class ProductDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <ProductDetailsHeaderRight navigation={navigation} />
    };
  };

  state = {
    products: null
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
    const { collapsibleHeight, scrollY } = this.props;
    return (
      <ScrollView
        style={styles.root}
        contentContainerStyle={{
          marginTop: collapsibleHeight,
          alignItems: "flex-start",
          backgroundColor: "#fff",
          padding: 20
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            userNativeDriver: true
          }
        )}
      >
        {product && (
          <React.Fragment>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.btnAdd}>
              <StyledButton outline onPress={this.addProductToCart}>
                <Text>Добавить за {product.price} ₽</Text>
              </StyledButton>
            </View>
            <View style={styles.description}>
              <View style={styles.subtitle}>
                <StyledText variant="h3" text="Описание" />
              </View>
              <Label text={product.description} />
            </View>
          </React.Fragment>
        )}
      </ScrollView>
    );
  }

  addProductToCart = () => {
    const { addToCart, selectedCategory: categoryId } = this.props;
    const { product } = this.state;
    addToCart(product.id, categoryId, 1);
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  productName: {
    fontSize: 22,
    lineHeight: 25,
    fontWeight: "600"
  },
  btnAdd: {
    marginTop: 14
  },
  description: {
    marginTop: 35
  },
  subtitle: {
    marginBottom: 10
  }
});

const mapStateToProps = state => {
  return {
    products: state.catalog.products.get(state.catalog.selectedCategory),
    selectedCategory: state.catalog.selectedCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (productId, categoryId, count) =>
      dispatch(addToShoppingCart(productId, categoryId, count))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  sliverHeader(ProductDetails, {
    HeroComponent: ProductDetailsHero,
    accentColor: "#fff",
    tintColor: colors.primary,
    backgroundColor: "#fff",
    expandedHeight: 220
  })
);
