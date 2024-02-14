// import { initializeApp } from "firebase/app";

// myFirebase --> initializeApp(), firestore(), ....

import myFirebase from "firebase/compat/app"
import "firebase/compat/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDFzSxLQcLxdp1p22shHHuf8ldiFGX3Dqo",
  authDomain: "tripapplication-85f64.firebaseapp.com",
  projectId: "tripapplication-85f64",
  storageBucket: "tripapplication-85f64.appspot.com",
  messagingSenderId: "1079354302155",
  appId: "1:1079354302155:web:80239e9fd188d0fdfb854e"
};

// Initialize Firebase(Connect to Firebase)
const app = myFirebase.initializeApp(firebaseConfig);

export const database = myFirebase.firestore()

export const myAuth = getAuth(app)//Authentication in Firebase

export const myProvider = new GoogleAuthProvider()//Google Authentication in Firebase