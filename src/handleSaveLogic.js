require('dotenv').config({ path: '..' });
// const process = require('process');
// import ss from '../.env'

import dummyFunc from '../index';

function addToLocalStorage(array, keyWord) {
  window.localStorage.setItem(keyWord, JSON.stringify(array));
}

function getFromLocalStorage(keyWord) {
  const reference = window.localStorage.getItem(keyWord);
  if (reference) {
    return JSON.parse(reference);
  } else {
    return [];
  }
}

console.log(process.env);

export { addToLocalStorage, getFromLocalStorage };
