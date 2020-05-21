import { AsyncStorage } from "react-native";
import uuid from "random-uuid-v4";
import { DecksActions } from "../actions/decks";
import { CommonActions } from "@react-navigation/native";
import { navigate } from "../../Navigators/navigatorService";

function loadDecks(newDeckId) {
  return async function (dispatch, getState) {
    try {
      const decks = JSON.parse(await AsyncStorage.getItem("@store:decks"));

      dispatch(DecksActions.storeDecks(decks ? decks : []));

      if (newDeckId) {
        navigate("Deck", { deckId: newDeckId });
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export const DecksThunks = {
  loadDecks,
  removeDeck: (deckId) => {
    return async function (dispatch, getState) {
      const state = getState();
      const storedDecks = state.decks.all
        .map((dId) => {
          return state.decks.at[dId];
        })
        .filter((d) => d.id != deckId);

      try {
        await AsyncStorage.setItem(
          "@store:decks",
          JSON.stringify([...storedDecks])
        );
        dispatch(loadDecks());
      } catch (error) {
        console.error(error);
      }
    };
  },
  addCardToDeck: ({ deckId, card }) => {
    return async function (dispatch, getState) {
      const state = getState();

      state.decks.at[deckId].cards.push(card);
      const storedDecks = state.decks.all.map((dId) => {
        return state.decks.at[dId];
      });

      try {
        await AsyncStorage.setItem(
          "@store:decks",
          JSON.stringify([...storedDecks])
        );
        dispatch(loadDecks());
      } catch (error) {
        console.error(error);
      }
    };
  },
  addDeck: ({ title, id }) => {
    return async function (dispatch, getState) {
      const newDeck = {
        id: id || uuid(),
        title: title,
        cards: [],
      };
      const state = getState();
      const storedDecks = state.decks.all.map((dId) => {
        return state.decks.at[dId];
      });

      try {
        await AsyncStorage.setItem(
          "@store:decks",
          JSON.stringify([...storedDecks, newDeck])
        );
        dispatch(loadDecks(newDeck.id));
      } catch (error) {
        console.error(error);
      }
    };
  },
};
