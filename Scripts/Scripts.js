import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyDge-w4T7ZvyCJmr6sma7nS6xKhefu1gyY",
    authDomain: "selfquest-ccf0d.firebaseapp.com",
    projectId: "selfquest-ccf0d",
    storageBucket: "selfquest-ccf0d.appspot.com",
    messagingSenderId: "123691393634",
    appId: "1:123691393634:web:9f0cd779e6ee9c4ebd273b",
    measurementId: "G-RK1BMD57Z8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export {auth, firebase};
