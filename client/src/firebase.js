// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "documentapproval-3d80a.firebaseapp.com",
  projectId: "documentapproval-3d80a",
  storageBucket: "documentapproval-3d80a.firebasestorage.app",
  messagingSenderId: "80903729483",
  appId: "1:80903729483:web:1fed56912836bd896cb8ce",
  // measurementId: "G-YW9X1Q4BPC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
