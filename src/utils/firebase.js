// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiWHtq2EdqZOCdBiR4y79oI-tIQDIiJ2Q",
  authDomain: "stech-netflix-1cdc5.firebaseapp.com",
  projectId: "stech-netflix-1cdc5",
  storageBucket: "stech-netflix-1cdc5.firebasestorage.app",
  messagingSenderId: "866881577034",
  appId: "1:866881577034:web:13759e32bab5bccbd806b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);