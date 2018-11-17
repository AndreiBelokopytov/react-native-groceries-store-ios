import {
  NavigationActions,
  StackActions,
  DrawerActions
} from "react-navigation";

let _navigator;

function setTopLevelNavigator(navRef) {
  _navigator = navRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer({}));
}

function goBack() {
  _navigator.dispatch(NavigationActions.back());
}

function pop() {
  _navigator.dispatch(StackActions.pop());
}

function push(routeName, params) {
  _navigator.dispatch(StackActions.push(routeName, params));
}

export default {
  setTopLevelNavigator,
  navigate,
  goBack,
  openDrawer,
  pop,
  push
};
