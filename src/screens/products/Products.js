import * as React from "react";
import {
  ActivityIndicator,
  Animated,
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
import { ProductList } from "../../shared/productList";
import StyledText from "../../shared/StyledText";
import pluralize from "../../utils/pluralize";
import ProductsHeader from "./ProductsHeader";

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

  onListScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: Products.scrollY } } }],
    {
      userNativeDriver: true
    }
  );

  componentDidMount() {
    Products.scrollY.setValue(0);
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        interactionEnded: true
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
            <ProductList
              products={products}
              onScroll={this.onListScroll}
              paddingTop={Products.toolbarHeight}
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
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  content: {
    position: "absolute",
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
