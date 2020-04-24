export const STORE_DECKS = "STORE_DECKS";
export const REMOVE_DECK = "REMOVE_DECK";

export const DecksActions = {
  storeDecks: (decks) => {
    return {
      type: STORE_DECKS,
      decks,
    };
  },
  // removeDeck: (deckId) => {
  //   return {
  //     type: REMOVE_DECK,
  //     deckId,
  //   };
  // },
};
