import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { loadCategories } from "../../actions/catalogActions";
import navigationService from "../../utils/navigationService";

class Loading extends Component {
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    if (!this.props.navigation.isFocused) {
      return;
    }
    if (!this.props.loadingError && !this.props.isLoadingData) {
      navigationService.navigate("Tabs");
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>Загрузка каталога продукции</Text>
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
    textAlign: "center"
  }
});

const mapStateToProps = state => {
  return {
    isLoadingData: state.catalog.isLoadingCategories,
    loadingError: state.catalog.loadingCategoriesError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCategories: () => dispatch(loadCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
