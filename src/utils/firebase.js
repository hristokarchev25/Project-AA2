import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPgCeSeDI5bNZJzGz9iuwnQS_tbtstSZE",
    authDomain: "lotus-1ec41.firebaseapp.com",
    projectId: "lotus-1ec41",
    storageBucket: "lotus-1ec41.appspot.com",
    messagingSenderId: "723114583873",
    appId: "1:723114583873:web:5289f3414f3726350723c0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();