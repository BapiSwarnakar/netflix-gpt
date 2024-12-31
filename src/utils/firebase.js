// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjNvtC_hh3MGjHfTriwA4tzgijIhWYNgM",
  authDomain: "netflix-gpt-4d637.firebaseapp.com",
  projectId: "netflix-gpt-4d637",
  storageBucket: "netflix-gpt-4d637.firebasestorage.app",
  messagingSenderId: "203271878323",
  appId: "1:203271878323:web:226e99e1555e65ef3f62c6",
  measurementId: "G-5V3LVJWL4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);