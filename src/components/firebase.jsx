// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXtfJMiEg3ABsqPbdtpNI9F9FUs3Qvnn4",
  authDomain: "react-firebase-auth-420d0.firebaseapp.com",
  projectId: "react-firebase-auth-420d0",
  storageBucket: "react-firebase-auth-420d0.firebasestorage.app",
  messagingSenderId: "243595630917",
  appId: "1:243595630917:web:9c797e073b914f454ec62c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
// export default app;