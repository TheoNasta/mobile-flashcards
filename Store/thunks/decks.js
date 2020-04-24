import { AsyncStorage } from "react-native";
import uuid from "random-uuid-v4";
import { DecksActions } from "../actions/decks";

function loadDecks() {
  return async function (dispatch, getState) {
    try {
      const decks = JSON.parse(await AsyncStorage.getItem("@store:decks"));

      dispatch(DecksActions.storeDecks(decks ? decks : []));
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
        dispatch(loadDecks(dispatch, getState));
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
        dispatch(loadDecks(dispatch, getState));
      } catch (error) {
        console.error(error);
      }
    };
  },
  addDeck: ({ title }) => {
    return async function (dispatch, getState) {
      const newDeck = {
        id: uuid(),
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
        dispatch(loadDecks(dispatch, getState));
      } catch (error) {
        console.error(error);
      }
    };
  },
};
