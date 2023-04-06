import "./style.css"
import interactDOM from "./interactDom"
import displayTasks from "./displayTasks"


const todos = []


const deleteTask = index => {
    todos.splice(index, 1)
    displayTasks(todos)
}

const modifyStatus = function (index, statusValue) {
    const todo = todoCreator(`${todos[index].task}`, `${statusValue}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    
    todos.splice(index, 1, todo)

    displayTasks(todos)
}



const statusChanger = props => ({
    changeStatus: () => {
        props.status = "OK"
    }
})
const priorityChanger = props => ({
    changePriority: () => {
        props.priority = "LOW"
    }
})


function todoCreator(task, status, list, priority, dueDate){
    let todo = {
        task,
        status,
        list,
        priority,
        dueDate
    }

    return Object.assign(todo, statusChanger(todo), priorityChanger(todo))
}

const todo1 = todoCreator('walk with Manchinha', 'to-do', 'daily', 'high', '03/04/2023')
const todo2 = todoCreator('play Ravendawn', 'to-do', 'daily', 'high', '03/04/2023')
const todo3 = todoCreator('study math', 'to-do', 'daily', 'medium', '06/04/2023')

todos.push(todo1)
todos.push(todo2)
todos.push(todo3)
// console.log(todos)


const addTask = interactDOM().hookDOMelement('addTask')
addTask.addEventListener('click', e =>{
    e.preventDefault()
    addTasks()
    displayTasks(todos)
})




const addTasks = function(){
    let task = interactDOM().getInputValue('taskInput')
    let status = interactDOM().getInputValue('statusInput')
    let list = interactDOM().getInputValue('listInput')
    let priority = interactDOM().getInputValue('priorityInput')
    let dueDate = interactDOM().getInputValue('dueDateInput')
    const todo = todoCreator(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`)
    todos.push(todo)
}



displayTasks(todos)


const todosView = interactDOM().hookDOMelement('todosView')

// const statusChange = interactDOM().hookDOMelement('statusChange')



function controlStatusChange(element, index){
    // const changeStatus = interactDOM().hookDOMelement('changeStatus')
    const changeStatus = interactDOM().createElementWithClassAndId('div', 'change-status', 'changeStatus')
    const buttons = ['to-do', 'doing', 'done', 'wont do'];
        buttons.forEach((button) => {
          const buttonElement = interactDOM().createElementWithClassAndId('button', 'change-status-button', `${buttons[buttons.indexOf(button)]}#id`)
          buttonElement.value = button;
          buttonElement.textContent = button;
          changeStatus.appendChild(buttonElement);
        });
    const { top, left } = element.getBoundingClientRect()
    // interactDOM().toggleElementDisplay(changeStatus)
    changeStatus.style.position = 'absolute'
    changeStatus.style.display = 'flex'
    changeStatus.style.top = `${top}px`;
    changeStatus.style.left = `${left}px`; 
    document.body.appendChild(changeStatus);
    
    changeStatus.addEventListener('mouseleave', e => {
        setInterval( function() {changeStatus.remove()}, 500)
    })


    changeStatus.addEventListener('click', e =>{
        if (e.target.classList.contains('change-status-button')){
             console.log(e.target.value);
             modifyStatus(index, `${e.target.value}`)
            //  interactDOM().hide(changeStatus);
            changeStatus.remove()
             displayTasks(todos)  
        }
     })
}

const closePopup = function (){
    const changeStatus = interactDOM().hookDOMelement('changeStatus')
    document.addEventListener('click', e =>{
        if(document.body.contains(changeStatus)){
            changeStatus.remove()
        }
    })
}


function handleStatusChange (element, index){
    const { top, left } = element.getBoundingClientRect();
    
    const changeValue = interactDOM().createElementWithClassAndId('select', 'change-value', 'changeValue')
    const options = ['select','to-do', 'doing', 'done', 'wont do'];
        options.forEach((option) => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.textContent = option;
          changeValue.appendChild(optionElement);
        });
        const firstOption = changeValue.firstChild
        firstOption.selected = true
        firstOption.disabled = true
        firstOption.hidden = true

        changeValue.style.position = 'absolute';
        changeValue.style.top = `${top}px`;
        changeValue.style.left = `${left}px`;
        changeValue.addEventListener('click', e => {
            console.log(changeValue.size)
            changeValue.addEventListener('change', (event) => {    
                modifyStatus(index, `${event.target.value}`)
                changeValue.remove(); 
            })
            document.body.addEventListener('click', e =>{
                if(changeValue.size > 0){
                    console.log("?")
                    changeValue.remove()
                }
            })
            
        })
   
    document.body.appendChild(changeValue);
    
    
}




todosView.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-task')) {
        console.log(e.target.id)
        deleteTask(e.target.id)
        
    } else if (e.target.classList.contains('todo-status')) {
        const index = +`${e.target.id}`.replace("status", "")
        console.log(index)
        // handleStatusChange (e.target, index)
        controlStatusChange(e.target, index)
    } else {
        displayTasks(todos)
    }
});

// const { top, left } = e.target.getBoundingClientRect();

//         // Create a select element
//         const select = document.createElement('select');
    
//         // Create options for the select element
//         const options = ['to-do', 'doing', 'done', 'wont do'];
//         options.forEach((option) => {
//           const optionElement = document.createElement('option');
//           optionElement.value = option;
//           optionElement.textContent = option;
//           select.appendChild(optionElement);
//         });
    
//         // Position the select element where the clicked element is
//         select.style.position = 'absolute';
//         select.style.top = `${top}px`;
//         select.style.left = `${left}px`;
    

//         select.addEventListener('click', e =>{
//             if(window.onclick){
//                 select.remove()
//             }
//         })

//         // Add a change event listener to update the clicked element text
//         select.addEventListener('change', (event) => {
//           e.target.textContent = event.target.value;
//           select.remove(); // remove the select element after the selection is made
//         });
    
//         // Append the select element to the body
//         document.body.appendChild(select);