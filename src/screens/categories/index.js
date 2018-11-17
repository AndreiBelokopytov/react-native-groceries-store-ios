import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, StyleSheet, InteractionManager } from "react-native";
import { SafeAreaView } from "react-navigation";
import { selectCategory } from "../../actions/catalogActions";
import tabBarIcon from "../../shared/TabBarIcon";
import navigationService from "../../utils/navigationService";
import CategoryListItem from "./components/CategoryListItem";
import CategoryListSeparator from "./components/CategoryListSeparator";
import CategoriesIcon from "../../shared/icons/CategoriesIcon";

class Categories extends Component {
  static navigationOptions = {
    header: null,
    title: "Категории",
    tabBarIcon: tabBarIcon(CategoriesIcon),
    headerBackTitle: null
  };

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <FlatList
          style={styles.categories}
          data={this.props.categories}
          keyExtractor={this.categoryKeyExtractor}
          renderItem={this.renderListItem}
          ItemSeparatorComponent={CategoryListSeparator}
          contentContainerStyle={{
            paddingVertical: 20
          }}
        />
      </SafeAreaView>
    );
  }

  categoryKeyExtractor = item => item.id;

  renderListItem = ({ item }) => (
    <CategoryListItem item={item} onPressItem={this.viewProductsInCategory} />
  );

  viewProductsInCategory = id => {
    navigationService.navigate("Products", {
      category: id
    });
    InteractionManager.runAfterInteractions(() => {
      this.props.selectCategory(id);
    });
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  categories: {
    paddingLeft: 20,
    paddingRight: 20
  }
});

const mapStateToProps = state => {
  return {
    categories: state.catalog.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: categoryId => dispatch(selectCategory(categoryId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
