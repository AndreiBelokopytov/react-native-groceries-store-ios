import * as React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import StyledText from "../../shared/StyledText";
import navigationService from "../../utils/navigationService";

class Loading extends React.Component {
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    const { isLoadingData, loadingError, navigation } = this.props;

    if (!navigation.isFocused) {
      return;
    }
    if (!loadingError && !isLoadingData) {
      navigationService.navigate("Tabs");
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <StyledText style={styles.text} text="Загрузка каталога продукции" />
        <ActivityIndicator color={colors.icon} />
      </View>
    );
  }

  loadData = () => this.props.loadCategories();
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    color: colors.text
  }
});

export default Loading;
