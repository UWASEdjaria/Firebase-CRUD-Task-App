// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdhyJseIMECSfzfLw9Z4Di7tBSWHrhBKo",
  authDomain: "task-management-app-8d625.firebaseapp.com",
  projectId: "task-management-app-8d625",
  storageBucket: "task-management-app-8d625.firebasestorage.app",
  messagingSenderId: "497434550978",
  appId: "1:497434550978:web:3787efc3f582cbbe57d15b",
  measurementId: "G-GQYG3V4M94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

