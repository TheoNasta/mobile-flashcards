import { CommonActions } from "@react-navigation/native";
let navigator;

export const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(CommonActions.navigate(routeName, params));
};
