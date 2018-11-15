import React, { Component } from "react";
import { View } from "react-native";
import ProfileIcon from "../../shared/icons/ProfileIcon";
import tabBarIcon from "../../shared/TabBarIcon";

class Profile extends Component {
  static navigationOptions = {
    title: "Профиль",
    tabBarIcon: tabBarIcon(ProfileIcon)
  };
  render() {
    return <View />;
  }
}

export default Profile;
