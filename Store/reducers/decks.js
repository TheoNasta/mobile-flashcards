import { STORE_DECKS, REMOVE_DECK } from "./../../Store/actions/decks";

export function DecksReducer(
  state = {
    all: [],
    at: {},
  },
  action
) {
  switch (action.type) {
    case STORE_DECKS:
      return Object.assign({}, state, {
        at: {
          ...state.at,
          ...action.decks.reduce((acc, d) => {
            acc[d.id] = { ...d };
            return acc;
          }, {}),
        },
        all: [...action.decks.map((d) => d.id)],
      });
    // case REMOVE_DECK:
    //   return Object.assign({}, state, {
    //     at: {
    //       ...state.at,
    //       [action.deckId]: undefined,
    //     },
    //     all: state.all.filter((dId) => dId != action.deckId),
    //   });
    default:
      return state;
  }
}
