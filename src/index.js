import "./style.css"
import interactDOM from "./interactDom"
import displayTasks from "./displayTasks"
import { todoCreator } from "./todoCreator"
import { modifyStatus } from "./todoCreator"
import controlTaskChange from "./controlTaskChange"
import controlStatusChange from "./controlStatusChange"
import controlPriorityChange from "./controlPriorityChange"
import { controlListChange } from "./controlListChange"
import { updateListOptions } from "./controlListChange"
import { createList } from "./createList"
import displayLists from "./displayLists"
import handleNewListForm from "./handleNewListForm"
import handleNewTaskForm from "./handleNewTaskForm"
import filterByList from "./filterByList"
import { createNewTask } from "./todoCreator"
import { defineTaskId } from "./todoCreator"
import handleFilterOrder from "./handleFilterOrder"

import arrowRight  from './right.png'

import { WcDatepicker } from "wc-datepicker/dist/components/wc-datepicker";
// import "../node_modules/wc-datepicker/dist/themes/dark.css"



const todos = []
const lists = []



const deleteTask = index => {
    todos.splice(index, 1)
    displayTasks(todos)
}


const todo1 = createNewTask('walk with Manchinha', 'to-do', 'daily', 'high', '03/04/2023', todos)
const todo2 = createNewTask('play Ravendawn', 'to-do', 'daily', 'high', '03/04/2023', todos)
const todo3 = createNewTask('study math', 'to-do', 'daily', 'medium', '06/04/2023', todos)
const todo4 = createNewTask('play guitar', 'doing', 'general', 'low', '09/04/2023', todos)
const todo5 = createNewTask('look for beavers', 'to-do', 'general', 'high', '12/04/2023', todos)
const todo6 = createNewTask('try to catch a squirrel', 'to-do', 'general', 'low', '06/12/2023', todos)
const todo7 = createNewTask('watch tv', 'doing', 'Nemo', 'medium', '11/04/2022', todos)
const todo8 = createNewTask('take a shower', 'to-do', 'Project', 'high', '12/31/2024', todos)
const todo9 = createNewTask('born', 'done', 'Nemo', 'high', '01/04/1993', todos)
const todo10 = createNewTask('graduate at fanshawe', 'wont do', 'Project', 'medium', '02/04/2024', todos)

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
    displayTasks(todos)
})


const addTasks = function(){
    let task = interactDOM().getInputValue('taskInput')
    let status = interactDOM().getInputValue('statusInput')
    let list = interactDOM().getInputValue('listInput')
    let priority = interactDOM().getInputValue('priorityInput')
    let dueDate = interactDOM().getInputValue('dueDateInput')
    // const todo = todoCreator(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`)
    const todo = createNewTask(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`, todos)
    // todos.push(todo)
    interactDOM().formReset('newTask')
}

displayTasks(todos)

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
        controlStatusChange(e.target, index, todos)
    } else if (e.target.classList.contains('todo-priority')){
        const index = +`${e.target.id}`.replace("priority", "")
        // console.log(index)
        controlPriorityChange(e.target, index, todos) 
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
        controlListChange(e.target, index, lists, todos)
    } else if(e.target.classList.contains('todo-tasks')){
        const index = +`${e.target.id}`.replace("task", "")
        controlTaskChange(e.target, index, todos)
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
const list1 = createList('general')
const list2 = createList('Nemo')
const list3 = createList('Project')
const list4 = createList('daily')
lists.push(list1)
lists.push(list2)
lists.push(list3)
lists.push(list4)
console.log(lists.map( list => list.listName))
displayLists(lists)

// const listInput = interactDOM().hookDOMelement('listInput')
// const listArray = lists.map( list => list.listName)
// listArray.forEach(item => {
//         const optionElement = interactDOM(). createElementWithClassAndId('option', 'option-input', `list${listArray.indexOf(item)}`)
//         optionElement.value = item
//         optionElement.textContent = item
//         listInput.appendChild(optionElement)
// })
updateListOptions(lists)



  
const newList = interactDOM().hookDOMelement('newList')

newList.addEventListener('click', e => {
    handleNewListForm(e)
})


const addNewList = interactDOM().hookDOMelement('addNewList')

const addList = function (){
    const list = interactDOM().getInputValue('listName')
    const newList = createList(list)
    lists.push(newList)
    interactDOM().formReset('addListForm')
}

addNewList.addEventListener('click', e =>{
    const newListForm = interactDOM().hookDOMelement('newListForm')
    e.preventDefault()
    interactDOM().hide(newListForm)
    addList()
    displayLists(lists)
    updateListOptions(lists)
})

// ======================= list add logic, soon will be a new module

function completeTask(element) {
    const index = +`${element.id}`.replace("checktask#", "")
    // console.log(element)
    modifyStatus(index, 'done', todos)
   
}

// ======================== filter tasks by list

const listsView = interactDOM().hookDOMelement('listsView')

listsView.addEventListener('click', e => {
    if(e.target.classList.contains('list-item')){
        console.log(e.target)
        filterByList(e.target, lists, todos)
    }
})

// ======================== filter tasks by list

const removeFilter = interactDOM().hookDOMelement('removeFilter')
removeFilter.addEventListener('mousedown', e => {
    e.preventDefault()
    displayTasks(todos)
})


handleFilterOrder(lists, todos)

console.log(todos)














































//============================================================
// import { easepick } from "@easepick/bundle"
// import { AmpPlugin } from '@easepick/amp-plugin';
// const mainContent = interactDOM().hookDOMelement('mainContent')
// // import controlDatePicker from "./datepicker"


// const datepicker = interactDOM().createElementWithClassAndId('input', 'date-picker', 'datepicker')  
// mainContent.appendChild(datepicker)
// const picker = new easepick.create({
//     element: document.getElementById('datepicker'),
//     css: [
//         "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css",
//         "./main.css"
//         // 'https://easepick.com/css/customize_sample.css',
//         // "../src/calendar.css"
//         // "./calendar.css"
//     ],
//     zIndex: 10,
//     firstDay: 0,
//     inline: true,
//     AmpPlugin: {
//         dropdown: {
//             months: true,
//             years: true,
//             minYear: 2000,
//             maxYear: 2030
//         },
//         darkMode: false
//     },
//     plugins: [AmpPlugin]
// })

//==========================================================