import {initializeApp } from 'firebase/app'; //reference sub package and import initializeApp func
import {getAuth, onAuthStateChanged} from 'firebase/auth'; //authentication
//import {getFirestore} from 'firebase/firestore'

const firebaseApp = initializeApp({ ////firebaseApp stores firebase config for project
  //passing config obj retrieved from firebase console
  apiKey: "AIzaSyCfO6yxN4XkWOf22a_NIdTJwFIec9YjkcI",
  authDomain: "extension-21542.firebaseapp.com",
  projectId: "extension-21542",
  storageBucket: "extension-21542.appspot.com",
  messagingSenderId: "588229318698",
  appId: "1:588229318698:web:291ee2bd38eb4c1ae24b53"
});

const auth = getAuth(firebaseApp)


//Autho state
onAuthStateChanged(auth, user =>{
  if(user!=null){
    console.log('Logged in');
  } else{
    console.log('No user');
  }
});