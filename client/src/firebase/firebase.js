import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


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
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);