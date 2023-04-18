import displayTasks from "./displayTasks"

const statusChanger = props => ({
    changeStatus: () => {
        props.status = "OK"
    }
})
const priorityChanger = props => ({
    changePriority: () => {
        props.priority = "LOW"
    }
})

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

    return Object.assign(todo, statusChanger(todo), priorityChanger(todo))
}

const createNewTask = (task, status, list, priority, dueDate, todos) => {
    const todo = todoCreator(task, status, list, priority, dueDate)
    todos.push(todo)
    todo.order = todos.indexOf(todo)
    return todo
} 

export { defineTaskId, modifyTask, modifyStatus, modifyPriority, modifyList, modifyDueDate, todoCreator, createNewTask}