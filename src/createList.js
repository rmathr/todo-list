import displayLists from "./displayLists"

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

export { modifyList, createList }