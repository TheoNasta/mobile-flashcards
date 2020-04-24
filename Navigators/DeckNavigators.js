import React from "react";
import { Dashboard } from "../Screens/Dashboard";
import { DeckView } from "../Screens/DeckView";
import { createStackNavigator } from "@react-navigation/stack";
import { AddQuestion } from "../Screens/AddQuestion";
import { QuizQuestion } from "../Screens/QuizQuestion";

const Stack = createStackNavigator();
export const DeckNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Dashboard} icon />
      <Stack.Screen name="Deck" component={DeckView} icon />
      <Stack.Screen name="AddQuestion" component={AddQuestion} icon />
      <Stack.Screen name="QuizQuestion" component={QuizQuestion} icon />
    </Stack.Navigator>
  );
};
