import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl3aIko3tyMhoz4CzfsB_2uvnOyi_MklE",
  authDomain: "instegram-42294.firebaseapp.com",
  projectId: "instegram-42294",
  storageBucket: "instegram-42294.appspot.com",
  messagingSenderId: "991084479965",
  appId: "1:991084479965:web:1f1f06a20eec1134522234",
  measurementId: "G-T64V6RSEP2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { auth };

export default db;
