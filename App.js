import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Dashboard } from "./Screens/Dashboard";
import { NewDeck } from "./Screens/NewDeck";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, AsyncStorage } from "react-native";
import { DeckNavigator } from "./Navigators/DeckNavigators";
import { Provider } from "react-redux";
import { store } from "./Store";
import { DecksThunks } from "./Store/thunks/decks";
import { Notifications } from "react-native-notifications";
import { DateTime } from "luxon";
import { setTopLevelNavigator } from "./Navigators/navigatorService";
const Tab = createBottomTabNavigator();
export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DecksThunks.loadDecks());
    Notifications.registerRemoteNotifications();
    Notifications.isRegisteredForRemoteNotifications().then(
      registerStudyNotification
    );
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DeckNavigator} />
      <Tab.Screen name="Add Deck" component={NewDeck} />
    </Tab.Navigator>
  );
}

async function registerStudyNotification() {
  const quizRegisteredForToday = await AsyncStorage.getItem(
    "@store:quizNotification" + DateTime.local().toFormat("yyyyooo")
  );
  if (quizRegisteredForToday != "registered") {
    try {
      await AsyncStorage.setItem(
        "@store:quizNotification" + DateTime.local().toFormat("yyyyooo"),
        "registered"
      );
    } catch (error) {
      console.error(error);
    }
    Notifications.postLocalNotification(
      {
        fireDate: parseInt(
          DateTime.local().set({ hour: 17, minute: 0, second: 0 }).toFormat("x")
        ),
        body: "Take the quiz today to see your status",
        title: "Time to study!",
        silent: false,
        userInfo: {},
      },
      parseInt(DateTime.local().toFormat("yyyyooo"))
    );
  }
}

export function Root() {
  return (
    <Provider store={store}>
      <NavigationContainer
        ref={(navigatorRef) => {
          setTopLevelNavigator(navigatorRef);
        }}
      >
        <App />
      </NavigationContainer>
    </Provider>
  );
}
