import displayTasks from "./displayTasks";

export default function sortByTitle(element, todos, title){
    
    const sortType =  element.value
    let sortedArray
    if (sortType == 'Alphabetical'){
        sortedArray = todos.sort((a,b) => a[title].toLowerCase() > b[title].toLowerCase() ? 1 : -1)
    } else if (sortType == 'Reverse alphabetical'){
        sortedArray = todos.sort((a,b) => a[title].toLowerCase() < b[title].toLowerCase() ? 1 : -1)
    }
    console.log(sortedArray)
    
    displayTasks(sortedArray)
}

