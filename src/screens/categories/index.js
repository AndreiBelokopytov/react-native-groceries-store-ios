import React, { Component } from "react";
import { connect } from "react-redux";
import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import CategoryListItem from "./components/CategoryListItem";
import CategoryListSeparator from "./components/CategoryListSeparator";
import CategoriesIcon from "./components/CategoriesIcon";

class Categories extends Component {
  static navigationOptions = {
    title: "Категории",
    tabBarIcon: CategoriesIcon
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.root}>
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

  renderListItem = ({ item }) => <CategoryListItem item={item} />;
}

const styles = StyleSheet.create({
  root: {
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
