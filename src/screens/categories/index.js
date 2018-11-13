import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import CategoryListItem from "./components/CategoryListItem";
import CategoryListSeparator from "./components/CategoryListSeparator";
import CategoriesIcon from "./components/CategoriesIcon";
import api from "../../utils/api";

class Categories extends Component {
  static navigationOptions = {
    title: "Категории",
    tabBarIcon: CategoriesIcon
  };

  state = {
    categories: [],
    total: 0
  };

  componentDidMount() {
    api.getCategories().then(categories => {
      this.setState({
        ...categories
      });
    });
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.root}>
          <FlatList
            data={this.state.categories}
            keyExtractor={this.categoryKeyExtractor}
            renderItem={this.renderListItem}
            ItemSeparatorComponent={CategoryListSeparator}
          />
        </View>
      </SafeAreaView>
    );
  }

  categoryKeyExtractor = item => item.id;

  renderListItem = ({ item }) => <CategoryListItem item={item} />;
}

const styles = StyleSheet.create({
  root: {
    padding: 20
  }
});

export default Categories;
