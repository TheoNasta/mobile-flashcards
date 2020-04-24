import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components";

export const Heading = ({ children, style }) => {
  return <StyledHeading style={style}>{children}</StyledHeading>;
};

const StyledHeading = styled.Text`
  font-size: 42px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
  margin-top: 40px;
`;
