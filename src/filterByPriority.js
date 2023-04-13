import displayTasks from "./displayTasks";


export default function filterByPriority (element, todos){
    
    // console.log(lists[index].listName)
    const priorityValue =  element.value
    const filteredTodos = todos.filter(todo => todo.priority == priorityValue )
    console.log(filteredTodos)
    
    displayTasks(filteredTodos)
} 