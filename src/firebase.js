
import firebase from "firebase";
import "firebase/auth"

const app = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCDiIR1bg9os2KCSL27AUIL-faTGRxKEOk",
    authDomain: "netflix-clone-ce406.firebaseapp.com",
    databaseURL: "https://netflix-clone-ce406-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "netflix-clone-ce406",
    storageBucket: "netflix-clone-ce406.appspot.com",
    messagingSenderId: "366584016967",
    appId: "1:366584016967:web:6bd08c5065b5b0069ec162",
    measurementId: "G-VFYZEJRYEB"
})

export const auth = app.auth();
export default app;



// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID