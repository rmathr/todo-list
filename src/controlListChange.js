import interactDOM from "./interactDom";
import displayTasks from "./displayTasks";
import { modifyList } from "./todoCreator"


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




function controlListChange(element, index, lists, todos){
    
    const buttons = lists.map( list => list.listName);
    const { top, left } = element.getBoundingClientRect()
    const changeList = interactDOM().generateListOptions({top, left}, buttons, 'list')
    
    document.addEventListener('mousedown', e =>{
        changeList.remove()
        
    })
    
    // changePriority.addEventListener('mouseleave', e => {
    //     setInterval( function() {changePriority.remove()}, 500)
    // })
    changeList.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-list-button')){
             console.log(e.target.value);
             modifyList(index, `${e.target.value}`, todos)
            //  interactDOM().hide(changeStatus);
            changeList.remove()
             displayTasks(todos)  
        }
     })
}

export { updateListOptions, controlListChange }