// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1w-ihYIxgyxTzUYnX0Em-OFT4Q9KSsAw",
    authDomain: "assignment-12-60023.firebaseapp.com",
    projectId: "assignment-12-60023",
    storageBucket: "assignment-12-60023.appspot.com",
    messagingSenderId: "568555654789",
    appId: "1:568555654789:web:e1abc6ff91882d2db7e3ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;