import * as React from "react";
import { View, Image, Animated, StyleSheet } from "react-native";
import { Header, Left, Right, Body, Title, Button, Icon } from "native-base";
import colors from "../../constants/colors";
import ImageGradient from "../../shared/ImageGradient";
import StyledText from "../../shared/StyledText";

export default class ProductsHero extends React.PureComponent {
  getTitleOpacity = () => {
    const { scrollY, expandedHeight } = this.props;

    return scrollY.interpolate({
      inputRange: [0, expandedHeight / 4.0],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });
  };

  getTitileTranslateY = () => {
    const { scrollY, expandedHeight } = this.props;
    return scrollY.interpolate({
      inputRange: [0, expandedHeight],
      outputRange: [0, -expandedHeight],
      extrapolate: "clamp"
    });
  };

  getOverlayBackgroundColor = () => {
    const { scrollY, expandedHeight } = this.props;
    return scrollY.interpolate({
      inputRange: [0, expandedHeight],
      outputRange: ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"],
      extrapolate: "clamp"
    });
  };

  render() {
    const { category, expandedHeight } = this.props;

    return <View style={[styles.root, { height: expandedHeight }]} />;
  }

  renderHeader = () => {
    const { category } = this.props;
    return (
      <Header transparent>
        <Left>
          <Button transparent>
            <Icon style={{ color: "#fff" }} name="ios-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{category ? category.name : ""}</Title>
        </Body>
        <Right />
      </Header>
    );
  };
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
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
    top: 0,
    width: "100%",
    height: "100%"
  },
  overlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%"
  },
  info: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: colors.white,
    opacity: 0.86
  },
  categoryName: {
    color: colors.white,
    marginBottom: 6
  }
});
