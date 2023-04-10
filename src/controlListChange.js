import interactDOM from "./interactDom";
import displayTasks from "./displayTasks";
import { modifyList } from "./todoCreator"

export default function controlListChange(element, index, lists, todos){
    
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