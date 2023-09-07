import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeU-pMKwzygfZu0r-PJvtD2SyeSJgBeW0",
  authDomain: "um-396ed.firebaseapp.com",
  projectId: "um-396ed",
  storageBucket: "um-396ed.appspot.com",
  messagingSenderId: "766135064605",
  appId: "1:766135064605:web:2ddb43d08d5242412a8ef4",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
