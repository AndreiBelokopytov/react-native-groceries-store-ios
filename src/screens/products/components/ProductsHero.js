import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, StyleSheet } from "react-native";
import CategoryInfo from "../../../shared/CategoryInfo";
import ImageGradient from "../../../shared/ImageGradient";

class ProductsHero extends Component {
  state = {
    category: null
  };

  componentDidMount() {
    const { navigation, categories } = this.props;

    const categoryId = navigation.getParam("category");
    const category = categoryId
      ? categories.find(item => item.id === categoryId)
      : null;
    this.setState({
      category
    });
  }

  render() {
    const { category } = this.state;

    return (
      <View style={styles.root}>
        {category && (
          <React.Fragment>
            <View style={styles.background}>
              <Image style={styles.image} source={{ uri: category.image }} />
              <View style={styles.gradient}>
                <ImageGradient />
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Категория</Text>
              <CategoryInfo name={category.name} products={category.products} />
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
    top: 0,
    width: "100%",
    height: "100%"
  },
  info: {
    paddingLeft: 20,
    paddingRight: 30,
    paddingBottom: 26
  },
  title: {
    marginBottom: 5,
    color: "#fff",
    fontSize: 13,
    lineHeight: 16,
    textShadowOffset: {
      width: 1,
      height: 0
    },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.16)"
  }
});

const mapStateToProps = state => {
  return {
    categories: state.catalog.categories
  };
};

export default connect(mapStateToProps)(ProductsHero);
