import * as React from "react";
import styled from "styled-components";
import { Dashboard } from "./Screens/Dashboard";
import { NewDeck } from "./Screens/NewDeck";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Dashboard} icon />
        <Tab.Screen name="Add Deck" component={NewDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Holder = styled.SafeAreaView`
  flex: 1;
  background-color: #f6f3f0;
  align-items: center;
  justify-content: center;
`;
