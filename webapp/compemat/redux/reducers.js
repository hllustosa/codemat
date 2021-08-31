import { LOGIN, LOGOUT } from "./actions";

const initialState = {
  isLogged: false,
  user: {},
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return { ...state, user: null, isLogged: false };
    case LOGIN:
      return {
        isLogged: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default login;
