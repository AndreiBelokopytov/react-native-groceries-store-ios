import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Animated,
  Image
} from "react-native";
import { Header } from "react-navigation";
import { withMappedNavigationProps } from "react-navigation-props-mapper";
import colors from "../../constants/colors";
import CollapsibleToolbar from "../../shared/CollapsibleToolbar";
import StyledButton from "../../shared/StyledButton";
import StyledText from "../../shared/StyledText";
import ProductDetailsHeader from "./ProductDetailsHeader";

const HEADER_HEIGHT = Header.HEIGHT;

class ProductDetails extends Component {
  static toolbarHeight = 220;
  static scrollY = new Animated.Value(0);

  render() {
    const { product } = this.props;

    return (
      <View style={styles.root}>
        <CollapsibleToolbar
          expandedHeight={ProductDetails.toolbarHeight}
          headerHeight={HEADER_HEIGHT}
          scrollY={ProductDetails.scrollY}
          overlayColor={colors.white}
          renderBackground={this.renderToolbarBackground}
        />
        <ScrollView
          style={styles.content}
          contentContainerStyle={{
            marginTop: ProductDetails.toolbarHeight,
            alignItems: "flex-start",
            padding: 20
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: ProductDetails.scrollY } } }],
            {
              userNativeDriver: true
            }
          )}
        >
          {product && (
            <React.Fragment>
              <StyledText
                variant="title2"
                style={styles.productName}
                text={product.name}
              />
              <View style={styles.btnAdd}>
                <StyledButton outline onPress={this.addProductToCart}>
                  <Text>Добавить за {product.price} ₽</Text>
                </StyledButton>
              </View>
              <View style={styles.description}>
                <View style={styles.subtitle}>
                  <StyledText variant="h3" text="Описание" />
                </View>
                <StyledText text={product.description} />
              </View>
            </React.Fragment>
          )}
        </ScrollView>
      </View>
    );
  }

  renderToolbarBackground = props => {
    const { product } = this.props;
    if (!product.images.length) {
      return null;
    }
    return (
      <View {...props}>
        <Image
          style={styles.image}
          resizeMode={"cover"}
          source={{ uri: product.images[0].url_medium }}
        />
      </View>
    );
  };

  addProductToCart = () => {
    const {
      addToCart,
      selectedCategory: categoryId,
      product: { id }
    } = this.props;
    addToCart(id, categoryId, 1);
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  content: {
    position: "absolute",
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  },
  productName: {
    color: colors.black
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

ProductDetails.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <ProductDetailsHeader
        navigation={navigation}
        scrollY={ProductDetails.scrollY}
        toolbarHeight={ProductDetails.toolbarHeight}
      />
    )
  };
};

export default withMappedNavigationProps()(ProductDetails);
