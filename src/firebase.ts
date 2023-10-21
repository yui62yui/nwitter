import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgAH-uNoeI1Bq4QgL95IcAxV9Kw9tD340",
  authDomain: "nwitter-41c5c.firebaseapp.com",
  projectId: "nwitter-41c5c",
  storageBucket: "nwitter-41c5c.appspot.com",
  messagingSenderId: "326962546108",
  appId: "1:326962546108:web:474544d0b6049a8e9317b9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
