import { initializeApp } from 'firebase/app';
// import * as firebase from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAWZc_7iKdg3KG3RnEJpQHkvAJxAmrN56o',
  authDomain: 'todoapp-7f9f3.firebaseapp.com',
  projectId: 'todoapp-7f9f3',
  storageBucket: 'todoapp-7f9f3.appspot.com',
  messagingSenderId: '202058936266',
  appId: '1:202058936266:web:a6f8590c54453bb4fca933',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const data = [
  {
    task: 'walk with my dog',
    status: 'to-do',
    list: 'general',
    priority: 'high',
    dueDate: '2023-04-03',
    order: 0,
  },
  {
    task: 'study math',
    status: 'doing',
    list: 'general',
    priority: 'medium',
    dueDate: '2023-12-12',
    order: 1,
  },
  {
    task: 'travel to Mars',
    status: 'to-do',
    list: 'general',
    priority: 'high',
    dueDate: '2043-05-31',
    order: 2,
  },
  {
    task: 'Teste',
    status: 'doing',
    list: 'Teste',
    priority: 'low',
    dueDate: '2023-05-02',
    order: 3,
  },
];

const createDocument = (collectionName, document) => {
  const colRef = collection(db, collectionName);
  return addDoc(colRef, document);
};

// data.map((item) => createDocument('todos', item));

// await setDoc(doc(db, 'todos', data[0].order), data[0]);

async function getData(colName) {
  const col = collection(db, colName);
  const colSnapshot = await getDocs(col);
  const colList = colSnapshot.docs.map((doc) => doc.data());
  return colList;
}

const teste = await getData('todos');

console.log(teste);

// let firestore = firebase.firestore();
// const docRef = firestore.collection('todos');

function addToLocalStorage(array, keyWord) {
  window.localStorage.setItem(keyWord, JSON.stringify(array));
}

function addData(document, collectionName) {
  const colRef = collection(db, collectionName);
  return addDoc(colRef, document);
}

function getFromLocalStorage(keyWord) {
  const reference = window.localStorage.getItem(keyWord);
  if (reference) {
    return JSON.parse(reference);
  } else {
    return [];
  }
}

export { addToLocalStorage, getFromLocalStorage, addData, getData, db };
