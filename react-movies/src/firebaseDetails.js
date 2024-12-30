// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "react-movie-app-77b08.firebaseapp.com",
  projectId: "react-movie-app-77b08",
  storageBucket: "react-movie-app-77b08.firebasestorage.app",
  messagingSenderId: "777171159020",
  appId: "1:777171159020:web:ff0ead4515bd9c6a2962c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);