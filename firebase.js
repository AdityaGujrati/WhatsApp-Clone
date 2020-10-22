// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-AOB7kDH4JbUhF5i2hpwvUv2vl1Llt6E",
  authDomain: "whatsap-clone-febdb.firebaseapp.com",
  databaseURL: "https://whatsap-clone-febdb.firebaseio.com",
  projectId: "whatsap-clone-febdb",
  storageBucket: "whatsap-clone-febdb.appspot.com",
  messagingSenderId: "551003253348",
  appId: "1:551003253348:web:90b3955d6a74ced683cd71",
  measurementId: "G-HEKDYHFB4T",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
export { auth, provider };

export default db;
