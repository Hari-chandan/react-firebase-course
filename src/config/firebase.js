// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDfeVc_GxVR1xlv2dE33PodXAGCyXrh60I",
  authDomain: "harichandana-486db.firebaseapp.com",
  projectId: "harichandana-486db",
  storageBucket: "harichandana-486db.appspot.com",
  messagingSenderId: "681455157371",
  appId: "1:681455157371:web:c4515ea8de5f8f7f4122de",
  measurementId: "G-R9BV7370T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider =new GoogleAuthProvider();

export const db=getFirestore(app);
export const storage=getStorage(app);
