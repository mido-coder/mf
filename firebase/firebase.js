// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd6hZaRgeiufcQRVM5PeLuz-HvvYGRbV4",
  authDomain: "contacts-864eb.firebaseapp.com",
  projectId: "contacts-864eb",
  storageBucket: "contacts-864eb.appspot.com",
  messagingSenderId: "873464409138",
  appId: "1:873464409138:web:b84b82d690029b6067a02b",
  measurementId: "G-R2PW2S6BT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);