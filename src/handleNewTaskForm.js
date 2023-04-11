import interactDOM from "./interactDom"




export default function handleNewTaskForm (){
    const openTaskForm = interactDOM().hookDOMelement('openTaskForm')
    const newTask = interactDOM().hookDOMelement('newTask')
    openTaskForm.addEventListener('mousedown', e =>{
        e.preventDefault()
        e.stopPropagation()
        interactDOM().toggleElementDisplay(newTask);
    })
    document.body.addEventListener('mousedown', e => {
        if(!e.target.parentNode.classList.contains('new-task') && !e.target.parentNode.classList.contains('open-task-form')){
            interactDOM().hide(newTask)
        } 
    })
}



