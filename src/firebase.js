import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgLZr5slE-GFww3eEras8tQ3qaYi6OvtU",
    authDomain: "facebook-clone-734f8.firebaseapp.com",
    projectId: "facebook-clone-734f8",
    storageBucket: "facebook-clone-734f8.appspot.com",
    messagingSenderId: "961805235147",
    appId: "1:961805235147:web:3d3ac856a0fa0b83fb3c4e",
    measurementId: "G-FVZKFKR1WF"
  };

  //initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //database
  const db = firebase.firestore();

  //authorization
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;