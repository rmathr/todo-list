import interactDOM from "./interactDom";
import { modifyTask}  from "./todoCreator";
import { getFromLocalStorage } from "./handleSaveLogic";
import { handleEffects } from "./handleEffects";

export default function controlTaskChange(element, index){
    let todos = getFromLocalStorage('todos')
    const correctIndex = todos.findIndex(item => item.order == index)
    const { top, left } = element.getBoundingClientRect()
    const changeTask = interactDOM().createElementWithClassAndId('input', 'change-task-input', 'changeTaskInput')
    changeTask.type = 'text'
    const taskValue = `${todos[correctIndex].task}`
    changeTask.value = taskValue
    
    changeTask.style.position = 'absolute'
    changeTask.style.display = 'flex'
    changeTask.style.top = `${top}px`;
    changeTask.style.left = `${left}px`; 
    document.body.appendChild(changeTask);
    
    document.addEventListener('mousedown', e =>{
        if(!e.target.classList.contains('change-task-input') && document.contains(changeTask)){
            modifyTask(index, `${changeTask.value}`)
            changeTask.remove()
            handleEffects()
        }
    })
    
    changeTask.addEventListener('keydown', e => {
        if(e.keyCode == 13){
            modifyTask(index, `${changeTask.value}`)
            changeTask.remove()
            handleEffects()
        }
    })
}