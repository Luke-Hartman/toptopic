// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUpUe020GuVG7E7qw9L1wVO9PeCCFmkOw",
  authDomain: "toptopic-1033d.firebaseapp.com",
  projectId: "toptopic-1033d",
  storageBucket: "toptopic-1033d.appspot.com",
  messagingSenderId: "290977021616",
  appId: "1:290977021616:web:77611b003c93a7713f0575",
  measurementId: "G-0DZXZS0LXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);