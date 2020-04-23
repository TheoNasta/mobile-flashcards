import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import styled from "styled-components";
import { Dashboard } from "./Components/Dashboard";
import { NewDeck } from "./Components/NewDeck";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default function App() {
  const Tabs = createBottomTabNavigator({
    Dashboard: {
      screen: Dashboard,
    },
    NewDeck: {
      screen: NewDeck,
    },
  });

  return (
    <NavigationContainer>
      <Holder>
        <Dashboard />
        <Tabs />
      </Holder>
    </NavigationContainer>
  );
}

const Holder = styled.SafeAreaView`
  flex: 1;
  background-color: #f6f3f0;
  align-items: center;
  justify-content: center;
`;
