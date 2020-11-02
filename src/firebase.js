// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyBT60TZlUvKjLo0cxpznBVVh1ZmHzkpbNM",
  authDomain: "challenge-9c2a6.firebaseapp.com",
  databaseURL: "https://challenge-9c2a6.firebaseio.com",
  projectId: "challenge-9c2a6",
  storageBucket: "challenge-9c2a6.appspot.com",
  messagingSenderId: "476638982746",
  appId: "1:476638982746:web:bb9b96abcb459ad80dde63",
  measurementId: "G-76DY4CWPND"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };