import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDj1wGpaX1UP0ASoB_dEi5ZcxLuik0tfMw",
    authDomain: "netflix-15fc9.firebaseapp.com",
    projectId: "netflix-15fc9",
    storageBucket: "netflix-15fc9.appspot.com",
    messagingSenderId: "512781855631",
    appId: "1:512781855631:web:7bc0ec751a736b0b5039fa",
    measurementId: "G-508191C7FV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;