import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDVyl71jQNinf34Rnw9lCMds_86vEbQIFE",
  authDomain: "justliketherapy.firebaseapp.com",
  projectId: "justliketherapy",
  storageBucket: "justliketherapy.appspot.com",
  messagingSenderId: "784707893926",
  appId: "1:784707893926:web:3fac52f2a03bf4c5e7d267",
  measurementId: "G-L8CTY2JCXQ",
  reCaptchaKey: "AIzaSyDVyl71jQNinf34Rnw9lCMds_86vEbQIFE"
};
initializeApp(firebaseConfig);
getFirestore();
getAuth();
getStorage();
