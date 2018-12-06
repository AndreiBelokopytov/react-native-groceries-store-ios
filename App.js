import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Navigator from "./src/Navigator";
import store from "./src/configureStore";
import navigationService from "./src/utils/navigationService";

export default class App extends React.Component {
  componentWillMount() {
    StatusBar.setBarStyle("dark-content");
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
          ref={navigationRef =>
            navigationService.setTopLevelNavigator(navigationRef)
          }
        />
      </Provider>
    );
  }
}
