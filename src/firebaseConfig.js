// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQv2QFDqTVrHiGJJva9jcHpFFkhbgwBcw",
  authDomain: "practice-app-a087f.firebaseapp.com",
  projectId: "practice-app-a087f",
  storageBucket: "practice-app-a087f.appspot.com",
  messagingSenderId: "356169038694",
  appId: "1:356169038694:web:7cbc9871b9b1e39bed26a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
