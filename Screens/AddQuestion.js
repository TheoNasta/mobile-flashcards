import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Heading } from "../Components/Heading";
import { DecksThunks } from "../Store/thunks/decks";

export const AddQuestion = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [card, setCard] = useState({
    question: "",
    answer: "",
  });

  return (
    <AddQuestionHolder>
      <Heading>Add New Qustion</Heading>
      <View>
        <Span>Question</Span>
        <StyledInput
          onChangeText={(text) => {
            setCard((c) => {
              c.question = text;
              return c;
            });
          }}
          placeholder="Add question"
        />
      </View>
      <View>
        <Span>Answer</Span>
        <StyledInput
          onChangeText={(text) =>
            setCard((c) => {
              c.answer = text;
              return c;
            })
          }
          placeholder="Add answer"
        />
      </View>
      <StyledTouchableHighlight
        onPress={() => {
          dispatch(
            DecksThunks.addCardToDeck({
              deckId: route.params.deckId,
              card: card,
            })
          );
          navigation.goBack();
        }}
      >
        <ButtonText> Save Question </ButtonText>
      </StyledTouchableHighlight>
    </AddQuestionHolder>
  );
};

const AddQuestionHolder = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const StyledInput = styled.TextInput`
  width: 90%;
  margin: 0px auto;
  background-color: white;
  height: 50px;
  padding: 15px;
`;
const Span = styled.Text`
  font-size: 17px;
  color: #8b8b8b;
  margin-top: 30px;
  text-align: center;
  margin-bottom: 10px;
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
  margin-top: 50px;
`;
