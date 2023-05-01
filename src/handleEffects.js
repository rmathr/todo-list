import interactDOM from "./interactDom";
import { getFromLocalStorage } from "./handleSaveLogic";
import displayLists from "./displayLists";
import format from "date-fns/format";
import { formatDistanceToNowStrict } from 'date-fns'

function hex2rgba (hex, alpha) {
    if(hex === undefined){
        hex = '#205295'
    }
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };



function handleEffects(){
    const titles = interactDOM().returnAllMatchingElements('todos-titles')
    titles.forEach(title => {
        title.addEventListener('mouseenter', e => {
    //    console.log(titles)
       
        titles.forEach(title => title.classList.add('border-right-titles')) 
    })
        title.addEventListener('mouseleave', e => {
        titles.forEach(title => title.classList.remove('border-right-titles'))
        })
}
    )

    const deleteListIcons = interactDOM().returnAllMatchingElements('delete-list-img')
    deleteListIcons.forEach(item => {
        item.addEventListener('mouseenter', e => {
            item.classList.add('delete-image-img-hover')
        })
        item.addEventListener('mouseleave', e => {
            item.classList.remove('delete-image-img-hover')
        })
    })

    const expandedIcons = interactDOM().returnAllMatchingElements('expand-icon')
    expandedIcons.forEach(icon => {
        icon.addEventListener('mouseenter', e => {
            icon.classList.add('expand-icon-effect')
        })
        icon.addEventListener('mouseleave', e => {
            icon.classList.remove('expand-icon-effect')
        })

    })

    const todosTitles = interactDOM().returnAllMatchingElements('todos-titles')
    todosTitles.forEach(title => {
        title.addEventListener('mouseenter', e => {
            const imageIndex = e.target.id + "-icon"
            interactDOM().hookDOMelement(imageIndex).classList.add('image-visible')
        })
        title.addEventListener('mouseleave', e => {
            const imageIndex = e.target.id + "-icon"
            interactDOM().hookDOMelement(imageIndex).classList.remove('image-visible')
        })


    })

    const lists = interactDOM().returnAllMatchingElements('lists')
    lists.forEach(list => {
        
        list.addEventListener('mouseenter', e => {
            const listIndex = +`${e.target.id}`.replace("list", "")
            const imageIndex = 'deleteListImage#' + listIndex
            interactDOM().hookDOMelement(imageIndex).classList.add('image-visible')
            const lists = getFromLocalStorage('lists')
            const color = lists.filter(item => item.listName == list.textContent).map(item => item.color)
            list.style.backgroundColor = `${hex2rgba(color[0], 0.3)}`
        })
        list.addEventListener('mouseleave', e => {
            const listIndex = +`${e.target.id}`.replace("list", "")
            const imageIndex = 'deleteListImage#' + listIndex
            interactDOM().hookDOMelement(imageIndex).classList.remove('image-visible')
            list.style.backgroundColor = `transparent`
        })
    })

    const todos = interactDOM().returnAllMatchingElements('todos')
    todos.forEach(todo => {

        todo.addEventListener('mouseenter', e=> {
           const imageIndex = "deleteImage#" + todo.id.match(/\d+/)[0]
        //    console.log(imageIndex)
           interactDOM().hookDOMelement(imageIndex).classList.add('image-visible')
        })

        todo.addEventListener('mouseleave', e => {
            const imageIndex = "deleteImage#" + todo.id.match(/\d+/)[0]
            interactDOM().hookDOMelement(imageIndex).classList.remove('image-visible')
        })



    })


    const listItem = interactDOM().returnAllMatchingElements('list-item')
    listItem.forEach(list => {
        list.addEventListener('mousedown', e => {
                for(let i = 0; i < listItem.length; i++){
                    listItem[i].style.backgroundColor = 'transparent'
                }
                const lists = getFromLocalStorage('lists')
                const color = lists.filter(item => item.listName == list.textContent).map(item => item.color)
                list.style.backgroundColor = `${hex2rgba(color[0], 0.3)}`    
    })
    })
    
    const todoLists = interactDOM().returnAllMatchingElements('todo-lists')
    todoLists.forEach(list => {
        const lists = getFromLocalStorage('lists')
        const color = lists.filter(item => item.listName == list.textContent).map(item => item.color)
        // list.style.backgroundColor = `${color[0]}`
        list.style.backgroundColor = `${hex2rgba(color[0], 0.3)}`
    })

    const todoStatus = interactDOM().returnAllMatchingElements('todo-status')
    todoStatus.forEach(status => {
        if(status.textContent == 'done'){
            status.style.backgroundColor = 'var(--done-background-color)'
            status.style.color = 'var(--background-main-content)'
            const index = +`${status.id}`.replace("status", "")
            const taskIndex = 'task' + index
            const priorityIndex = 'priority' + index
            const dueDateIndex = 'dueDate' + index
            status.classList.add('done')
            interactDOM().hookDOMelement(taskIndex).classList.add('done')
            interactDOM().hookDOMelement(priorityIndex).classList.add('done')
            interactDOM().hookDOMelement(dueDateIndex).classList.add('done')
        }



    })

    const todoDueDate = interactDOM().returnAllMatchingElements('todo-due-date')
    todoDueDate.forEach(duedate => {
        if(new Date(duedate.textContent) <= new Date()){
            duedate.style.color = 'var(--due-date-red)'
        } else if(formatDistanceToNowStrict(new Date(duedate.textContent)) == '1 day' || 
        formatDistanceToNowStrict(new Date(duedate.textContent)) == '2 days' ||
        formatDistanceToNowStrict(new Date(duedate.textContent)) == '3 days' || 
        formatDistanceToNowStrict(new Date(duedate.textContent)) == '4 days' || 
        formatDistanceToNowStrict(new Date(duedate.textContent)) == '5 days' ||
        formatDistanceToNowStrict(new Date(duedate.textContent)).includes('seconds') ||
        formatDistanceToNowStrict(new Date(duedate.textContent)).includes('minutes') ||
        formatDistanceToNowStrict(new Date(duedate.textContent)).includes('hours')
        ){
            duedate.style.color = 'var(--due-date-yellow)'
        }
    })


    interactDOM().handleMouseMovementEffect('openTaskForm')
    interactDOM().handleMouseMovementEffect('cancelListAdd')
    interactDOM().handleMouseMovementEffect('addNewList')



}


export { hex2rgba, handleEffects }

