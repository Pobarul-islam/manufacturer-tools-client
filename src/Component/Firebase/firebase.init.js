import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-_RwJSU5q66Qp5LrYQy3Y6W912Hr-iLc",
  authDomain: "manufacturer-website-2f827.firebaseapp.com",
  projectId: "manufacturer-website-2f827",
  storageBucket: "manufacturer-website-2f827.appspot.com",
  messagingSenderId: "448088903353",
  appId: "1:448088903353:web:02ae86cd951462f0959568"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth