// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "documentapproval-3d80a.firebaseapp.com",
//   projectId: "documentapproval-3d80a",
//   storageBucket: "documentapproval-3d80a.firebasestorage.app",
//   messagingSenderId: "80903729483",
//   appId: "1:80903729483:web:1fed56912836bd896cb8ce",
//   // measurementId: "G-YW9X1Q4BPC",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDgemrGzSAhoF-e2HdwEEqz2VdAu7EUH0s",
  authDomain: "inspiration-app-80750.firebaseapp.com",
  projectId: "inspiration-app-80750",
  storageBucket: "inspiration-app-80750.appspot.com",
  messagingSenderId: "22373800134",
  appId: "1:22373800134:web:6e3f2d63871cdf2a2e1fc7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
