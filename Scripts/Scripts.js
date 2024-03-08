import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDge-w4T7ZvyCJmr6sma7nS6xKhefu1gyY",
    authDomain: "selfquest-ccf0d.firebaseapp.com",
    projectId: "selfquest-ccf0d",
    storageBucket: "selfquest-ccf0d.appspot.com",
    messagingSenderId: "123691393634",
    appId: "1:123691393634:web:9f0cd779e6ee9c4ebd273b",
    measurementId: "G-RK1BMD57Z8",
    databaseURL : "https://selfquest-ccf0d-default-rtdb.europe-west1.firebasedatabase.app",
};


const app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const db  = getDatabase(app);

export {auth, db ,firebase};
