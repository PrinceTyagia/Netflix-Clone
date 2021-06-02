import firebase  from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDjibtH3s2FHvBKEFk7DDDP0JZkeI-sQLY",
  authDomain: "netflix-clone-9935c.firebaseapp.com",
  projectId: "netflix-clone-9935c",
  storageBucket: "netflix-clone-9935c.appspot.com",
  messagingSenderId: "519177739561",
  appId: "1:519177739561:web:d91a01151ac9f65ed2ab38",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =  firebaseApp.firestore();
const auth = firebase.auth();

export  { auth };
export default db;
