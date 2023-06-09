import displayLists from "./displayLists"
import { getFromLocalStorage } from "./handleSaveLogic";
import { addToLocalStorage } from "./handleSaveLogic";
import { updateListOptions } from "./controlListChange";


const deleteList = (index) => {
    let lists = getFromLocalStorage('lists')
    lists.splice(index, 1)
    addToLocalStorage(lists, 'lists')
    displayLists(lists)
    updateListOptions(lists)
}


function modifyList (index, listValue, lists) {
    const list = createList(`${listValue}`)
    
    lists.splice(index, 1, list)

    displayLists(lists)
}

function createList (listName, color, description){
    let list = {
        listName,
        color,
        description
    }
    return Object.assign({}, list)
}

const createNewList = (listName, color, description) => {
    const lists = getFromLocalStorage('lists')
    const list = createList(listName, color, description)
    lists.push(list)
    console.log(lists)
    addToLocalStorage(lists, 'lists')
}

export { deleteList, modifyList, createList, createNewList }