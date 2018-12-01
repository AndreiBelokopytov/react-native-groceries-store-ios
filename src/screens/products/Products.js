import * as React from "react";
import {
  ActivityIndicator,
  Animated,
  FlatList,
  InteractionManager,
  Image,
  StyleSheet,
  View
} from "react-native";
import { Header } from "react-navigation";
import { withMappedNavigationProps } from "react-navigation-props-mapper";
import colors from "../../constants/colors";
import CollapsibleToolbar from "../../shared/CollapsibleToolbar";
import ImageGradient from "../../shared/ImageGradient";
import StyledText from "../../shared/StyledText";
import navigationService from "../../utils/navigationService";
import pluralize from "../../utils/pluralize";
import ProductItemSeparator from "./ProductItemSeparator";
import ProductListItem from "./ProductListItem";
import ProductsHeader from "./ProductsHeader";
import ProductsListHeader from "./ProductsListHeader";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const HEADER_HEIGHT = Header.HEIGHT;

const productsText = pluralize({
  "0": "нет продуктов",
  "1": "продукт",
  "2-4": "продукта",
  many: "продуктов"
});

class Products extends React.Component {
  static scrollY = new Animated.Value(0);
  static toolbarHeight = 220;

  state = {
    interactionEnded: false,
    allowVerticalScroll: true
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        interactionEnded: true
      });
      this.props.navigation.setParams({
        scrollY: Products.scrollY,
        toolbarHeight: Products.toolbarHeight
      });
    });
  }

  render() {
    const { products } = this.props;
    const { interactionEnded } = this.state;

    return (
      <View style={styles.root}>
        <CollapsibleToolbar
          expandedHeight={Products.toolbarHeight}
          headerHeight={HEADER_HEIGHT}
          scrollY={Products.scrollY}
          overlayColor={colors.white}
          renderBackground={this.renderToolbarBackground}
          renderTitle={this.renderToolbarTitle}
        />
        <View style={{ flex: 1 }}>
          {interactionEnded ? (
            <AnimatedFlatList
              style={styles.products}
              data={products}
              keyExtractor={this.productKeyExtractor}
              renderItem={this.renderListItem}
              contentContainerStyle={{
                paddingTop: Products.toolbarHeight,
                paddingBottom: 20
              }}
              scrollIndicatorInsets={{ top: Products.toolbarHeight }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: Products.scrollY } } }],
                {
                  userNativeDriver: true
                }
              )}
              ItemSeparatorComponent={ProductItemSeparator}
              ListHeaderComponent={ProductsListHeader}
            />
          ) : (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color={colors.icon} />
            </View>
          )}
        </View>
      </View>
    );
  }

  productKeyExtractor = item => item.id;

  renderListItem = ({ item }) => {
    const { favorites, addToFavorites, removeFromFavorites } = this.props;

    const inFavorites = favorites.has(item.id);
    return (
      <ProductListItem
        product={item}
        onSwipe={this.swipeScrollEvent}
        inFavorites={inFavorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        addToCart={this.addProductToCart}
        openDetails={this.openProductDetails}
      />
    );
  };

  renderToolbarBackground = props => {
    const { category } = this.props;
    return (
      <View {...props}>
        <Image
          style={styles.image}
          resizeMode={"cover"}
          source={{ uri: category.image_medium }}
        />
        <View style={styles.gradient}>
          <ImageGradient />
        </View>
      </View>
    );
  };

  renderToolbarTitle = ({ style: titleStyle, scrollY, expandedHeight }) => {
    const { category } = this.props;
    return (
      <Animated.View
        style={[
          titleStyle,
          styles.title,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, expandedHeight],
                  outputRange: [0, -expandedHeight],
                  extrapolate: "clamp"
                })
              }
            ]
          }
        ]}
      >
        <StyledText
          style={styles.categoryName}
          variant="title2"
          text={category.name}
        />
        <StyledText
          style={styles.categoryProducts}
          text={category.products + " " + productsText(category.products)}
        />
      </Animated.View>
    );
  };

  swipeScrollEvent = allowParentScroll => {
    if (this.state.allowVerticalScroll !== allowParentScroll) {
      this.setState({ allowVerticalScroll: allowParentScroll });
    }
  };

  addProductToCart = productId => {
    const { addToCart, selectedCategory: categoryId } = this.props;
    addToCart(productId, categoryId, 1);
  };

  openProductDetails = productId => {
    const { products } = this.props;
    const product = products.find(item => item.id === productId);
    navigationService.navigate("ProductDetails", {
      product
    });
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
  products: {
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  gradient: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%"
  },
  title: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  categoryProducts: {
    color: colors.white,
    opacity: 0.86
  },
  categoryName: {
    color: colors.white,
    marginBottom: 6
  }
});

Products.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <ProductsHeader
        scrollY={Products.scrollY}
        toolbarHeight={Products.toolbarHeight}
        navigation={navigation}
      />
    )
  };
};

export default withMappedNavigationProps()(Products);
