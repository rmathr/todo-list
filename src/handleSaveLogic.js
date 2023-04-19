import displayTasks from "./displayTasks";

function addToLocalStorage(todos) {
    // conver the array to string then store it.
    localStorage.setItem('todos', JSON.stringify(todos));
   
    displayTasks(todos);
  }


function getFromLocalStorage() {
    let todos
    const reference = localStorage.getItem('todos');
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      return todos = JSON.parse(reference);
    //   displayTasks(todos);
    }
  }





function handleSaveLogic(todos, lists){
    localStorage.setItem('todos', JSON.stringify(todos))
    const parsedTodos = JSON.parse(localStorage.getItem('todos') || [])
    console.log(parsedTodos)


}

export { addToLocalStorage, getFromLocalStorage, handleSaveLogic }