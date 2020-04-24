import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Heading } from "../Components/Heading";
import { DecksThunks } from "../Store/thunks/decks";

export const NewDeck = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [deckName, setDeckName] = useState("");

  return (
    <AddDeck>
      <Heading>Add New Deck</Heading>
      <View>
        <Span>Give your deck a title</Span>
        <StyledInput
          value={deckName}
          onChangeText={(text) => setDeckName(text)}
          placeholder="Add title"
        />
      </View>
      <StyledTouchableHighlight
        onPress={() => {
          dispatch(DecksThunks.addDeck({ title: deckName }));
          setDeckName("");
          navigation.navigate("Home");
        }}
      >
        <ButtonText>Save Deck </ButtonText>
      </StyledTouchableHighlight>
    </AddDeck>
  );
};

const AddDeck = styled.SafeAreaView`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
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
