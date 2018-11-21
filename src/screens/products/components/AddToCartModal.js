import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import ModalDialog from "../../../shared/ModalDialog";
import NumericInput from "../../../shared/Numeric";
import StyledButton from "../../../shared/StyledButton";

class AddToCartModal extends Component {
  state = {
    count: 1
  };

  render() {
    const { visible } = this.props;
    return (
      <ModalDialog
        height={296}
        visible={visible}
        renderContent={this.renderDialogContent}
      />
    );
  }

  renderDialogContent = () => {
    const { product } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <View style={styles.imageWrap}>
            {product.images.length > 0 && (
              <Image
                style={styles.image}
                source={{ uri: product.images[0].url }}
              />
            )}
          </View>
          <View style={styles.title}>
            <Text style={styles.productName}>{product.name}</Text>
          </View>
        </View>
        <View style={styles.numericInput}>
          <NumericInput
            value={this.state.count}
            minValue={1}
            onChange={this.updateProductCount}
            renderValue={this.renderCount}
          />
        </View>
        <View>
          <StyledButton big onPress={this.props.onClose}>
            <Text>Добавить в корзину</Text>
          </StyledButton>
        </View>
      </View>
    );
  };

  updateProductCount = count => {
    this.setState({
      count
    });
  };

  renderCount = value => {
    return (
      <View style={styles.countContainer}>
        <Text style={styles.count}>{value}</Text>
        <Text style={styles.totalPrice}>
          {value * this.props.product.price} ₽
        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16
  },
  header: {
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  imageWrap: {
    borderRadius: 12,
    width: 100,
    height: 100,
    shadowColor: "#000",
    shadowOpacity: 0.14,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 2
    },
    marginRight: 16
  },
  image: {
    borderRadius: 12,
    width: "100%",
    height: "100%"
  },
  title: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 16
  },
  productName: {
    fontSize: 17,
    lineHeight: 22
  },
  numericInput: {
    marginTop: 30,
    marginBottom: 34
  },
  countContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  count: {
    fontSize: 24
  },
  totalPrice: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.textGray
  }
});

export default AddToCartModal;
