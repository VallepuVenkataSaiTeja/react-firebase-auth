import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD0p4uU7_Z9U-akGAcyb0jVlfPux6c3DfM",
  authDomain: "react-firebase-auth-2024-6e2b2.firebaseapp.com",
  projectId: "react-firebase-auth-2024-6e2b2",
  storageBucket: "react-firebase-auth-2024-6e2b2.firebasestorage.app",
  messagingSenderId: "836482790842",
  appId: "1:836482790842:web:2daeacd6ff5bcbf24a1983",
  measurementId: "G-DFS7SENG9N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default auth;