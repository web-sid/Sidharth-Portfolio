import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLZVoaIoMsI4lghnBU3Z70Zxk5LafKAy8",
  authDomain: "portfolio-37ce7.firebaseapp.com",
  projectId: "portfolio-37ce7",
  storageBucket: "portfolio-37ce7.appspot.com",
  messagingSenderId: "1070777832322",
  appId: "1:1070777832322:web:463890b3d64811ad0e359b",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApps() : initializeApp(firebaseConfig);

const db = getFirestore(app);
export { app, db };
