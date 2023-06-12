
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA079I7kYrEeE01vUVIMsjY1nKDE_GZlqg",
  authDomain: "discord-clone-ea6d3.firebaseapp.com",
  projectId: "discord-clone-ea6d3",
  storageBucket: "discord-clone-ea6d3.appspot.com",
  messagingSenderId: "588062157903",
  appId: "1:588062157903:web:4cd68e2fbdb0aedc0e4e3a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };



