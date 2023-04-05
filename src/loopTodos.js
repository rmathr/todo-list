import interactDOM from "./interactDom"

export default function loopTodos(todo){
    const todosView = interactDOM().hookDOMelement('todosView')

    let container = interactDOM().createElementWithClassAndId('div', 'todos', `todo${i}`)
    let deleteTask = interactDOM().createElementWithClassAndId('button', 'delete-task', `${i}`)
    deleteTask.textContent = 'x'
    interactDOM().appendElementAndDefineContent(container, array[i], i)
    todosView.appendChild(container)
    todosView.appendChild(deleteTask)
    

    const deleteTasks = interactDOM().returnAllMatchingElements('delete-task')

    deleteTasks.forEach(e => e.addEventListener('click', e => {
    e.preventDefault()
    console.log(e.target.id)
    deleteTask(e.target.id)
    displayTasks(todos)
})
)  
}