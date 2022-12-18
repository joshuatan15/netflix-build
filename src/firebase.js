import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCGQ5msowla3gBbTBaphTjCyUKa7EfjfQ",
  authDomain: "netflix-clone-d6c65.firebaseapp.com",
  projectId: "netflix-clone-d6c65",
  storageBucket: "netflix-clone-d6c65.appspot.com",
  messagingSenderId: "218040470299",
  appId: "1:218040470299:web:c162940f72e5353027a1be",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;