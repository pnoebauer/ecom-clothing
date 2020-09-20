import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC9bS3l5KOcESkYjR3sx6LwENqRuDAHN7A",
    authDomain: "ecom-clothing-db-19b5d.firebaseapp.com",
    databaseURL: "https://ecom-clothing-db-19b5d.firebaseio.com",
    projectId: "ecom-clothing-db-19b5d",
    storageBucket: "ecom-clothing-db-19b5d.appspot.com",
    messagingSenderId: "1091061480265",
    appId: "1:1091061480265:web:e4b32aa06ce16c21c27898",
    measurementId: "G-BJTCES07KT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;