import { initializeApp } from "firebase/app";
// firestore db
import { getFirestore } from 'firebase/firestore' 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPL8cS1RWZweITzp6elIIVQMF8vc4pJS4",
  authDomain: "property-smart-fabb4.firebaseapp.com",
  projectId: "property-smart-fabb4",
  storageBucket: "property-smart-fabb4.appspot.com",
  messagingSenderId: "336216435558",
  appId: "1:336216435558:web:d4000f4bc924f98cc1f6a7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()