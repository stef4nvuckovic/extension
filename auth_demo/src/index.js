import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.4.2/firebase-app.js';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPasswor, signOut } from 'https://www.gstatic.com/firebasejs/9.4.2/firebase-auth.js' //importing service getter func getAuth
const firebaseConfig = {
  apiKey: "AIzaSyCfO6yxN4XkWOf22a_NIdTJwFIec9YjkcI",
  authDomain: "extension-21542.firebaseapp.com",
  projectId: "extension-21542",
  storageBucket: "extension-21542.appspot.com",
  messagingSenderId: "588229318698",
  appId: "1:588229318698:web:291ee2bd38eb4c1ae24b53"
};

const auth = getAuth(firebaseApp)
firebase.initializeApp(firebaseConfig); //nitialize Firebase with project config settings  

//Auth state check
onAuthStateChanged(auth, user =>{
  var displayName = Null
  if(user != Null){
    console.log("User logged in", displayName);
  }else{
    console.log("No user found");
  }
});

//main and password auth
var email = Null;
var password = Null;
createUserWithEmailAndPassword(email,password){
  console.log("a");
}