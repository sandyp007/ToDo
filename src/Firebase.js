// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6nBUD6Qwt8rBpzDuXR6Adgv-kh8-wZQo",
  authDomain: "todoproject-a0565.firebaseapp.com",
  projectId: "todoproject-a0565",
  storageBucket: "todoproject-a0565.appspot.com",
  messagingSenderId: "835266727161",
  appId: "1:835266727161:web:9b223c474ce7e04f4d6628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)