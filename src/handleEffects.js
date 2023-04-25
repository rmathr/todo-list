import interactDOM from "./interactDom";
import { getFromLocalStorage } from "./handleSaveLogic";

function hex2rgba (hex, alpha) {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };



function handleEffects(){
    const titles = interactDOM().returnAllMatchingElements('todos-titles')
    titles.forEach(title => {
        title.addEventListener('mouseenter', e => {
    //    console.log(titles)
       
        titles.forEach(title => title.classList.add('border-right-titles')) 
    })
        title.addEventListener('mouseleave', e => {
        titles.forEach(title => title.classList.remove('border-right-titles'))
        })
}
    )

    const deleteListIcons = interactDOM().returnAllMatchingElements('delete-list-img')
    deleteListIcons.forEach(item => {
        item.addEventListener('mouseenter', e => {
            item.classList.add('delete-image-img-hover')
        })
        item.addEventListener('mouseleave', e => {
            item.classList.remove('delete-image-img-hover')
        })
    })

    const lists = interactDOM().returnAllMatchingElements('lists')
    lists.forEach(list => {
        
        list.addEventListener('mouseenter', e => {
            const listIndex = +`${e.target.id}`.replace("list", "")
            const imageIndex = 'deleteListImage#' + listIndex
            interactDOM().hookDOMelement(imageIndex).classList.add('image-visible')
        })
        list.addEventListener('mouseleave', e => {
            const listIndex = +`${e.target.id}`.replace("list", "")
            const imageIndex = 'deleteListImage#' + listIndex
            interactDOM().hookDOMelement(imageIndex).classList.remove('image-visible')
        })
    })

    const todoLists = interactDOM().returnAllMatchingElements('todo-lists')
    todoLists.forEach(list => {
        const lists = getFromLocalStorage('lists')
        const color = lists.filter(item => item.listName == list.textContent).map(item => item.color)
        // list.style.backgroundColor = `${color[0]}`
        list.style.backgroundColor = `${hex2rgba(color[0], 0.3)}`
    })



}


export { hex2rgba, handleEffects }

