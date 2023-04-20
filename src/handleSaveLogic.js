import displayTasks from "./displayTasks";

function addToLocalStorage(todos) {
    
    window.localStorage.setItem('todos', JSON.stringify(todos));
    displayTasks(todos)
    
  }


function getFromLocalStorage() {
    const reference = window.localStorage.getItem('todos');
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