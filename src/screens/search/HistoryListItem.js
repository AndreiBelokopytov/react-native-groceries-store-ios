import * as React from "react";
import { Text } from "react-native";
import StyledButton from "../../shared/StyledButton";
import navigationService from "../../utils/navigationService";

class HistoryListItem extends React.PureComponent {
  render() {
    const {
      searchRequest: { name }
    } = this.props;
    return (
      <StyledButton onPress={this.onPress}>
        <Text>{name}</Text>
      </StyledButton>
    );
  }

  onPress = () => {
    const {
      searchRequest: { name },
      searchProducts
    } = this.props;

    searchProducts(name);
    navigationService.navigate("SearchResults", {
      search: name
    });
  };
}

export default HistoryListItem;
