import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Heading } from "../Components/Heading";
import { DecksActions } from "../Store/actions/decks";
import { DecksThunks } from "../Store/thunks/decks";
import { ScrollView } from "react-native-gesture-handler";
import { Notifications } from "react-native-notifications";
import { DateTime } from "luxon";

export const DeckView = ({ navigation, route }) => {
  const deck = useSelector((state) => state.decks.at[route.params.deckId]);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      title: deck.title,
    });
  }, []);

  return (
    <ScrollView>
      <Heading>{deck.title}</Heading>
      <Span>
        {deck.cards.length == 0
          ? "You have no cards"
          : `${deck.cards.length} cards`}
      </Span>
      {deck.cards.length != 0 && (
        <StyledTouchableHighlight
          onPress={() => {
            removeStudyNotifications();
            navigation.navigate("QuizQuestion", {
              deckId: deck.id,
            });
          }}
        >
          <ButtonText> Start Quiz </ButtonText>
        </StyledTouchableHighlight>
      )}
      <StyledTouchableHighlight
        onPress={() => {
          navigation.navigate("AddQuestion", { deckId: deck.id });
        }}
      >
        <ButtonText> Add Question </ButtonText>
      </StyledTouchableHighlight>
      <StyledTouchableHighlight
        onPress={() => {
          dispatch(DecksThunks.removeDeck(deck.id));
          navigation.goBack();
        }}
      >
        <ButtonText>Remove Deck</ButtonText>
      </StyledTouchableHighlight>
    </ScrollView>
  );
};

const removeStudyNotifications = () => {
  Notifications.cancelLocalNotification(DateTime.local().toFormat("yyyyooo"));
};

const Span = styled.Text`
  font-size: 17px;
  color: #8b8b8b;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;
const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 600;
`;
const StyledTouchableHighlight = styled.TouchableHighlight`
  align-items: center;
  background-color: #ea9642;
  padding: 15px 10px;
  width: 200px;
  border-radius: 50px;
  align-self: center;
  margin-top: 20px;
`;
