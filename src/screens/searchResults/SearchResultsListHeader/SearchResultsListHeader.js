import * as React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import StyledText from "../../../shared/StyledText";
import pluralize from "../../../utils/pluralize";

const resultsText = pluralize({
  "0": "нет результатов",
  "1": "результат",
  "2-4": "результата",
  many: "результатов"
});

export default class SearchResultsListHeader extends React.Component {
  render() {
    const { searchResults, search } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.title}>
          <StyledText
            style={styles.titleBlack}
            text="По запросу "
            variant="title3"
          />
          <StyledText style={styles.titleRed} text={search} variant="title3" />
        </View>
        <StyledText
          style={styles.subtitle}
          text={`Найдено ${searchResults.length} ${resultsText(
            searchResults.length
          )}:`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20
  },
  title: {
    flexDirection: "row",
    marginTop: 24
  },
  titleBlack: {
    color: colors.black
  },
  titleRed: {
    color: colors.primary
  },
  subtitle: {
    color: colors.textGray,
    marginTop: 10,
    marginBottom: 24
  }
});
