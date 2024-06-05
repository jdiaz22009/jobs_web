import { initializeApp } from "firebase/app";
import { GithubAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB5OWeLN4mr4xTysFqt-5JaYac6eaUvIA",
  authDomain: "uscjobs-505a9.firebaseapp.com",
  projectId: "uscjobs-505a9",
  storageBucket: "uscjobs-505a9.appspot.com",
  messagingSenderId: "765516947788",
  appId: "1:765516947788:web:d037187fee00d14b0befe9",
  measurementId: "G-BFQ8C48C6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const providerGithub = new GithubAuthProvider();

export { app, providerGithub, signInWithPopup, getAuth };
