// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT-1bovyFuPwHcLivIl6Xzgts_-cc4LMc",
  authDomain: "wru-app-17073.firebaseapp.com",
  projectId: "wru-app-17073",
  storageBucket: "wru-app-17073.appspot.com",
  messagingSenderId: "559270225331",
  appId: "1:559270225331:web:7c86967ad30ce59917d7c6",
  measurementId: "G-HGC2M0RZWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
