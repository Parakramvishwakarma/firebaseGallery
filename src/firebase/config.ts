
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
import { getStorage } from "firebase/storage";
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALfVCWHL70p5RAvC6TMQ8jgG3WbTBqcRc",
  authDomain: "photogallery-5fb25.firebaseapp.com",
  projectId: "photogallery-5fb25",
  storageBucket: "photogallery-5fb25.appspot.com",
  messagingSenderId: "669492428700",
  appId: "1:669492428700:web:500ccecaf12cd9eb5f5259",
  measurementId: "G-VZGEHFSJEJ"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig, "masterApp");
export const projectStorage = getStorage(app);
export const projectFireStore = getFirestore(app);
export default firebase;
