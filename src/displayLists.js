import interactDOM from "./interactDom"
import remove from "./remove.png"

export default function displayLists(array){
    const listsView = interactDOM().hookDOMelement('listsView')
    interactDOM().returnAllMatchingElements('lists').forEach(e => e.remove())
    interactDOM().returnAllMatchingElements('delete-list').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = interactDOM().createElementWithClassAndId('section', 'lists', `list${i}`)
        let deleteList = interactDOM().createElementWithClassAndId('button', 'delete-list', `deleteList#${i}`)
        let deleteImage = interactDOM().createElementWithClassAndId('img', 'delete-list-img', `deleteListImage#${i}`)
        deleteImage.src = remove
        deleteList.appendChild(deleteImage)
        interactDOM().appendListElementandDefineContent(container, array[i], i)
        listsView.appendChild(container)
        container.appendChild(deleteList)
    }
}