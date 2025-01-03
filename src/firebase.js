// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIGd6h3T4IFNiDDrtfDKa1fqHxCM_buis",
  authDomain: "math-help-ab174.firebaseapp.com",
  projectId: "math-help-ab174",
  storageBucket: "math-help-ab174.appspot.com",
  messagingSenderId: "1062279676235",
  appId: "1:1062279676235:web:a0cab9b32a77429f1be8ce",
  measurementId: "G-JKGRNQ9NM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);