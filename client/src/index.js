import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bulma/css/bulma.css";
import axios from "axios";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

axios.defaults.withCredentials = true;
 
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6-vl1U7OS8-rEgopFso1Dh6OqwrApI4o",
  authDomain: "blinkit-imges-upload.firebaseapp.com",
  projectId: "blinkit-imges-upload",
  storageBucket: "blinkit-imges-upload.appspot.com",
  messagingSenderId: "575041902417",
  appId: "1:575041902417:web:f6bc029646ac8adc80a570",
  measurementId: "G-7FN76G393G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);