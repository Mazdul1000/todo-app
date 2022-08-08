// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpEcoI4syFvKcQY5ZFdro_yBgG8fersL4",
  authDomain: "todo-app-95da6.firebaseapp.com",
  projectId: "todo-app-95da6",
  storageBucket: "todo-app-95da6.appspot.com",
  messagingSenderId: "251369760673",
  appId: "1:251369760673:web:829491393cbe4fb8978de0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;