import "./style.css"
import interactDOM from "./interactDom"
import displayTasks from "./displayTasks"
import { todoCreator } from "./todoCreator"
import { modifyStatus } from "./todoCreator"
import controlTaskChange from "./controlTaskChange"
import { controlStatusChange } from "./controlStatusChange"
import controlPriorityChange from "./controlPriorityChange"
import controlDueDateChange from "./controlDueDateChange"
import { controlListChange } from "./controlListChange"
import { updateListOptions } from "./controlListChange"
import { createList } from "./createList"
import { createNewList } from "./createList"
import { deleteList } from "./createList"
import displayLists from "./displayLists"
import handleNewListForm from "./handleNewListForm"
import handleNewTaskForm from "./handleNewTaskForm"
import filterByList from "./filterByList"
import { createNewTask } from "./todoCreator"
import { defineTaskId } from "./todoCreator"
import handleFilterOrder from "./handleFilterOrder"
import handleSaveLogic from "./handleSaveLogic"
import { deleteTask } from "./todoCreator"
import { getFromLocalStorage } from "./handleSaveLogic"
import { handleEffects } from "./handleEffects"
import { hex2rgba } from "./handleEffects"
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