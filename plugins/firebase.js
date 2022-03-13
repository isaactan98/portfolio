import firebase from 'firebase/compat/app';
// import "firebase/compat/analytics";
import "firebase/compat/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB6JuhpKBgQtNafiTvy2uEiXQlHiU80eM",
    authDomain: "isaactan-project.firebaseapp.com",
    databaseURL: "https://isaactan-project-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "isaactan-project",
    storageBucket: "isaactan-project.appspot.com",
    messagingSenderId: "506434645414",
    appId: "1:506434645414:web:3667e7c6790c5cb2773367",
    measurementId: "G-MPF1WZHDPD"
};

firebase.initializeApp(firebaseConfig);

export function init_firebase() {
    return firebase;
}