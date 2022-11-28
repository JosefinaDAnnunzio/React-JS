import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOdjp2lTWBcfuG81hDWm6Ex9FQUeKve8g",
  authDomain: "reactjs-jdannunzio.firebaseapp.com",
  projectId: "reactjs-jdannunzio",
  storageBucket: "reactjs-jdannunzio.appspot.com",
  messagingSenderId: "588149139930",
  appId: "1:588149139930:web:c39ecd1e24d0cf4b2378e3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const collectionProd = collection (db, "productos");