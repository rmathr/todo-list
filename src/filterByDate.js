import displayTasks from "./displayTasks";
import { getFromLocalStorage } from "./handleSaveLogic";
import { handleEffects } from "./handleEffects";

export default function filterByDate (dateValue){
    const todos = getFromLocalStorage('todos')
    // console.log(lists[index].listName)
    const filteredTodos = todos.filter(todo => todo.dueDate == dateValue )
    console.log(filteredTodos)
    
    displayTasks(filteredTodos)
    handleEffects()
} 