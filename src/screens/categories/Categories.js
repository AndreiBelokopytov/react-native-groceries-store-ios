import * as React from "react";
import { FlatList, InteractionManager, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import CategoryListItem from "./CategoryListItem";
import CategoryListSeparator from "./CategoryListSeparator";
import navigationService from "../../utils/navigationService";

class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <SafeAreaView style={styles.root}>
        <FlatList
          style={styles.categories}
          data={categories}
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
    <CategoryListItem category={item} onPress={this.viewProductsInCategory} />
  );

  viewProductsInCategory = categoryId => {
    const { categories } = this.props;
    const category = categories.find(item => item.id === categoryId);
    navigationService.navigate("Products", {
      category
    });
    InteractionManager.runAfterInteractions(() => {
      this.props.selectCategory(categoryId);
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

export default Categories;
