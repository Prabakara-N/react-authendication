// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNizkTL74SE4Mu4DKQqw-4g161EjXojzw",
  authDomain: "react-authendication.firebaseapp.com",
  projectId: "react-authendication",
  storageBucket: "react-authendication.appspot.com",
  messagingSenderId: "31161923510",
  appId: "1:31161923510:web:ac7597ec82ffc3fa0ff317",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase authentication and get a reference
export const auth = getAuth(app);
export default app;
