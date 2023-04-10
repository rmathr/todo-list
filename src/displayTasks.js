import interactDOM from "./interactDom"
// import loopTodos from "./loopTodos"
import x from './crossed.png'

export default function displayTasks(array){
    const todosView = interactDOM().hookDOMelement('todosView')
    interactDOM().returnAllMatchingElements('todos').forEach(e => e.remove())
    interactDOM().returnAllMatchingElements('delete-task').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = interactDOM().createElementWithClassAndId('div', 'todos', `todo${i}`)
        let checkTask = interactDOM().createElementWithClassAndId('button', 'check-task', `checktask#${i}`)
        let deleteTask = interactDOM().createElementWithClassAndId('button', 'delete-task', `${i}`)
        let deleteImage = interactDOM().createElementWithClassAndId('img', 'delete-image', 'deleteImage')
        deleteImage.src = x
        deleteTask.appendChild(deleteImage)
        container.appendChild(checkTask)
        interactDOM().appendElementAndDefineContent(container, array[i], i)
        todosView.appendChild(container)
        container.appendChild(deleteTask)
    }
}