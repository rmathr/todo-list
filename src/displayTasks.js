import interactDOM from "./interactDom"
// import loopTodos from "./loopTodos"

export default function displayTasks(array){
    const todosView = interactDOM().hookDOMelement('todosView')
    interactDOM().returnAllMatchingElements('todos').forEach(e => e.remove())
    interactDOM().returnAllMatchingElements('delete-task').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = interactDOM().createElementWithClassAndId('div', 'todos', `todo${i}`)
        let deleteTask = interactDOM().createElementWithClassAndId('button', 'delete-task', `${i}`)
        let checkbox = interactDOM().createElementWithClassAndId('input', 'check-task', `checktask#${i}`)
        checkbox.type = 'checkbox'
        deleteTask.textContent = 'x'
        container.appendChild(checkbox)
        interactDOM().appendElementAndDefineContent(container, array[i], i)
        todosView.appendChild(container)
        container.appendChild(deleteTask)
    }
}