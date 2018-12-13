import * as React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import ScreenHeader from "../../../shared/ScreenHeader";
import SearchInput from "../../../shared/SearchInput";
import StyledText from "../../../shared/StyledText";
import navigationService from "../../../utils/navigationService";
import HistoryListItem from "../HistoryListItem";
import HistoryListItemSeparator from "../HistoryListItemSeparator";

class PopularListHeader extends React.PureComponent {
  render() {
    const { searchHistory } = this.props;
    return (
      <View style={styles.root}>
        <ScreenHeader>
          <StyledText text="Поиск" variant="title1" />
          <View style={styles.searchBar}>
            <SearchInput
              placeholder="Текст для поиска"
              onSubmitEditing={this.onSubmitSearch}
              onChangeText={this.onEditSearch}
            />
          </View>
        </ScreenHeader>
        <>
          <StyledText
            style={[styles.title, styles.padding]}
            text="История поиска:"
          />
          <FlatList
            data={searchHistory}
            renderItem={this.renderHistoryListItem}
            keyExtractor={this.historyListItemKeyExtractor}
            contentContainerStyle={styles.historyList}
            ItemSeparatorComponent={HistoryListItemSeparator}
            horizontal
          />
        </>
        <View style={[styles.border, styles.padding]} />
        <StyledText
          style={[styles.title, styles.secondTitle, styles.padding]}
          text="Популярные запросы:"
        />
      </View>
    );
  }

  renderHistoryListItem = ({ item }) => {
    return (
      <HistoryListItem
        searchRequest={item}
        searchProducts={this.props.searchProducts}
      />
    );
  };

  historyListItemKeyExtractor = item => item.id;

  onEditSearch = text => {
    this.setState({
      inputText: text
    });
  };

  onSubmitSearch = () => {
    this.props.searchProducts(this.state.inputText);
    navigationService.navigate("SearchResults");
  };
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 10
  },
  searchBar: {
    marginTop: 10
  },
  historyList: {
    paddingLeft: 20,
    paddingVertical: 10
  },
  title: {
    color: colors.textGray,
    marginTop: 10
  },
  secondTitle: {
    marginTop: 10
  },
  padding: {
    paddingHorizontal: 20
  },
  border: {
    borderBottomColor: colors.hairlineBorder,
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 1
  }
});

export default PopularListHeader;
