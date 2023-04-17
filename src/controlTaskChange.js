import interactDOM from "./interactDom";
import displayTasks from "./displayTasks";
import { modifyTask}  from "./todoCreator";

export default function controlTaskChange(element, index, todos){
    
    // const buttons = ['low', 'medium', 'high'];
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
            modifyTask(index, `${changeTask.value}`, todos)
            changeTask.remove()
            displayTasks(todos)
        }
    })
    
    changeTask.addEventListener('keydown', e => {
        if(e.keyCode == 13){
            modifyTask(index, `${changeTask.value}`, todos)
            changeTask.remove()
            displayTasks(todos) 
        }
    })



    // changePriority.addEventListener('mouseleave', e => {
    //     setInterval( function() {changePriority.remove()}, 500)
    // })
    // changePriority.addEventListener('mousedown', e =>{
    //     if (e.target.classList.contains('change-priority-button')){
    //          console.log(e.target.value);
    //          modifyPriority(index, `${e.target.value}`, todos)
    //         //  interactDOM().hide(changeStatus);
    //         changePriority.remove()
    //          displayTasks(todos)  
    //     }
    //  })
}