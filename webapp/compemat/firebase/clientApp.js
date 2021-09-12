import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import "firebase/firestore";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAdk2vTSBlcTqaaIIUeYfI9fk2oehz85DY",
  authDomain: "compemat.firebaseapp.com",
  databaseURL: "https://compemat-default-rtdb.firebaseio.com",
  projectId: "compemat",
  storageBucket: "compemat.appspot.com",
  messagingSenderId: "23696084299",
  appId: "1:23696084299:web:13af9d50f54605fb792cce",
  measurementId: "G-0TX1XZZ4VR",
};

let firebase;

if (typeof window !== "undefined") {
  if (!getApps().length) {
    firebase = initializeApp(firebaseConfig);
    initializeAppCheck(firebase,  {
      provider: new ReCaptchaV3Provider(
        "6LfUYV4cAAAAAB9Vt4vWxOLaMyVcwlTxruLYscSI"
      ),
      isTokenAutoRefreshEnabled: true
    })
  } else {
    firebase = getApp();
  }
}

export default firebase;
