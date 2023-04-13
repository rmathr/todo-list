import displayTasks from "./displayTasks";


export default function filterByList (element, lists, todos){
    const index = +`${element.id}`.replace("list", "")
    // console.log(lists[index].listName)
    const listValue = lists.map( list => list.listName)[index] == undefined ? element.value : lists.map( list => list.listName)[index]
    const filteredTodos = todos.filter(todo => todo.list == listValue )
    console.log(filteredTodos)
    
    displayTasks(filteredTodos)
} 