// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz9-j2j-QzRtBy-Q0F_atLNx1NbHWUAL0",
  authDomain: "portfolio-a6dd7.firebaseapp.com",
  projectId: "portfolio-a6dd7",
  storageBucket: "portfolio-a6dd7.firebasestorage.app",
  messagingSenderId: "146625491978",
  appId: "1:146625491978:web:6967af0122f30ec38f1bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//services
export const db = getFirestore(app);