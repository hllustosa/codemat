import axios from "axios";
import { firebaseConfig } from "../firebase/clientApp";
import store from "../redux/store";
import { getLogin, getLogout } from "../redux/actions";

export const BASE_URL =
  "https://us-central1-compemat.cloudfunctions.net/userStats";

const REFRESH_URL = `https://securetoken.googleapis.com/v1/token?key=${firebaseConfig.apiKey}`;

const UPDATE_PASSWORD_URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseConfig.apiKey}`;

const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`;

export const getRefreshToken = async () => {
  try {
    const user = store.getState().user;
    const formData = new URLSearchParams();
    formData.append("grant_type", "refresh_token");
    formData.append("refresh_token", user.stsTokenManager.refreshToken);

    const response = await axios.post(REFRESH_URL, formData);
    user.stsTokenManager.refreshToken = response.data.refresh_token;
    user.stsTokenManager.accessToken = response.data.access_token;
    
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getIdToken = async (email, password) => {
  try {
    const user = store.getState().user;
    const formData = new URLSearchParams();
    formData.append("grant_type", "refresh_token");
    formData.append("refresh_token", user.stsTokenManager.refreshToken);

    const response = await axios.post(LOGIN_URL, {email, password, returnSecureToken: true});    
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const Request = async (method, url, data, isRetry) => {
  try {
    const user = store.getState().user;
    store.dispatch(getLogin(user));

    return await doRequest(method, url, data);
  } catch (error) {
    if (error.response.status == 401 || error.response.status == 403) {
      if (!isRetry) {
        await getRefreshToken();
        return await Request(method, url, data, true);
      } else {
        store.dispatch(getLogout());
        window.location = "/";
      }
    }

    throw error;
  }
};

const doRequest = async (method, url, data) => {
  const user = store.getState().user;

  return await axios({
    method: method,
    url: url,
    headers: {
      authorization: `Bearer ${user.stsTokenManager.accessToken}`,
    },
    data: data,
  });
};

export const submitCode = async (data) => {
  return await Request("post", BASE_URL, data);
};

export const getUserData = async () => {
  return await Request("get", BASE_URL);
};

export const updatePassword = async (oldPassword, password) => {
  const user = store.getState().user;
  const response = await getIdToken(user.email, oldPassword);
  console.log(response);

  return await axios({
    method: "post",
    url: UPDATE_PASSWORD_URL,
    data: {
      idToken: response.data.idToken,
      password: password,
      returnSecureToken: true,
    },
  });
};
