import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
//var admin = require('firebase-admin')

var config = {
    apiKey: "AIzaSyDn01F-Iv4UrvM9B3mcM1CLnDSaP7DuPzo",
    authDomain: "benne-apr.firebaseapp.com",
    projectId: "benne-apr",
    storageBucket: "benne-apr.appspot.com",
    messagingSenderId: "699188473654",
    appId: "1:699188473654:web:831795cbe569f20cde4d97"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const TwitterProvider = new firebase.auth.TwitterAuthProvider();
export const auth = firebase.auth();
export default firebase