import interactDOM from "./interactDom";
import { deleteTask } from "./todoCreator";
import { controlStatusChange } from "./controlStatusChange";
import controlPriorityChange from "./controlPriorityChange";
import controlDueDateChange from "./controlDueDateChange";
import controlTaskChange from "./controlTaskChange";
import { completeTask } from "./controlStatusChange";
import { controlListChange } from "./controlListChange";
import filterByList from "./filterByList";
import { deleteList } from "./createList";
import { handleEffects } from "./handleEffects";
import { getFromLocalStorage } from "./handleSaveLogic";



export default function handleTasksAndListsEdits(){
    const todosView = interactDOM().hookDOMelement('todosView')
    todosView.addEventListener('click', (e) => {
        if (e.target.parentNode.classList.contains('delete-task')) {
            deleteTask(e.target.parentNode.id)
        } else if (e.target.classList.contains('todo-status')) {
            const index = +`${e.target.id}`.replace("status", "")
            controlStatusChange(e.target, index)
        } else if (e.target.classList.contains('todo-priority')){
            const index = +`${e.target.id}`.replace("priority", "")
            controlPriorityChange(e.target, index)
        } else if (e.target.classList.contains('check-task')){
            e.target.classList.toggle('clicked')
            setInterval(function(){
                if(e.target.classList.contains('clicked')){
                    completeTask(e.target)
                }    
            }, 2000)
        } else if (e.target.classList.contains('todo-lists')){
            const index = +`${e.target.id}`.replace("list", "")
            controlListChange(e.target, index)
        } else if(e.target.classList.contains('todo-tasks')){
            const index = +`${e.target.id}`.replace("task", "")
            controlTaskChange(e.target, index)
        } else if(e.target.classList.contains('todo-due-date')){
            const index = +`${e.target.id}`.replace("dueDate", "")
            controlDueDateChange(e.target, index)
        }
    });
    const listsView = interactDOM().hookDOMelement('listsView')
    
    listsView.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        if(e.target.classList.contains('list-item')){
            const todos = getFromLocalStorage('todos')
            const lists = getFromLocalStorage('lists')
            console.log(e.target)
            filterByList(e.target, lists, todos)
        } else if(e.target.parentNode.classList.contains('delete-list')){
            const index = +`${e.target.parentNode.id}`.replace("deleteList#", "")
            console.log(index)
            deleteList(index)
            handleEffects()
        }
    })
}
