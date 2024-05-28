import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk2-nJi30O-MuFqipABRmb0euHE4G6viY",
  authDomain: "fooddy-9df21.firebaseapp.com",
  projectId: "fooddy-9df21",
  storageBucket: "fooddy-9df21.appspot.com",
  messagingSenderId: "211262107667",
  appId: "1:211262107667:web:7a7e1b5d25274aad8e0fe6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
