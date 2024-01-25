import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js"
const firebaseConfig = {
  apiKey: "AIzaSyDynbKZvRnj8d0XwfmUcyQ4d9UOPrnAvA0",
  authDomain: "dbferre-45a40.firebaseapp.com",
  projectId: "dbferre-45a40",
  storageBucket: "dbferre-45a40.appspot.com",
  messagingSenderId: "1085887115769",
  appId: "1:1085887115769:web:45ef41825c6e3cb7b2cd28"
};


initializeApp(firebaseConfig);
export const db = getFirestore()