import displayTasks from "./displayTasks";


export default function filterByList (element, lists, todos){
    const index = +`${element.id}`.replace("list", "")
    const listValue = lists.map( list => list.listName)[index]
    const filteredTodos = todos.filter(todo => todo.list == listValue )
    console.log(filteredTodos)
    
    displayTasks(filteredTodos)
} 