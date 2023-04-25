import "./style.css"
import interactDOM from "./interactDom"
import displayTasks from "./displayTasks"
import { todoCreator } from "./todoCreator"
import { modifyStatus } from "./todoCreator"
import controlTaskChange from "./controlTaskChange"
import controlStatusChange from "./controlStatusChange"
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

import arrowRight  from './right.png'

import { WcDatepicker } from "wc-datepicker/dist/components/wc-datepicker";
// import "../node_modules/wc-datepicker/dist/themes/dark.css"


// const todos = JSON.parse(localStorage.getItem('todos') || '[]')
// const todos = []
let todos = getFromLocalStorage('todos') || []
let lists = getFromLocalStorage('lists') || []
// const lists = []




// function getFromLocalStorage() {
//     const reference = localStorage.getItem('todos');
//     // if reference exists
//     if (reference) {
//       // converts back to array and store it in todos array
//       todos = JSON.parse(reference);
      
//     }
// }

displayTasks(todos)

// const deleteTask = index => {
//     todos.splice(index, 1)
//     displayTasks(todos)
// }


// const todo1 = createNewTask('walk with Manchinha', 'to-do', 'daily', 'high', '04/03/2023', todos)

// const todo1 = createNewTask('walk with Manchinha', 'to-do', 'daily', 'high', '2023-04-03', todos)
// const todo2 = createNewTask('play Ravendawn', 'to-do', 'daily', 'high', '2023-04-03', todos)
// const todo3 = createNewTask('study math', 'to-do', 'daily', 'medium', '2023-06-04', todos)
// const todo4 = createNewTask('play guitar', 'doing', 'general', 'low', '2023-07-02', todos)
// const todo5 = createNewTask('look for beavers', 'to-do', 'general', 'high', '2023-04-12', todos)
// const todo6 = createNewTask('try to catch a squirrel', 'to-do', 'general', 'low', '2023-12-06', todos)
// const todo7 = createNewTask('watch tv', 'doing', 'Nemo', 'medium', '2022-05-05', todos)
// const todo8 = createNewTask('take a shower', 'to-do', 'Project', 'high', '2024-05-17', todos)
// const todo9 = createNewTask('born', 'done', 'Nemo', 'high', '1993-01-04', todos)
// const todo10 = createNewTask('graduate at fanshawe', 'wont do', 'Project', 'medium', '2023-12-11', todos)

// todos.push(todo1)
// todos.push(todo2)
// todos.push(todo3)
// todos.push(todo4)
// todos.push(todo5)
// todos.push(todo6)
// todos.push(todo7)
// todos.push(todo8)
// todos.push(todo9)
// todos.push(todo10)
// console.log(todos)

// todos.forEach(todo => todo.order = todos.indexOf(todo))
// document.addEventListener('click', e =>{
//     todos.forEach(todo => todo.order = todos.indexOf(todo))
// })


const addTask = interactDOM().hookDOMelement('addTask')
addTask.addEventListener('click', e =>{
    const newTask = interactDOM().hookDOMelement('newTask')
    e.preventDefault()
    interactDOM().hide(newTask)
    addTasks()
    // displayTasks(todos)
})


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
    console.log(todos)
    // todos.push(todo)
    interactDOM().formReset('newTask')
    handleEffects()
}

// displayTasks(todos)

// =============== edit tasks logic, soon will be a module
const todosView = interactDOM().hookDOMelement('todosView')
todosView.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('delete-task')) {
        // console.log(e.target.id)
        deleteTask(e.target.parentNode.id)
        
    } else if (e.target.classList.contains('todo-status')) {
        const index = +`${e.target.id}`.replace("status", "")
        // console.log(index)
        // handleStatusChange (e.target, index)
        controlStatusChange(e.target, index)
    } else if (e.target.classList.contains('todo-priority')){
        const index = +`${e.target.id}`.replace("priority", "")
        // console.log(index)
        controlPriorityChange(e.target, index)
        
    } else if (e.target.classList.contains('check-task')){
        
        e.target.classList.toggle('clicked')
        setInterval(function(){
            if(e.target.classList.contains('clicked')){
                completeTask(e.target)
            }    
        }, 2000)
        
        console.log(e.target)
        

    } else if (e.target.classList.contains('todo-lists')){
        const index = +`${e.target.id}`.replace("list", "")
        controlListChange(e.target, index)
    } else if(e.target.classList.contains('todo-tasks')){
        const index = +`${e.target.id}`.replace("task", "")
        controlTaskChange(e.target, index)
    } else if(e.target.classList.contains('todo-due-date')){
        const index = +`${e.target.id}`.replace("dueDate", "")
        controlDueDateChange(e.target, index)
    }
    
    // else {
    //     displayTasks(todos)
    // }
});
// =============== edit tasks logic, soon will be a module

// document.addEventListener('mousedown', e=> {
//     console.log(e.target)
// })

handleNewTaskForm()




// ======================= list add logic, soon will be a new module  


// const list1 = createList('general')
// const list2 = createList('Nemo')
// const list3 = createList('Project')
// const list4 = createList('daily')
// lists.push(list1)
// lists.push(list2)
// lists.push(list3)
// lists.push(list4)
// console.log(lists.map( list => list.listName))
// displayLists(lists)

// updateListOptions(lists)



  
const newList = interactDOM().hookDOMelement('newList')

newList.addEventListener('click', e => {
    handleNewListForm(e)
})


const addNewList = interactDOM().hookDOMelement('addNewList')

const addList = function (){
    let listName = interactDOM().getInputValue('listName')
    let color = interactDOM().getInputValue('listColor')
    let description = interactDOM().getInputValue('listDescription')
    createNewList(`${listName}`, `${color}`, `${description}`)
    const lists = getFromLocalStorage('lists')
    displayLists(lists)
    updateListOptions(lists)
    interactDOM().formReset('addListForm')
    handleEffects()
}

addNewList.addEventListener('click', e =>{
    const newListForm = interactDOM().hookDOMelement('newListForm')
    e.preventDefault()
    interactDOM().hide(newListForm)
    addList()
    // displayLists(lists)
    // updateListOptions(lists)
})

displayLists(lists)
updateListOptions(lists)

// ======================= list add logic, soon will be a new module


// =============== checkbox 'done' logic
function completeTask(element) {
    const index = +`${element.id}`.replace("checktask#", "")
    // console.log(element)
    modifyStatus(index, 'done', todos) 
}
// =============== checkbox 'done' logic

// ======================== filter tasks by list

const listsView = interactDOM().hookDOMelement('listsView')

listsView.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()
    if(e.target.classList.contains('list-item')){
        const todos = getFromLocalStorage('todos')
        const lists = getFromLocalStorage('lists')
        console.log(e.target)
        filterByList(e.target, lists, todos)
    } else if(e.target.parentNode.classList.contains('delete-list')){
        const index = +`${e.target.parentNode.id}`.replace("deleteList#", "")
        console.log(index)
        deleteList(index)
        handleEffects()
    }
})

// ======================== filter tasks by list

// const removeFilter = interactDOM().hookDOMelement('removeFilter')
// removeFilter.addEventListener('mousedown', e => {
//     e.preventDefault()
//     displayTasks(todos)
// })


handleFilterOrder(lists, todos)

console.log(todos)

// document.body.addEventListener('mousedown', e =>{
//     console.log(e.target.getBoundingClientRect())
// })


// document.body.addEventListener('mouseover', e => {
//     if(e.target.classList.contains('delete-list-img')){
//         console.log('entered!')
//         e.target.style.cursor = 'pointer'
//         e.target.style.transform = 'scale(1.1)'
//     }
// })

handleEffects()