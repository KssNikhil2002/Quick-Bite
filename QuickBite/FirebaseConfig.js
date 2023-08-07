// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import  firebase  from 'firebase/compat';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOUHVZGOVgB_VSy9MwSp5RyCP6XGUE_GY",
  authDomain: "delivery-app-c9c34.firebaseapp.com",
  projectId: "delivery-app-c9c34",
  storageBucket: "delivery-app-c9c34.appspot.com",
  messagingSenderId: "754221552409",
  appId: "1:754221552409:web:083f4597f2137a257d2b88"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);