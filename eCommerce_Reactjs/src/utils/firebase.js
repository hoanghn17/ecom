import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyA70kLnW5AVmkx3E7lpHZZNp5YAL1Gb7uw",
  authDomain: "ecom-378c3.firebaseapp.com",
  projectId: "ecom-378c3",
  storageBucket: "ecom-378c3.appspot.com",
  messagingSenderId: "977038765625",
  appId: "1:977038765625:web:e275efa51dc4e67d5627e8",
  measurementId: "G-9F8WBFL6D4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase;
export const authentication = getAuth(initializeApp(firebaseConfig))