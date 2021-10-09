import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAvH3AzLGkX3WZG0Lhig1KMY2KAbhzOJdM",
    authDomain: "shop-db-e3176.firebaseapp.com",
    projectId: "shop-db-e3176",
    storageBucket: "shop-db-e3176.appspot.com",
    messagingSenderId: "966868730020",
    appId: "1:966868730020:web:83146aaac24c8e31e86631",
    measurementId: "G-6PGGX5TY75"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;