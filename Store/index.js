import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { DecksReducer } from "./reducers/decks";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    decks: DecksReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
