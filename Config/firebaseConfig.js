// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz95lc2AU6vLyJ3uri93V_nR923uJdFxA",
  authDomain: "studentinfo-7edb2.firebaseapp.com",
  projectId: "studentinfo-7edb2",
  storageBucket: "studentinfo-7edb2.firebasestorage.app",
  messagingSenderId: "133457197746",
  appId: "1:133457197746:web:39595a7d3e1ff2fd74a7ab",
  measurementId: "G-PLVDHGKN6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth(app)
const db= getFirestore(app)
export {auth}
export {db}
