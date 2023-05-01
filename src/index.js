import "./style.css"
import displayTasks from "./displayTasks"
import { updateListOptions } from "./controlListChange"
import { createNewList } from "./createList"
import displayLists from "./displayLists"
import handleNewTaskForm from "./handleNewTaskForm"
import { createNewTask } from "./todoCreator"
import handleFilterOrder from "./handleFilterOrder"
import { getFromLocalStorage } from "./handleSaveLogic"
import { handleEffects } from "./handleEffects"
import { handleNewListLogic } from "./handleNewListLogic"
import handleNewTaskLogic from "./handleNewTaskLogic"
import handleTasksAndListsEdits from "./handleTasksAndListsEdits"

let todos = getFromLocalStorage('todos') || []
let lists = getFromLocalStorage('lists') || []


displayTasks(todos)

if(lists.length == 0){
    createNewList('general', '#205295')
}

if(todos.length == 0){
    createNewTask('walk with my dog', 'to-do', 'general', 'high', '2023-04-03')
    createNewTask('study math', 'doing', 'general', 'medium', '2023-12-12')
    createNewTask('travel to Mars', 'to-do', 'general', 'high', '2043-05-31')
}

handleNewTaskLogic()

handleTasksAndListsEdits()

handleNewTaskForm()

handleNewListLogic()

displayLists(lists)
updateListOptions(lists)

handleFilterOrder(lists, todos)

handleEffects()