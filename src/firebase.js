import { getApps, getApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBQN2pLW5ksFa0moJh52lB3D6i-pZrWtE",
  authDomain: "disney-clone-9cf24.firebaseapp.com",
  projectId: "disney-clone-9cf24",
  storageBucket: "disney-clone-9cf24.appspot.com",
  messagingSenderId: "166147790859",
  appId: "1:166147790859:web:57051d7b6f9b91b0230f0e",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
