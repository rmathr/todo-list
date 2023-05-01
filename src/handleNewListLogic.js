import interactDOM from "./interactDom"
import { createNewList } from "./createList"
import displayLists from "./displayLists"
import { updateListOptions } from "./controlListChange"
import { handleEffects } from "./handleEffects"
import handleNewListForm from "./handleNewListForm"
import { getFromLocalStorage } from "./handleSaveLogic"

function addList (){
    let listName = interactDOM().getInputValue('listName')
    let color = interactDOM().getInputValue('listColor')
    let description = interactDOM().getInputValue('listDescription')
    createNewList(`${listName}`, `${color}`, `${description}`)
    const lists = getFromLocalStorage('lists')
    displayLists(lists)
    updateListOptions(lists)
    interactDOM().formReset('addListForm')
    handleEffects()
}

function handleNewListLogic (){
    const newList = interactDOM().hookDOMelement('newList')

    newList.addEventListener('click', e => {
        handleNewListForm(e)
    })
    
    const addNewList = interactDOM().hookDOMelement('addNewList')
    
    addNewList.addEventListener('click', e =>{
        const newListForm = interactDOM().hookDOMelement('newListForm')
        e.preventDefault()
        interactDOM().hide(newListForm)
        addList()
    })


}

export { handleNewListLogic, addList}