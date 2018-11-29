import * as React from "react";
import { View, StyleSheet, Image, Animated } from "react-native";
import { HeaderBackButton } from "react-navigation";
import { withMappedNavigationProps } from "react-navigation-props-mapper";
import { Header } from "../../shared/header";
import ImageGradient from "../../shared/ImageGradient";
import StyledText from "../../shared/StyledText";
import navigationService from "../../utils/navigationService";
import colors from "../../constants/colors";

class ProductsHeader extends React.Component {
  render() {
    const { category, translateOpacity } = this.props;

    return (
      <View style={styles.root}>
        {category && (
          <React.Fragment>
            <View style={styles.background}>
              <Image
                style={styles.image}
                resizeMode={"cover"}
                source={{ uri: category.image_medium }}
              />
              <View style={styles.gradient}>
                <ImageGradient />
              </View>
              <Animated.View
                style={[
                  styles.overlay,
                  {
                    opacity: translateOpacity
                  }
                ]}
              />
            </View>
            <Animated.View style={[styles.info]}>
              <StyledText
                style={styles.categoryName}
                variant="title2"
                text={category.name}
              />
              <StyledText style={styles.title} text="Категория" />
            </Animated.View>
          </React.Fragment>
        )}
        <Header>
          <Header.Left>
            <HeaderBackButton
              tintColor={colors.white}
              onPress={navigationService.goBack}
            />
          </Header.Left>
          <Header.Body />
          <Header.Right />
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: 220
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

export default withMappedNavigationProps()(ProductsHeader);
