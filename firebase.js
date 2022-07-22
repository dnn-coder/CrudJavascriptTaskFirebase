// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCcXgoL34shVsUAjelEz8Dwz7jGKlBUiQk',
    authDomain: 'javascriptcrudfirebase.firebaseapp.com',
    projectId: 'javascriptcrudfirebase',
    storageBucket: 'javascriptcrudfirebase.appspot.com',
    messagingSenderId: '167759036317',
    appId: '1:167759036317:web:b24e48a762899537eff974',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) =>
    addDoc(collection(db, 'tasks'), { title, description });

export const getTasks = () => getDocs(collection(db, 'tasks'));

export const onGetTask = callback =>
    onSnapshot(collection(db, 'tasks'), callback);

export const deleteTask = id => deleteDoc(doc(db, 'tasks', id));

export const getTask = id => getDoc(doc(db, 'tasks', id));

export const updateTask = (id, newFields) =>
    updateDoc(doc(db, 'tasks', id), newFields);