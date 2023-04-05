import interactDOM from "./interactDom"

// function generateButtons (array){
//     const todosView = interactDOM().hookDOMelement('todosView')
//     for(let i = 0; i < array.length; i++){
//         let deleteTask = interactDOM().createElementWithClassAndId('button', 'delete-task', `${i}`)
//         deleteTask.textContent = 'Delete'
//         todosView.appendChild(deleteTask)
//     }
// }





export default function deleteTask(array,index) {
    array.splice(index, 1)
    displayTasks(array)
}


