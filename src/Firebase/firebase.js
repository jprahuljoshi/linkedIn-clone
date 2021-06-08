import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDQy4uVzcue4kQ367yQDCBHDSK74yU1qng",
    authDomain: "linkedin-clone-885ef.firebaseapp.com",
    projectId: "linkedin-clone-885ef",
    storageBucket: "linkedin-clone-885ef.appspot.com",
    messagingSenderId: "290498982225",
    appId: "1:290498982225:web:ec4596a6d0d6051ccfe370"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }