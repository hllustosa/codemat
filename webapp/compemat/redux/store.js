import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  isLogged: false,
  user: {},
};
const store = createStore(reducer, initialState);

export default store;
