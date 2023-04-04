import "./style.css"
import interactDOM from "./interactDom"


const todos = []


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

const todo1 = todoCreator('walk with Manchinha', 'todo', 'daily', 'high', '03/04/2023')
const todo2 = todoCreator('play Ravendawn', 'todo', 'daily', 'high', '03/04/2023')
const todo3 = todoCreator('study math', 'todo', 'daily', 'medium', '06/04/2023')

todos.push(todo1)
todos.push(todo2)
todos.push(todo3)
console.log(todos)

const todosView = interactDOM().hookDOMelement('todosView')
for(let i = 0; i < todos.length; i++){
    let container = interactDOM().createElementWithClassAndId('div', 'todos', `todo${i}`)
    interactDOM().appendElementAndDefineContent(container, todos[i], i)
    todosView.appendChild(container)
}





// function swimmingMonsterCreator(name) {
//     const monster = { name: name}

//     function swimmer({ name }){
//         return {
//             swim: () => console.log(`${name} swan`)
//         }
//     }

//     return {
//         ...monster,
//         ...swimmer(monster)
//     }
// }

// const obj = swimmingMonsterCreator('Monster')
// obj.swim()