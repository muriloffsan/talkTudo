import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7zU6GJQm33N8gc5T0zRjPXPkiLJAsfBs",
  authDomain: "app-talktudo.firebaseapp.com",
  projectId: "app-talktudo",
  storageBucket: "app-talktudo.firebasestorage.app",
  messagingSenderId: "699581843928",
  appId: "1:699581843928:web:2a09be7c5faea4cdc58aad"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
