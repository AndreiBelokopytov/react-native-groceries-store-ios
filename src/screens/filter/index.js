import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { updateSortOrder } from "../../actions/profileActions";
import HeaderButtons from "../../shared/HeaderButtons";
import CloseIcon from "../../shared/icons/CloseIcon";
import Picker from "../../shared/picker/Picker";
import StyledButton from "../../shared/StyledButton";
import StyledText from "../../shared/StyledText";
import navigationService from "../../utils/navigationService";

class Filter extends Component {
  static navigationOptions = {
    title: "фильтры",
    headerLeft: (
      <HeaderButtons side="left">
        <StyledButton onPress={navigationService.goBack} transparent>
          <CloseIcon width={24} height={24} fill="#000" />
        </StyledButton>
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons side="right">
        <StyledButton transparent>
          <Text>Сбросить</Text>
        </StyledButton>
      </HeaderButtons>
    )
  };

  sortOrderVariants = [
    {
      text: "По умолчанию",
      value: "default"
    },
    {
      text: "По рейтингу",
      value: "rating"
    },
    {
      text: "По популярности",
      value: "popularity"
    },
    {
      text: "По возрастанию цены",
      value: "price_asc"
    },
    {
      text: "По убыванию цены",
      value: "price_desc"
    }
  ];

  render() {
    const { sortOrder, updateSortOrder } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.sortOrder}>
          <StyledText variant="h2" text="Порядок результатов" />
          <View style={styles.sortOrderPicker}>
            <Picker
              selectedValue={sortOrder}
              items={this.sortOrderVariants}
              onChange={updateSortOrder}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  sortOrder: {
    marginTop: 20
  },
  sortOrderPicker: {
    marginTop: 20
  }
});

const mapStateToProps = state => {
  return {
    sortOrder: state.profile.productsSortOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSortOrder: sortOrder => dispatch(updateSortOrder(sortOrder))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
