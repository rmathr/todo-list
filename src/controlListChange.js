import interactDOM from "./interactDom";
import displayTasks from "./displayTasks";
import { modifyList } from "./todoCreator"
import { getFromLocalStorage } from "./handleSaveLogic";
import { handleEffects } from "./handleEffects";


function updateListOptions(lists){
    const listInput = interactDOM().hookDOMelement('listInput')
    
    while (listInput.firstChild) {
        listInput.removeChild(listInput.firstChild);
    }
    const listArray = lists.map( list => list.listName)
    listArray.forEach(item => {
        const optionElement = interactDOM(). createElementWithClassAndId('option', 'option-input', `list${listArray.indexOf(item)}`)
        optionElement.value = item
        optionElement.textContent = item
        listInput.appendChild(optionElement)
})
}

function controlListChange(element, index){
    const todos = getFromLocalStorage('todos')
    const lists = getFromLocalStorage('lists')
    const buttons = lists.map( list => list.listName);
    const { top, left } = element.getBoundingClientRect()
    const changeList = interactDOM().generateListOptions({top, left}, buttons, 'list')
    
    document.addEventListener('mousedown', e =>{
        changeList.remove()
        
    })
    
    changeList.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-list-button')){
             modifyList(index, `${e.target.value}`)
            handleEffects()
            changeList.remove() 
        }
     })
}

export { updateListOptions, controlListChange }