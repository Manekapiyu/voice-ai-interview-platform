import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBj2Xtqo1g9jkFr1nKw3Tjh8RAY-8IaJQ",
  authDomain: "prepai-625c2.firebaseapp.com",
  projectId: "prepai-625c2",
  storageBucket: "prepai-625c2.firebasestorage.app",
  messagingSenderId: "985673202811",
  appId: "1:985673202811:web:c91ec732a75e2df979b6de",
  measurementId: "G-EM0Z7R50P1",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
