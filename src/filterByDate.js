import displayTasks from "./displayTasks";


export default function filterByDate (dateValue, todos){
    
    // console.log(lists[index].listName)
    const filteredTodos = todos.filter(todo => todo.dueDate == dateValue )
    console.log(filteredTodos)
    
    displayTasks(filteredTodos)
} 