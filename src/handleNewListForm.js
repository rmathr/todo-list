import interactDOM from "./interactDom"

export default function handleNewListForm (e){
    e.preventDefault()
    const newListForm = interactDOM().hookDOMelement('newListForm')
    interactDOM().toggleElementDisplay(newListForm)
    const mainContainer = interactDOM().hookDOMelement('mainContainer')
    mainContainer.classList.add('blur')
    document.body.addEventListener('mousedown', e => {
        if(!e.target.parentNode.classList.contains('new-list-form') 
        && !e.target.parentNode.classList.contains('add-list-form')
        && !e.target.parentNode.classList.contains('label-input-name')
        && !e.target.parentNode.classList.contains('label-input-description')
        && !e.target.parentNode.classList.contains('new-list-buttons')
        && !e.target.classList.contains('new-list-form')
        && !e.target.parentNode.classList.contains('new-list')
        || e.target.classList.contains('cancel-list-add')){
            // console.log(e.target)
            interactDOM().hide(newListForm)
            // newTask.remove()
        }
    })
}