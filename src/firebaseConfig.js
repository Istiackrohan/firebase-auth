import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyCzmvgC6t-vDsD9D8hxOppURRiDqDio_ZY",
  authDomain: "fir-authentication-317f8.firebaseapp.com",
  projectId: "fir-authentication-317f8",
  storageBucket: "fir-authentication-317f8.appspot.com",
  messagingSenderId: "1080062723917",
  appId: "1:1080062723917:web:cc7e51d345cd8442b51904"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);