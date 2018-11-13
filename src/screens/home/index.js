import React, { Component } from "react";
import { View } from "react-native";
import HomeIcon from "./components/HomeIcon";

class Home extends Component {
  static navigationOptions = {
    title: "Главная",
    tabBarIcon: HomeIcon
  };
  render() {
    return <View />;
  }
}

export default Home;
