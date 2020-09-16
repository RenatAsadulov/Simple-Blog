import { createStore, combineReducers } from "redux";
import mainContentReducer from "./MainContentReducer";

let reducers = combineReducers({
  mainContent: mainContentReducer,
});

let store = createStore(reducers);

export default store;
