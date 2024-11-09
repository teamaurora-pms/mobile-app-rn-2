// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArCdXbc92XWZoN1bftxblZaGLBpfKKyNY",
  authDomain: "motorapp-5cf35.firebaseapp.com",
  projectId: "motorapp-5cf35",
  storageBucket: "motorapp-5cf35.appspot.com",
  messagingSenderId: "225545418259",
  appId: "1:225545418259:web:7416c2f0f48371f576b1e6",
  measurementId: "G-YCXJTE3FE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);