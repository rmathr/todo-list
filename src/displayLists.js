import interactDOM from "./interactDom"

export default function displayLists(array){
    const listsView = interactDOM().hookDOMelement('listsView')
    interactDOM().returnAllMatchingElements('lists').forEach(e => e.remove())
    // interactDOM().returnAllMatchingElements('delete-task').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = interactDOM().createElementWithClassAndId('section', 'lists', `list${i}`)
        // let checkTask = interactDOM().createElementWithClassAndId('button', 'check-task', `checktask#${i}`)
        // let deleteTask = interactDOM().createElementWithClassAndId('button', 'delete-task', `${i}`)
        // let deleteImage = interactDOM().createElementWithClassAndId('img', 'delete-image', 'deleteImage')
        // deleteImage.src = x
        // deleteTask.appendChild(deleteImage)
        // container.appendChild(checkTask)
        interactDOM().appendListElementandDefineContent(container, array[i], i)
        listsView.appendChild(container)
        // container.appendChild(deleteTask)
    }
}