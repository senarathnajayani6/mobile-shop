import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxA-RalG9cPiirDAR7pc_Ixv3nH-J18Zw",
  authDomain: "mobile-shop-279f9.firebaseapp.com",
  projectId: "mobile-shop-279f9",
  storageBucket: "mobile-shop-279f9.appspot.com",
  messagingSenderId: "727847947475",
  appId: "1:727847947475:web:6cdc406ae2975fe2c71826",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
