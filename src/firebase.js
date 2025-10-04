// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFqQysLBhQ6J1Nle3YKPMkRRxVejfbYHY",
  authDomain: "teman-belajar-f7b9b.firebaseapp.com",
  projectId: "teman-belajar-f7b9b",
  storageBucket: "teman-belajar-f7b9b.appspot.com",
  messagingSenderId: "722781962474",
  appId: "1:722781962474:web:71f6bdea31bc3449349793",
  measurementId: "G-59EQTRKFHJ"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
