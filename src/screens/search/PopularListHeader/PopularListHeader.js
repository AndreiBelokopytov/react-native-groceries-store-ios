import * as React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import StyledText from "../../../shared/StyledText";
import HistoryListItem from "../HistoryListItem";
import HistoryListItemSeparator from "../HistoryListItemSeparator";

class PopularListHeader extends React.PureComponent {
  render() {
    const { searchHistory } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.searchHistory}>
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
        </View>
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
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 10
  },
  searchHistory: {},
  historyList: {
    paddingLeft: 20,
    paddingVertical: 10
  },
  title: {
    color: colors.textGray
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
