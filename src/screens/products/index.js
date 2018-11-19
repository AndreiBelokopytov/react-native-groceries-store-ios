import React, { Component } from "react";
import { Header, Left, Button, Body, Title, Right, Icon } from "native-base";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  FlatList,
  InteractionManager,
  ActivityIndicator,
  Animated
} from "react-native";
import {
  addToFavorites,
  removeFromFavorites
} from "../../actions/profileActions";
import colors from "../../constants/colors";
import navigationService from "../../utils/navigationService";
import {
  IPHONE_HEADER_HEIGHT,
  IPHONE_STATUS_BAR_HEIGHT
} from "../../utils/statusBarDimensions";
import ProductListHeader from "./components/ProductListHeader";
import ProductListImageBg from "./components/ProductListImageBg";
import ProductListItem from "./components/ProductListItem";

const IMAGE_HEADER_HEIGHT = 222;
const HEADER_HEIGHT = IPHONE_HEADER_HEIGHT + IPHONE_STATUS_BAR_HEIGHT;
const HEADER_BOUNCE_HEIGHT = 140;
const TITLE_OPACITY_BOUNCE_HEIGHT = 40;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class Products extends Component {
  scrollY = new Animated.Value(0);

  state = {
    showTransparentNav: true,
    category: null,
    interactionEnded: false,
    allowVerticalScroll: false
  };

  getContentTitleOpacity = () =>
    this.scrollY.interpolate({
      inputRange: [0, TITLE_OPACITY_BOUNCE_HEIGHT],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

  getImageOpacity = () =>
    this.scrollY.interpolate({
      inputRange: [
        IMAGE_HEADER_HEIGHT - HEADER_BOUNCE_HEIGHT,
        IMAGE_HEADER_HEIGHT - HEADER_HEIGHT
      ],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

  getBackIconColor = () =>
    this.scrollY.interpolate({
      inputRange: [
        IMAGE_HEADER_HEIGHT - HEADER_BOUNCE_HEIGHT,
        IMAGE_HEADER_HEIGHT - HEADER_HEIGHT
      ],
      outputRange: ["#fff", "#000"],
      extrapolate: "clamp"
    });

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

    this.scrollY.addListener(scrollY => {
      if (
        scrollY.value > IMAGE_HEADER_HEIGHT - HEADER_HEIGHT &&
        this.state.showTransparentNav
      ) {
        this.setState({
          showTransparentNav: false
        });
      } else if (
        scrollY.value < IMAGE_HEADER_HEIGHT - HEADER_HEIGHT &&
        !this.state.showTransparentNav
      ) {
        this.setState({
          showTransparentNav: true
        });
      }
    });
  }

  render() {
    const { products } = this.props;
    const {
      category,
      allowVerticalScroll,
      interactionEnded,
      showTransparentNav
    } = this.state;
    return (
      <View style={styles.root}>
        {category && (
          <React.Fragment>
            <Animated.View
              style={[styles.imageBg, { opacity: this.getImageOpacity() }]}
            >
              <ProductListImageBg image={category.image} />
            </Animated.View>
            <Animated.View
              style={[
                styles.header,
                {
                  opacity: this.getContentTitleOpacity()
                }
              ]}
            >
              <ProductListHeader category={category} />
            </Animated.View>
          </React.Fragment>
        )}

        <Header
          transparent={showTransparentNav}
          noShadow
          style={{
            backgroundColor: showTransparentNav ? "transparent" : "#fff"
          }}
        >
          <Left>
            <Button transparent style={{ marginLeft: 20 }}>
              <AnimatedIcon
                name="ios-arrow-back"
                style={{ color: this.getBackIconColor() }}
                onPress={navigationService.goBack}
              />
            </Button>
          </Left>
          <Body>
            {category && !showTransparentNav && <Title>{category.name}</Title>}
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1 }}>
          {interactionEnded ? (
            <AnimatedFlatList
              style={styles.products}
              data={products}
              keyExtractor={this.productKeyExtractor}
              renderItem={this.renderListItem}
              scrollEnabled={allowVerticalScroll}
              contentContainerStyle={{
                paddingTop: IMAGE_HEADER_HEIGHT - HEADER_HEIGHT + 16,
                paddingBottom: 16
              }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
                {
                  userNativeDriver: true
                }
              )}
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
      />
    );
  };

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
  imageBg: {
    position: "absolute",
    top: 0,
    height: IMAGE_HEADER_HEIGHT,
    width: "100%"
  },
  header: {
    position: "absolute",
    top: 0,
    height: IMAGE_HEADER_HEIGHT,
    width: "100%"
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
  }
});

const mapStateToProps = state => {
  return {
    products: state.catalog.products.get(state.catalog.selectedCategory),
    categories: state.catalog.categories,
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
)(Products);
