import "./style.css"
import interactDOM from "./interactDom"
import displayTasks from "./displayTasks"
import { todoCreator } from "./todoCreator"
import { modifyStatus } from "./todoCreator"
import controlStatusChange from "./controlStatusChange"
import controlPriorityChange from "./controlPriorityChange"


const todos = []



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
    if (e.target.classList.contains('delete-image')) {
        // console.log(e.target.id)
        deleteTask(e.target.id)
        
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
    } 
    
    else {
        displayTasks(todos)
    }
});


const openTaskForm = interactDOM().hookDOMelement('openTaskForm')

const handleNewTaskButton = function (e){
    e.preventDefault()


    const newTask = interactDOM().hookDOMelement('newTask')
    interactDOM().toggleElementDisplay(newTask)
    
    document.body.addEventListener('mousedown', e => {
        if(!e.target.parentNode.classList.contains('new-task')){
            // console.log(e.target)
            interactDOM().hide(newTask)
        }
    })
    

}

openTaskForm.addEventListener('click', e =>{
    handleNewTaskButton(e)
})


document.addEventListener('click', e=> {
    console.log(e.target)
})

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
    const listInput = interactDOM().createElementWithClassAndId('input', 'text-input', 'listInput')
    listInput.type = 'text'
    listInput.placeholder = 'List'

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