// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkQIljdWtJ6tsatKrQ5Cy2yowKNMGmtsI",
  authDomain: "espresso-emporium-d2ea2.firebaseapp.com",
  projectId: "espresso-emporium-d2ea2",
  storageBucket: "espresso-emporium-d2ea2.firebasestorage.app",
  messagingSenderId: "655887079944",
  appId: "1:655887079944:web:7ee10db57ac5f5173ccfbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
