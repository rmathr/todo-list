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

    const toggleElementDisplay = function(element){
        if(element.style.display == 'flex'){
            element.style.display = 'none'
        } else {
            element.style.display = 'flex'
        }
    }

    const hide = function(element){
        element.style.display = 'none'
    }

    const appendElementAndDefineContent = function (container, obj, index) {
        let task = interactDOM().createElementWithClassAndId('p', 'todo-tasks', `task${index}`)
        let status = interactDOM().createElementWithClassAndId('p', 'todo-status', `status${index}`)
        let list = interactDOM().createElementWithClassAndId('p', 'todo-lists', `list${index}`)
        let priority = interactDOM().createElementWithClassAndId('p', 'todo-priority', `priority${index}`)
        let dueDate = interactDOM().createElementWithClassAndId('p', 'todo-due-date', `dueDate${index}`)
        container.appendChild(task)
        container.appendChild(status)
        container.appendChild(list)
        container.appendChild(priority)
        container.appendChild(dueDate)
        task.textContent = `${obj.task}`
        status.textContent = `${obj.status}`
        list.textContent = `${obj.list}`
        priority.textContent = `${obj.priority}`
        dueDate.textContent = `${obj.dueDate}`
    }


    const generateListOptions = function ({top, left}, array, property){
        
        const element = interactDOM().createElementWithClassAndId('div', `change-${property}`, `change${property}Id`)
        // const buttons = ['to-do', 'doing', 'done', 'wont do'];
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

  
    return { 
        mainContent, 
        createElementWithClassAndId, 
        hookDOMelement, 
        returnAllMatchingElements, 
        getInputValue, 
        appendElementAndDefineContent, 
        toggleElementDisplay,
        hide,
        generateListOptions 
    }
}

export default interactDOM