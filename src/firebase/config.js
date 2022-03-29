import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBcs4BmORJLz41MOTJaqMxL8REybrpR-9s",
    authDomain: "olx-clone-b39e7.firebaseapp.com",
    projectId: "olx-clone-b39e7",
    storageBucket: "olx-clone-b39e7.appspot.com",
    messagingSenderId: "582036299899",
    appId: "1:582036299899:web:a5ae5a52c7c06c25d602de",
    measurementId: "G-KD772TPBQV"

}
 export default firebase.initializeApp(firebaseConfig)