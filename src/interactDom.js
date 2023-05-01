import format  from "date-fns/format"
import tasks from './tasks.png'

const interactDOM = function(){
    const mainContent = document.getElementById('mainContent')


    const createElementWithClassAndId = function(type, className, idName){
        const element = document.createElement(type)
        element.classList.add(`${className}`)
        element.id = `${idName}`
        return element
    }

    const hookDOMelement = function (idName){
        const elem = document.getElementById(`${idName}`)
        return elem
    }

    const returnAllMatchingElements = function(className){
        return document.querySelectorAll(`.${className}`)
    }

    const getInputValue = function(idName){
        return interactDOM().hookDOMelement(idName).value
    }

    const toggleElementDisplay = function(element, displayValue){
        if(arguments.length > 1){
            element.style.display == displayValue ? element.style.display = 'none' : element.style.display = displayValue
        } else if (arguments.length == 1){
            element.style.display == 'flex' ? element.style.display = 'none' : element.style.display = 'flex'
        }
    }

   

    const hide = function(element){
        element.style.display = 'none'
    }

    const show = function(element){
        element.style.display = 'flex'
    }

    const appendElementAndDefineContent = function (container, obj, index) {
        let task = interactDOM().createElementWithClassAndId('p', 'todo-tasks', `task${index}`)
        let statusContainer = interactDOM().createElementWithClassAndId('span', 'status-container', `statusContainer${index}`)
        let status = interactDOM().createElementWithClassAndId('p', 'todo-status', `status${index}`)
        let listContainer = interactDOM().createElementWithClassAndId('span', 'list-container', `listContainer${index}`)
        let list = interactDOM().createElementWithClassAndId('p', 'todo-lists', `list${index}`)
        let priorityContainer = interactDOM().createElementWithClassAndId('span', 'priority-container', `priorityContainer${index}`)
        let priority = interactDOM().createElementWithClassAndId('p', 'todo-priority', `priority${index}`)
        let dueDate = interactDOM().createElementWithClassAndId('p', 'todo-due-date', `dueDate${index}`)
        container.appendChild(task)
        container.appendChild(statusContainer)
        container.appendChild(listContainer)
        container.appendChild(priorityContainer)
        container.appendChild(dueDate)
        statusContainer.appendChild(status)
        listContainer.appendChild(list)
        priorityContainer.appendChild(priority)
        task.textContent = `${obj.task}`
        status.textContent = `${obj.status}`
        list.textContent = `${obj.list}`
        priority.textContent = `${obj.priority}`
        dueDate.textContent = `${format(new Date(obj.dueDate.replaceAll('-', '/')), "MMM dd',' yy")}`
    }

    const appendListElementandDefineContent = function(container, obj, index){
        let list = interactDOM().createElementWithClassAndId('p', 'list-item', `list${index}`)
        container.appendChild(list)
        list.textContent = `${obj.listName}`
    }


    const generateListOptions = function ({ top, left }, array, property) {

        const element = interactDOM().createElementWithClassAndId('div', `change-${property}`, `change${property}Id`)
        const buttons = array;
        buttons.forEach((button) => {
            const buttonElement = interactDOM().createElementWithClassAndId('button', `change-${property}-button`, `${property}change${buttons.indexOf(button)}#id`)
            buttonElement.value = button;
            buttonElement.textContent = button;
            element.appendChild(buttonElement);
        });

        element.style.position = 'absolute'
        element.style.display = 'flex'
        element.style.top = `${top}px`;
        element.style.left = `${left}px`;
        document.body.appendChild(element);
        return element
    }

    const formReset = function(formId){
    const form = interactDOM().hookDOMelement(`${formId}`)
    form.reset()    
    }
    
    const handleMouseMovementEffect = function(elementId){
        const element = interactDOM().hookDOMelement(elementId)
    element.addEventListener('mousemove', e=> {
        const { x, y } = element.getBoundingClientRect();
        element.style.setProperty("--x", e.clientX - x);
        element.style.setProperty("--y", e.clientY - y);
    })
    }

    return { 
        mainContent, 
        createElementWithClassAndId, 
        hookDOMelement, 
        returnAllMatchingElements, 
        getInputValue, 
        appendElementAndDefineContent,
        appendListElementandDefineContent, 
        toggleElementDisplay,
        hide,
        show,
        generateListOptions,
        formReset,
        handleMouseMovementEffect 
    }
}

const handleImageBrand = (function(){
    const imageBrand = interactDOM().createElementWithClassAndId('img', 'image-brand', 'imageBrand')
    imageBrand.src = tasks
    const sidebarBrand = interactDOM().hookDOMelement('sidebarBrand')
    sidebarBrand.insertAdjacentElement("afterbegin", imageBrand)
    
    
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = tasks;
    document.getElementsByTagName('head')[0].appendChild(link);
})()

export default interactDOM