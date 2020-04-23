import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export const NewDeck = () => {
  return (
    <AddDeck>
      <Text>Add New Deck</Text>
    </AddDeck>
  );
};

const AddDeck = styled.SafeAreaView`
  display: flex;
`;
