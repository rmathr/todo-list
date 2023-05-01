function addToLocalStorage(array, keyWord) {
    window.localStorage.setItem(keyWord, JSON.stringify(array));
  }


function getFromLocalStorage(keyWord) {
    const reference = window.localStorage.getItem(keyWord);
    if (reference) {
      return JSON.parse(reference);
    } else {
        return []
    }
  }

export { addToLocalStorage, getFromLocalStorage }