import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export const Dashboard = () => {
  return (
    <DashboardHolder>
      <Heading>Welcome to Mobile Flashcards</Heading>
      <DeckPrev>
        <DeckTitle>Deck Name Here</DeckTitle>
        <Span>3 cards</Span>
      </DeckPrev>
    </DashboardHolder>
  );
};

const DashboardHolder = styled.SafeAreaView`
  display: flex;
`;
const DeckPrev = styled.View`
  background-color: white;
  border-radius: 5px;
  margin-top: 15px;
  padding: 30px 20px;
  display: flex;
  align-items: center;
`;
const DeckTitle = styled.Text`
  font-size: 24px;
`;
const Span = styled.Text`
  font-size: 17px;
  color: #8b8b8b;
`;
const Heading = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
