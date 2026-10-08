// Firebase SDK
import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from
    "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDUWNzDFmNMeKbRQow7GxHqvZhaKdjYnRE",
    authDomain: "amin-optical-service.firebaseapp.com",
    projectId: "amin-optical-service",
    storageBucket: "amin-optical-service.firebasestorage.app",
    messagingSenderId: "26739156296",
    appId: "1:26739156296:web:3a9fed1195892097563f7d"
};


const app =
    initializeApp(firebaseConfig);


const db =
    getFirestore(app);


const auth =
    getAuth(app);


export {
    app,
    db,
    auth,

    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,

    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
};