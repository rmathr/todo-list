import "./style.css"
import interactDOM from "./interactDom"
import displayTasks from "./displayTasks"
import { todoCreator } from "./todoCreator"
import { modifyStatus } from "./todoCreator"
import controlStatusChange from "./controlStatusChange"
import controlPriorityChange from "./controlPriorityChange"
import controlListChange from "./controlListChange"
import { createList } from "./createList"
import displayLists from "./displayLists"
import handleNewListForm from "./handleNewListForm"

const todos = []
const lists = []



const deleteTask = index => {
    todos.splice(index, 1)
    displayTasks(todos)
}


const todo1 = todoCreator('walk with Manchinha', 'to-do', 'daily', 'high', '03/04/2023')
const todo2 = todoCreator('play Ravendawn', 'to-do', 'daily', 'high', '03/04/2023')
const todo3 = todoCreator('study math', 'to-do', 'daily', 'medium', '06/04/2023')

todos.push(todo1)
todos.push(todo2)
todos.push(todo3)
// console.log(todos)


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
    const todo = todoCreator(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`)
    todos.push(todo)
}

displayTasks(todos)


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
    } else if (e.target.classList.contains('todo-lists')){
        const index = +`${e.target.id}`.replace("list", "")
        controlListChange(e.target, index, lists, todos)
    }
    
    else {
        displayTasks(todos)
    }
});


document.addEventListener('mousedown', e=> {
    console.log(e.target)
})


// =========================== add new task functionality, soon will be in a module


const openTaskForm = interactDOM().hookDOMelement('openTaskForm')
// const addNewTask = interactDOM().hookDOMelement('addNewTask')
const newTask = interactDOM().hookDOMelement('newTask')



const handleNewTaskButton = function (e){
    e.preventDefault()
    interactDOM().toggleElementDisplay(newTask);
    // interactDOM().show(newTask)

}
openTaskForm.addEventListener('mousedown', e =>{
    e.preventDefault()
    e.stopPropagation()
    handleNewTaskButton(e)

    // interactDOM().toggleElementDisplay(newTask);
})
// openTaskForm.addEventListener('mousedown', e =>{
//     e.preventDefault()
//     handleNewTaskButton(e)

//     // interactDOM().toggleElementDisplay(newTask);
// })
document.body.addEventListener('mousedown', e => {
    if(!e.target.parentNode.classList.contains('new-task') && !e.target.parentNode.classList.contains('open-task-form')){
        interactDOM().hide(newTask)
    } 
})
// =========================== add new task functionality, soon will be in a module



const createTaskForm = function (){
    const newTask = interactDOM().createElementWithClassAndId('form', 'new-task', 'newTask')
    const taskInput = interactDOM().createElementWithClassAndId('input', 'text-input', 'taskInput')
    taskInput.type = 'text'
    taskInput.placeholder = 'Enter a new task!'
    const statusInput = interactDOM().createElementWithClassAndId('select', 'select-input', 'statusInput')
    const status = ['to-do', 'doing', 'done', 'wont do']
    status.forEach(item => {
        const optionElement = interactDOM().createElementWithClassAndId('option', 'option-input', `status${status.indexOf(item)}`)
        optionElement.value = item
        optionElement.textContent = item
        statusInput.appendChild(optionElement)
    })
    
    const listInput = interactDOM().createElementWithClassAndId('select', 'select-input', 'listInput')
    const listArray = lists.map( list => list.listName)
    listArray.forEach(item => {
        const optionElement = interactDOM(). createElementWithClassAndId('option', 'option-input', `list${listArray.indexOf(item)}`)
        optionElement.value = item
        optionElement.textContent = item
        listInput.appendChild(optionElement)
    })
    // listInput.type = 'text'
    // listInput.placeholder = 'List'

    const priorityInput = interactDOM().createElementWithClassAndId('select', 'select-input', 'priorityInput')
    const priorities = ['high', 'medium', 'low']
    priorities.forEach(priority => {
        const optionElement = interactDOM().createElementWithClassAndId('option', 'option-input', `priority${priorities.indexOf(priority)}`)
        optionElement.value = priority
        optionElement.textContent = priority
        priorityInput.appendChild(optionElement)
    })
    const dueDateInput = interactDOM().createElementWithClassAndId('input', 'text-input', 'dueDateInput')
    dueDateInput.type = 'text'
    dueDateInput.placeholder = 'due date'
    const addTask = interactDOM().createElementWithClassAndId('button', 'add-task', 'addTask')
    addTask.type = 'submit'
    addTask.textContent = 'Save'

    newTask.appendChild(taskInput)
    newTask.appendChild(statusInput)
    newTask.appendChild(listInput)
    newTask.appendChild(priorityInput)
    newTask.appendChild(dueDateInput)
    newTask.appendChild(addTask)
   

    
addTask.addEventListener('click', e =>{
    e.preventDefault()
    addTasks()
    displayTasks(todos)
})


    return newTask
}

// ======================= list add logic, soon will be a new module  
const list1 = createList('general')
const list2 = createList('Nemo')
const list3 = createList('Project')
lists.push(list1)
lists.push(list2)
lists.push(list3)
console.log(lists.map( list => list.listName))
displayLists(lists)

const listInput = interactDOM().hookDOMelement('listInput')
const listArray = lists.map( list => list.listName)
    listArray.forEach(item => {
        const optionElement = interactDOM(). createElementWithClassAndId('option', 'option-input', `list${listArray.indexOf(item)}`)
        optionElement.value = item
        optionElement.textContent = item
        listInput.appendChild(optionElement)
    })




  
const newList = interactDOM().hookDOMelement('newList')

newList.addEventListener('click', e => {
    handleNewListForm(e)
})


const addNewList = interactDOM().hookDOMelement('addNewList')

const addList = function (){
    const list = interactDOM().getInputValue('listName')
    const newList = createList(list)
    lists.push(newList)
}

addNewList.addEventListener('click', e =>{
    const newListForm = interactDOM().hookDOMelement('newListForm')
    e.preventDefault()
    interactDOM().hide(newListForm)
    addList()
    displayLists(lists)
})

// ======================= list add logic, soon will be a new module