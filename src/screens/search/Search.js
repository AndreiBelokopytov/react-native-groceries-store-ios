import React, { Component } from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import PopularListHeader from "./PopularListHeader/PopularListHeaderContainer";
import PopularListItem from "./PopularListItem";

class Search extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: "Поиск"
  };

  render() {
    const { searchPopular } = this.props;
    return (
      <SafeAreaView style={styles.root}>
        <FlatList
          data={searchPopular}
          renderItem={this.renderPopularListItem}
          keyExtractor={this.popularListItemKeyExtractor}
          ListHeaderComponent={PopularListHeader}
        />
      </SafeAreaView>
    );
  }

  renderPopularListItem = ({ item }) => {
    return (
      <PopularListItem
        searchRequest={item}
        searchProducts={this.props.searchProducts}
      />
    );
  };

  popularListItemKeyExtractor = item => item.id;
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default Search;
