// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0p4uU7_Z9U-akGAcyb0jVlfPux6c3DfM",
  authDomain: "react-firebase-auth-2024-6e2b2.firebaseapp.com",
  projectId: "react-firebase-auth-2024-6e2b2",
  storageBucket: "react-firebase-auth-2024-6e2b2.firebasestorage.app",
  messagingSenderId: "836482790842",
  appId: "1:836482790842:web:2daeacd6ff5bcbf24a1983",
  measurementId: "G-DFS7SENG9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);