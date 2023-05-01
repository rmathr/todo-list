import displayTasks from "./displayTasks";
import { getFromLocalStorage } from "./handleSaveLogic";
import { handleEffects } from "./handleEffects";

export default function filterByPriority (element){
    const todos = getFromLocalStorage('todos')
    const priorityValue =  element.value
    const filteredTodos = todos.filter(todo => todo.priority == priorityValue )
    
    displayTasks(filteredTodos)
    handleEffects()
} 