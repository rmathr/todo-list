import displayTasks from "./displayTasks";
import { getFromLocalStorage } from "./handleSaveLogic";
import { handleEffects } from "./handleEffects";


export default function filterByStatus (element){
    const todos = getFromLocalStorage('todos')
    // console.log(lists[index].listName)
    const statusValue =  element.value
    const filteredTodos = todos.filter(todo => todo.status == statusValue )
    console.log(filteredTodos)
    
    displayTasks(filteredTodos)
    handleEffects()
} 