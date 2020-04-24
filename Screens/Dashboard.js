import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { Heading } from "../Components/Heading";
import { useSelector } from "react-redux";
import {
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler";

export const Dashboard = ({ navigation, route }) => {
  const decks = useSelector((state) => {
    return state.decks;
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Heading>Welcome to Mobile Flashcards</Heading>
      {decks.all.length > 0 ? (
        decks.all.map((dId) => {
          const deck = decks.at[dId];
          return (
            <TouchableOpacity
              key={dId}
              onPress={() => {
                navigation.navigate("Deck", {
                  deckId: dId,
                });
              }}
            >
              <DeckPrev>
                <DeckTitle>{deck.title}</DeckTitle>
                <Span>
                  {deck.cards.length == 0
                    ? "You have no cards"
                    : `${deck.cards.length} cards`}
                </Span>
              </DeckPrev>
            </TouchableOpacity>
          );
        })
      ) : (
        <Span>You have no decks. Create one frmo the decks tab.</Span>
      )}
    </ScrollView>
  );
};

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
