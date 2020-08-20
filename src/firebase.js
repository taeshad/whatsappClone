import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDsNRaFZCg4SCXhdeBGVjcalvHHNf9gJzQ",
  authDomain: "whats-app-clone-66a6e.firebaseapp.com",
  databaseURL: "https://whats-app-clone-66a6e.firebaseio.com",
  projectId: "whats-app-clone-66a6e",
  storageBucket: "whats-app-clone-66a6e.appspot.com",
  messagingSenderId: "276134692412",
  appId: "1:276134692412:web:f274eb1eb6f445ea582539",
  measurementId: "G-QZVNJ19MSP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
