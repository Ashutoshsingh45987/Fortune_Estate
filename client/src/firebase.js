// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3d244.firebaseapp.com",
  projectId: "mern-estate-3d244",
  storageBucket: "mern-estate-3d244.appspot.com",
  messagingSenderId: "693640716388",
  appId: "1:693640716388:web:df5b8a38808b2e4615bf71"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);