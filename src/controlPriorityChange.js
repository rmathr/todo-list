import interactDOM from "./interactDom";
import { modifyPriority }  from "./todoCreator";
import { getFromLocalStorage } from "./handleSaveLogic";
import { handleEffects } from "./handleEffects";

export default function controlPriorityChange(element, index){
    let todos = getFromLocalStorage('todos')
    const buttons = ['low', 'medium', 'high'];
    const { top, left } = element.getBoundingClientRect()
    const changePriority = interactDOM().generateListOptions({top, left}, buttons, 'priority')
    
    document.addEventListener('mousedown', e =>{
        changePriority.remove()
        
    })
    changePriority.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-priority-button')){
             modifyPriority(index, `${e.target.value}`)
             handleEffects() 
        }
     })
}