import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { Heading } from "../Components/Heading";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

export const QuizQuestion = ({ navigation, route }) => {
  const deck = useSelector((state) => state.decks.at[route.params.deckId]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [tracker, setTracker] = useState({
    correct: 0,
    incorrect: 0,
  });
  const question = deck.cards[questionIndex];

  const log = (answer) => {
    setTracker((s) => ({
      ...s,
      [answer]: s[answer] + 1,
    }));
    setQuestionIndex((q) => q + 1);
  };

  if (questionIndex >= deck.cards.length) {
    if (questionIndex == 0)
      return (
        <Card style={{ justifyContent: "flex-start" }}>
          You have no questions in this quiz. Please add some before starting
          the quizz.
        </Card>
      );

    return (
      <Card style={{ justifyContent: "flex-start", padding: 40 }}>
        <Text>Quizz completed.</Text>
        <Text>Right: {tracker.correct}</Text>
        <Text>Wrong: {tracker.incorrect}</Text>
        <Text style={{ fontWeight: "700" }}>
          You're{" "}
          {(tracker.correct / (tracker.correct + tracker.incorrect)) * 100}%
          right
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back to Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setQuestionIndex(0);
            setTracker({
              correct: 0,
              incorrect: 0,
            });
          }}
        >
          <Text>Restart Quiz</Text>
        </TouchableOpacity>
      </Card>
    );
  }

  return (
    <QuestionWrapper>
      <Card>
        <View>
          <Text
            style={{
              marginTop: 60,
              fontWeight: "700",
              marginBottom: -30,
              color: showAnswer ? "green" : "black",
            }}
          >
            {showAnswer
              ? "ANSWER:"
              : `QUESTION ${questionIndex + 1}/${deck.cards.length}:`}
          </Text>
          <Heading style={{ textAlign: "left" }}>
            {showAnswer ? question.answer : question.question}
          </Heading>
        </View>
        <ShowAnswer
          onPress={() => {
            setShowAnswer((s) => !s);
          }}
        >
          <ShowAnswerText>
            {!showAnswer ? "Show Answer" : "Hide answer"}{" "}
          </ShowAnswerText>
        </ShowAnswer>
      </Card>
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        How was your guess?
      </Text>
      <ButtonsHolder>
        <CorrectBtn onPress={() => log("correct")}>
          <ButtonText> Correct </ButtonText>
        </CorrectBtn>
        <IncorrectBtn onPress={() => log("incorrect")}>
          <ButtonText> Incorrect </ButtonText>
        </IncorrectBtn>
      </ButtonsHolder>
    </QuestionWrapper>
  );
};

const Card = styled.View`
  padding: 0 30px 30px 30px;
  background-color: #fff;
  border-radius: 30px;
  margin: 20px;
  flex-grow: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

const QuestionWrapper = styled.View`
  flex-grow: 1;
  flex-direction: column;
  align-items: stretch;
`;

const ButtonsHolder = styled.View`
  flex-direction: row;
  padding: 20px;
`;
const ShowAnswer = styled.TouchableHighlight`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.075);
  padding: 15px 10px;
  border-radius: 50px;
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
  flex-grow: 1;
  margin-right: 5px;
  border-radius: 50px;
  align-self: center;
`;
const IncorrectBtn = styled.TouchableHighlight`
  align-items: center;
  background-color: red;
  margin-left: 5px;
  padding: 15px 10px;
  flex-grow: 1;
  border-radius: 50px;
  align-self: center;
`;
const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 600;
`;
