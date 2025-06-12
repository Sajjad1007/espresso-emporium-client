// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNmfPMiLCWQBKglESODbCzjCZ4m9JoV78",
  authDomain: "espresso-emporium-45b1f.firebaseapp.com",
  projectId: "espresso-emporium-45b1f",
  storageBucket: "espresso-emporium-45b1f.firebasestorage.app",
  messagingSenderId: "442632757810",
  appId: "1:442632757810:web:99dd3b4823f543d9ced22b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
