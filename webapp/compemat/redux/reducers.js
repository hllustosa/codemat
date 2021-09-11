import { LOGIN, LOGOUT } from "./actions";

const COMPEMAT_STORE = "COMPEMAT_STORE";

const initialState = {
  isLogged: false,
  user: {},
};

const login = (state = initialState, action) => {
  state = syncWithStore(state);

  switch (action.type) {
    case LOGOUT: {
      const newState = { ...state, user: null, isLogged: false };
      updateStore(newState);
      return newState;
    }
    case LOGIN: {
      const newState = {
        isLogged: true,
        user: action.payload,
      };

      updateStore(newState);
      return newState;
    }
    default:
      return state;
  }
};

function updateStore(state) {
  if(typeof window === 'undefined') return; 
  window.localStorage.setItem(COMPEMAT_STORE, JSON.stringify(state));
}

function syncWithStore(state) {

  if(typeof window === 'undefined') return state;

  const storedState = JSON.parse(window.localStorage.getItem(COMPEMAT_STORE));
  const newState = Object.assign({}, state, {});

  if(storedState){
    newState.user = storedState.user;
    newState.isLogged = storedState.isLogged;
  }
 
  return newState;
}

export default login;
