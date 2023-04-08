import interactDOM from "./interactDom";
import displayTasks from "./displayTasks";
import { modifyPriority }  from "./todoCreator";

export default function controlPriorityChange(element, index, todos){
    
    const buttons = ['low', 'medium', 'high'];
    const { top, left } = element.getBoundingClientRect()
    const changePriority = interactDOM().generateListOptions({top, left}, buttons, 'priority')
    
    document.addEventListener('mousedown', e =>{
        changePriority.remove()
        
    })
    
    // changePriority.addEventListener('mouseleave', e => {
    //     setInterval( function() {changePriority.remove()}, 500)
    // })
    changePriority.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-priority-button')){
             console.log(e.target.value);
             modifyPriority(index, `${e.target.value}`, todos)
            //  interactDOM().hide(changeStatus);
            changePriority.remove()
             displayTasks(todos)  
        }
     })
}