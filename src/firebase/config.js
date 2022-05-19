import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAxbuYxGsIVQ_9lENvYI5CiPfSv8AJNyGY",
  authDomain: "mymoney-5de33.firebaseapp.com",
  projectId: "mymoney-5de33",
  storageBucket: "mymoney-5de33.appspot.com",
  messagingSenderId: "407153007936",
  appId: "1:407153007936:web:fd8c979382993219a66ea5"
}

// init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
