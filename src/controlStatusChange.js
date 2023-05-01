import interactDOM from "./interactDom";
import displayTasks from "./displayTasks";
import { modifyStatus }  from "./todoCreator";
import { getFromLocalStorage } from "./handleSaveLogic";
import { handleEffects } from "./handleEffects";


function completeTask(element) {
    const index = +`${element.id}`.replace("checktask#", "")
    const todos = getFromLocalStorage('todos')
    // console.log(element)
    modifyStatus(index, 'done', todos) 
    handleEffects()
}



function controlStatusChange(element, index){
    let todos = getFromLocalStorage('todos')
    const buttons = ['to-do', 'doing', 'done', 'wont do'];
    const { top, left } = element.getBoundingClientRect()

    const changeStatus = interactDOM().generateListOptions({top, left}, buttons, 'status')
    

    document.addEventListener('mousedown', e =>{
        changeStatus.remove()
        
    })
    
    // changeStatus.addEventListener('mouseleave', e => {
    //     setInterval( function() {changeStatus.remove()}, 500)
    // })


    changeStatus.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-status-button')){
            //  console.log(e.target.value);
             modifyStatus(index, `${e.target.value}`)
            //  interactDOM().hide(changeStatus);
            changeStatus.remove()
            handleEffects()
            //  displayTasks(todos)  
        }
     })
}


export { completeTask, controlStatusChange }