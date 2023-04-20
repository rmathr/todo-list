import displayTasks from "./displayTasks";

function addToLocalStorage(array, keyWord) {
    window.localStorage.setItem(keyWord, JSON.stringify(array));
  }


function getFromLocalStorage(keyWord) {
    const reference = window.localStorage.getItem(keyWord);
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      return JSON.parse(reference);
    //   displayTasks(todos);
    } else {
        return []
    }
  }





function handleSaveLogic(todos, lists){
    localStorage.setItem('todos', JSON.stringify(todos))
    const parsedTodos = JSON.parse(localStorage.getItem('todos') || [])
    console.log(parsedTodos)


}

export { addToLocalStorage, getFromLocalStorage, handleSaveLogic }