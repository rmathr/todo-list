import interactDOM from "./interactDom"
import x from './crossed.png'

export default function displayTasks(array){
    const todosView = interactDOM().hookDOMelement('todosView')
    interactDOM().returnAllMatchingElements('todos').forEach(e => e.remove())
    interactDOM().returnAllMatchingElements('delete-task').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = interactDOM().createElementWithClassAndId('div', 'todos', `todo${array[i].order}`)
        let checkTask = interactDOM().createElementWithClassAndId('button', 'check-task', `checktask#${i}`)
        let deleteTask = interactDOM().createElementWithClassAndId('button', 'delete-task', `${i}`)
        let deleteImage = interactDOM().createElementWithClassAndId('img', 'delete-image', `deleteImage#${i}`)
        deleteImage.src = x
        deleteTask.appendChild(deleteImage)
        container.appendChild(checkTask)
        interactDOM().appendElementAndDefineContent(container, array[i], array[i].order)
        todosView.appendChild(container)
        container.appendChild(deleteTask)
    }
}