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

const modifyStatus = function (index, statusValue, todos) {
    const todo = todoCreator(`${todos[index].task}`, `${statusValue}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    
    todos.splice(index, 1, todo)

    displayTasks(todos)
}

function todoCreator(task, status, list, priority, dueDate){
    let todo = {
        task,
        status,
        list,
        priority,
        dueDate
    }

    return Object.assign(todo, statusChanger(todo), priorityChanger(todo))
}

export default {todoCreator , modifyStatus}