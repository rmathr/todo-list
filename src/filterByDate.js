import displayTasks from "./displayTasks";
import { getFromLocalStorage } from "./handleSaveLogic";
import { handleEffects } from "./handleEffects";

export default function filterByDate (dateValue){
    const todos = getFromLocalStorage('todos')
    const filteredTodos = todos.filter(todo => todo.dueDate == dateValue )
    displayTasks(filteredTodos)
    handleEffects()
} 