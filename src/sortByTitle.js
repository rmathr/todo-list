import displayTasks from "./displayTasks";

export default function sortByTitle(element, todos, title){
    const sortType =  element.value
    let sortedArray
    switch (sortType) {
        case 'Alphabetical':
            sortedArray = todos.sort((a, b) => a[title].toLowerCase() > b[title].toLowerCase() ? 1 : -1)
            break;
        case 'Reverse alphabetical':
            sortedArray = todos.sort((a, b) => a[title].toLowerCase() < b[title].toLowerCase() ? 1 : -1)
            break;
        case 'Newest to oldest':
            sortedArray = todos.sort((a, b) => new Date(a[title]) > new Date(b[title]) ? 1 : -1)
            break;
        case 'Oldest to newest':
            sortedArray = todos.sort((a, b) => new Date(a[title]) < new Date(b[title]) ? 1 : -1)
            break;
    }


    console.log(sortedArray)
    
    displayTasks(sortedArray)
}

