import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEpokxFuBoi72TXE4rrte58Rqr6ldsHpU",
  authDomain: "htv-sportme.firebaseapp.com",
  projectId: "htv-sportme",
  storageBucket: "htv-sportme.appspot.com",
  messagingSenderId: "381845952456",
  appId: "1:381845952456:web:963be4c27169dee52b92fd"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default firebase;