// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM0VAoKcoKpkvnVfumswIS13qWuFztvg4",
  authDomain: "netflixgpt-ss.firebaseapp.com",
  projectId: "netflixgpt-ss",
  storageBucket: "netflixgpt-ss.appspot.com",
  messagingSenderId: "986678197775",
  appId: "1:986678197775:web:c03fb0e18effe35d0e6d7a",
  measurementId: "G-06KN38KP03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//getAuth method
export const auth = getAuth();