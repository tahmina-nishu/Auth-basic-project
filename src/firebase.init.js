// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq3pJjQ58wGiHIMrDm-DmtIh4H7jbMEik",
  authDomain: "auth-basic-project-c7b32.firebaseapp.com",
  projectId: "auth-basic-project-c7b32",
  storageBucket: "auth-basic-project-c7b32.firebasestorage.app",
  messagingSenderId: "1012228305606",
  appId: "1:1012228305606:web:bf71af549866d30825ddc7",
  measurementId: "G-M0CS1B96B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);