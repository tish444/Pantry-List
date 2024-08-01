// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5hOdkL4Ww0gHyqIjXVYBvJ09K12u4aFA",
  authDomain: "pantry-62c97.firebaseapp.com",
  projectId: "pantry-62c97",
  storageBucket: "pantry-62c97.appspot.com",
  messagingSenderId: "24437597556",
  appId: "1:24437597556:web:6b04be3f8fe358634df821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };
