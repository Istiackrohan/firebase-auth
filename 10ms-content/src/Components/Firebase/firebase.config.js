// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-fuFLEBcQZVlz6V_Af381XEo-SO7ica8",
  authDomain: "ms-contents.firebaseapp.com",
  projectId: "ms-contents",
  storageBucket: "ms-contents.appspot.com",
  messagingSenderId: "20221120199",
  appId: "1:20221120199:web:c7fda1411341ba6f67f8e2",
  measurementId: "G-6Q3Z61TQ2L"
};

// Initialize Firebase
const initializeAuthentication = () => initializeApp(firebaseConfig);
const analytics = getAnalytics(initializeAuthentication());

export default initializeAuthentication;