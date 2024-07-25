// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDVAa_AHiilPQv_i0mICCixA8hShktG0ho",
  authDomain: "fcm-demo-afdab.firebaseapp.com",
  projectId: "fcm-demo-afdab",
  storageBucket: "fcm-demo-afdab.appspot.com",
  messagingSenderId: "524649912604",
  appId: "1:524649912604:web:1b71e2198e490b31c402d9",
  measurementId: "G-TCQXNV38CG",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
