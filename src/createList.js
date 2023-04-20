import displayLists from "./displayLists"
import { getFromLocalStorage } from "./handleSaveLogic";
import { addToLocalStorage } from "./handleSaveLogic";

const lists = []


function modifyList (index, listValue, lists) {
    const list = createList(`${listValue}`)
    
    lists.splice(index, 1, list)

    displayLists(lists)
}

function createList (listName){
    let list = {
        listName
    }
    return Object.assign({}, list)
}


const createNewList = (listName) => {
    const lists = getFromLocalStorage('lists')
    const list = createList(listName)
    lists.push(list)
    addToLocalStorage(lists, 'lists')
}

// const list1 = createList('general')
// const list2 = createList('Nemo')
// const list3 = createList('Project')
// const list4 = createList('daily')
// lists.push(list1)
// lists.push(list2)
// lists.push(list3)
// lists.push(list4)
// console.log(lists.map( list => list.listName))

// displayLists(lists)

// updateListOptions(lists)







export { modifyList, createList, createNewList }