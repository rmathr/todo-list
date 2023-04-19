import displayTasks from "./displayTasks"
import { getFromLocalStorage } from "./handleSaveLogic";
import { addToLocalStorage } from "./handleSaveLogic";

// function addToLocalStorage(todos) {
//     // conver the array to string then store it.
//     localStorage.setItem('todos', JSON.stringify(todos));
   
//     displayTasks(todos);
//   }


const deleteTask = (index) => {
    let todos = getFromLocalStorage()
    todos.splice(index, 1)
    addToLocalStorage(todos)
    displayTasks(todos)
}


function defineTaskId (todos) {
    todos.forEach( todo => { 
        todo.order = todos.indexOf(todo)
    });
}

function modifyTask (index, taskValue, todos) {
    // const todo = createNewTask(`${taskValue}`, `${todos[index].status}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`, todos)
    // const todo = todoCreator(`${taskValue}`, `${todos[index].status}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    
    // todos.splice(index, 1, todo)
    const correctIndex = todos.findIndex(item => item.order == index)
    todos[correctIndex].task = `${taskValue}`
    displayTasks(todos)
}


function modifyStatus (index, statusValue, todos) {
    // const todo = todoCreator(`${todos[index].task}`, `${statusValue}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    const correctIndex = todos.findIndex(item => item.order == index)
    // todos.splice(index, 1, todo)
    todos[correctIndex].status = `${statusValue}`

    displayTasks(todos)
}

function modifyPriority (index, priorityValue, todos) {
    // const todo = todoCreator(`${todos[index].task}`, `${todos[index].status}` , `${todos[index].list}`, `${priorityValue}`, `${todos[index].dueDate}`)
    const correctIndex = todos.findIndex(item => item.order == index)
    // todos.splice(index, 1, todo)
    todos[correctIndex].priority = `${priorityValue}`
    displayTasks(todos)
}

function modifyList (index, listValue, todos) {
    // const todo = todoCreator(`${todos[index].task}`, `${todos[index].status}` , `${listValue}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    const correctIndex = todos.findIndex(item => item.order == index)
    // todos.splice(index, 1, todo)
    todos[correctIndex].list = `${listValue}`
    displayTasks(todos)
}


function modifyDueDate (index, dueDateValue, todos){
    const correctIndex = todos.findIndex(item => item.order == index)
    todos[correctIndex].dueDate = `${dueDateValue}`
    displayTasks(todos)
}

function todoCreator(task, status, list, priority, dueDate){
    let todo = {
        task,
        status,
        list,
        priority,
        dueDate,
        order: null
    }

    return Object.assign(todo)
}

const createNewTask = (task, status, list, priority, dueDate, todos) => {
    const todo = todoCreator(task, status, list, priority, dueDate)
    // const newTodos = todos
    todos.push(todo)
    todo.order = todos.indexOf(todo)
    addToLocalStorage(todos)
    // const tempObj = newTodos[newTodos.indexOf(todo)]
    // console.log(tempObj)
    // const tempTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    
    // if(tempTodos.indexOf(tempObj) == -1){
    //     localStorage.setItem('todos', JSON.stringify(newTodos))
    // }
    return todo
} 

export { defineTaskId, deleteTask, modifyTask, modifyStatus, modifyPriority, modifyList, modifyDueDate, todoCreator, createNewTask }