import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

console.log(process.env.REACT_APP_firebaseConfig_apiKey, '---process.env.REACT_APP_firebaseConfig_apiKey--')
const firebaseConfig = {
  apiKey: process.env.REACT_APP_firebaseConfig_apiKey,
  authDomain: process.env.REACT_APP_firebaseConfig_authDomain,
  projectId: process.env.REACT_APP_firebaseConfig_projectId,
  storageBucket: process.env.REACT_APP_firebaseConfig_storageBucket,
  messagingSenderId: process.env.REACT_APP_firebaseConfig_messagingSenderId,
  appId: process.env.REACT_APP_firebaseConfig_appId,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;