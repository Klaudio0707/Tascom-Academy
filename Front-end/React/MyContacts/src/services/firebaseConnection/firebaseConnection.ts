// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "tarefas-cb507.firebaseapp.com",
  projectId: "tarefas-cb507",
  storageBucket: "tarefas-cb507.firebasestorage.app",
  messagingSenderId: "696671864543",
  appId: "1:696671864543:web:7eef4c82439816947e8b6a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };