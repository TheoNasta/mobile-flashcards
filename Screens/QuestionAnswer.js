import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { Heading } from "../Components/Heading";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

export const QuestionAnswer = ({ navigation, route }) => {
  return (
    <QuestionWrapper>
      <Heading>Here is the question answer</Heading>
      <ShowAnswer>
        <ShowAnswerText> Hide Answer </ShowAnswerText>
      </ShowAnswer>
      <Text style={{ marginTop: 20 }}>How was your guess?</Text>
      <CorrectBtn>
        <ButtonText> Correct </ButtonText>
      </CorrectBtn>
      <IncorrectBtn>
        <ButtonText> Incorrect </ButtonText>
      </IncorrectBtn>
    </QuestionWrapper>
  );
};
const QuestionWrapper = styled.View``;

const QuestionAnswer = styled.SafeAreaView`
  display: flex;
`;
const ShowAnswer = styled.TouchableHighlight`
  align-items: center;
  background-color: white;
  padding: 15px 10px;
  width: 200px;
  border-radius: 50px;
  align-self: center;
  margin-top: 20px;
`;
const ShowAnswerText = styled.Text`
  font-size: 15px;
  color: blue;
  font-weight: 600;
`;
const CorrectBtn = styled.TouchableHighlight`
  align-items: center;
  background-color: green;
  padding: 15px 10px;
  width: 200px;
  border-radius: 50px;
  align-self: center;
`;
const IncorrectBtn = styled.TouchableHighlight`
  align-items: center;
  background-color: red;
  padding: 15px 10px;
  width: 200px;
  border-radius: 50px;
  align-self: center;
`;
const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 600;
`;
