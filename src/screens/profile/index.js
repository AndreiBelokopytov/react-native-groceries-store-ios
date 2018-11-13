import React, { Component } from "react";
import { View } from "react-native";
import ProfileIcon from "./components/ProfileIcon";

class Profile extends Component {
  static navigationOptions = {
    title: "Профиль",
    tabBarIcon: ProfileIcon
  };
  render() {
    return <View />;
  }
}

export default Profile;
