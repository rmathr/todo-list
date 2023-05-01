import interactDOM from "./interactDom"
import { createNewTask } from "./todoCreator"
import { getFromLocalStorage } from "./handleSaveLogic"
import displayTasks from "./displayTasks"
import { handleEffects } from "./handleEffects"

const handleNewTaskFormValidation = function(){
    const taskValue = interactDOM().getInputValue('taskInput')
    const statusValue = interactDOM().getInputValue('statusInput')
    const listValue = interactDOM().getInputValue('listInput')
    const priorityValue = interactDOM().getInputValue('priorityInput')
    const dueDateValue = interactDOM().getInputValue('dueDateInput')
    if(taskValue != '' && statusValue != '' && listValue != '' && priorityValue != '' && dueDateValue != ''){
        return true
    }else {
        return false
    }
}


const addTasks = function(){
    let task = interactDOM().getInputValue('taskInput')
    let status = interactDOM().getInputValue('statusInput')
    let list = interactDOM().getInputValue('listInput')
    let priority = interactDOM().getInputValue('priorityInput')
    let dueDate = interactDOM().getInputValue('dueDateInput')
    // const todo = todoCreator(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`)
    createNewTask(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`)
    const todos = getFromLocalStorage('todos')
    displayTasks(todos)
    // console.log(todos)
    // todos.push(todo)
    interactDOM().formReset('newTask')
    handleEffects()
}
export default function handleNewTaskLogic(){
    const addTask = interactDOM().hookDOMelement('addTask')
    addTask.addEventListener('click', e =>{
        const newTask = interactDOM().hookDOMelement('newTask')
        e.preventDefault()
        interactDOM().hide(newTask)
        if(handleNewTaskFormValidation()){
            addTasks()
        }
        // displayTasks(todos)
    })

}



