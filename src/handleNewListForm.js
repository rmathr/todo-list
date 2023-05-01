import interactDOM from "./interactDom"
import { addList } from "./handleNewListLogic"

export default function handleNewListForm (e){
    e.preventDefault()
    const newListForm = interactDOM().hookDOMelement('newListForm')
    interactDOM().toggleElementDisplay(newListForm)
    document.body.addEventListener('mousedown', e => {
        if((!e.target.closest('.new-list-form')) || e.target.closest('.cancel-list-add')){
            interactDOM().hide(newListForm)
        }
    })

    document.body.addEventListener('keydown', e => {
        if(e.key == 'Escape'){
            interactDOM().hide(newListForm)             
        } else if(e.key == 'Enter'){
            const newListForm = interactDOM().hookDOMelement('newListForm')
            addList()
            interactDOM.hide(newListForm)
        }
    })
}