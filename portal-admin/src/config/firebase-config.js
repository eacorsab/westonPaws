import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC610AjKjTXUWEgmJ8wTt4rFs4YR0JzI-c",
  authDomain: "westonpwas.firebaseapp.com",
  databaseURL: "https://westonpwas-default-rtdb.firebaseio.com",
  projectId: "westonpwas",
  storageBucket: "westonpwas.appspot.com",
  messagingSenderId: "315641320874",
  appId: "1:315641320874:web:2500801b9ed147e7b647d3",
  measurementId: "G-LZQDL455C6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);