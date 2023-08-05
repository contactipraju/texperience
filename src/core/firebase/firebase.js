import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKXxeN1dSBmSvkWZ72_bkPnaSe6HaDHx4",
  authDomain: "texperience-360.firebaseapp.com",
  projectId: "texperience-360",
  storageBucket: "texperience-360.appspot.com",
  messagingSenderId: "220203648678",
  appId: "1:220203648678:web:82500df459b8b04af55667",
  measurementId: "G-C2GV5BTK3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);