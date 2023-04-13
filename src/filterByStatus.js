import displayTasks from "./displayTasks";


export default function filterByStatus (element, todos){
    
    // console.log(lists[index].listName)
    const statusValue =  element.value
    const filteredTodos = todos.filter(todo => todo.status == statusValue )
    console.log(filteredTodos)
    
    displayTasks(filteredTodos)
} 