import axios from "axios";
import { firebaseConfig } from "../firebase/clientApp";
import store from "../redux/store";
import { getLogin, getLogout } from "../redux/actions";

export const BASE_URL =
  "https://us-central1-compemat.cloudfunctions.net/userStats";
const REFRESH_URL = `https://securetoken.googleapis.com/v1/token?key=${firebaseConfig.apiKey}`;

export const getRefreshToken = async () => {
  try {
    const user = store.getState().user;
    const formData = new URLSearchParams();
    formData.append("grant_type", "refresh_token");
    formData.append("refresh_token", user.stsTokenManager.refreshToken);

    const response = await axios.post(REFRESH_URL, formData);
    user.stsTokenManager.refreshToken = response.data.refresh_token;
    user.stsTokenManager.accessToken = response.data.access_token;
    store.dispatch(getLogin(user));
  } catch (error) {
    console.log(error.message);
  }
};

export const Request = async (method, url, data, isRetry) => {
  try {
    const user = store.getState().user;
    
    if(!isRetry)
      user.stsTokenManager.accessToken = user.stsTokenManager.accessToken + "1";

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
