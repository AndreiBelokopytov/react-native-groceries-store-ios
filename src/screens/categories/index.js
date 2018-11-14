import React, { Component } from "react";
import { connect } from "react-redux";
import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import navigationService from "../../utils/navigationService";
import CategoryListItem from "./components/CategoryListItem";
import CategoryListSeparator from "./components/CategoryListSeparator";
import CategoriesIcon from "./components/CategoriesIcon";

class Categories extends Component {
  static navigationOptions = {
    header: null,
    title: "Категории",
    tabBarIcon: CategoriesIcon,
    headerBackTitle: null
  };

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <FlatList
            data={this.props.categories}
            keyExtractor={this.categoryKeyExtractor}
            renderItem={this.renderListItem}
            ItemSeparatorComponent={CategoryListSeparator}
          />
        </View>
      </SafeAreaView>
    );
  }

  categoryKeyExtractor = item => item.id;

  renderListItem = ({ item }) => (
    <CategoryListItem item={item} onPressItem={this.viewProductsInCategory} />
  );

  viewProductsInCategory = id =>
    navigationService.navigate("Products", {
      category: id
    });
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    padding: 20
  }
});

const mapStateToProps = state => {
  return {
    categories: state.catalog.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
