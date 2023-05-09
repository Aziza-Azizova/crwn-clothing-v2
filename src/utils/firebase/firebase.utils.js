import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9GB5G8qdVUp6Jz_dM5TRS-RzMjs8J7hM",
    authDomain: "crown-db-e9b04.firebaseapp.com",
    projectId: "crown-db-e9b04",
    storageBucket: "crown-db-e9b04.appspot.com",
    messagingSenderId: "1089684217866",
    appId: "1:1089684217866:web:088e8fcb844bf51821bff3"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);