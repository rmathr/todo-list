import interactDOM from "./interactDom";
import { modifyDueDate}  from "./todoCreator";
import "wc-datepicker/dist/themes/dark.css";
import { getFromLocalStorage } from "./handleSaveLogic";
import { handleEffects } from "./handleEffects";

export default function controlDueDateChange(element, index){
    let todos = getFromLocalStorage('todos')
    const correctIndex = todos.findIndex(item => item.order == index)
    const { top, left, width } = element.getBoundingClientRect()

    
    const datePicker = interactDOM().createElementWithClassAndId('wc-datepicker', 'new-due-date', 'datepicker')
    datePicker.classList.add('edit-due-date')
    const currentDate = todos[correctIndex].dueDate 
    datePicker.setAttribute('start-date', `${currentDate}`)
    datePicker.value = new Date(`${currentDate.replaceAll('-', '/')}`)

    datePicker.style.position = 'absolute'
    datePicker.style.display = 'flex'
    datePicker.style.top = `${top}px`;
    datePicker.style.left = `${left - (238-width)}px`; 
    document.body.appendChild(datePicker);
    
    document.addEventListener('mousedown', e =>{
        if(!e.target.closest('.new-due-date'))
           datePicker.remove()
    })
        datePicker.addEventListener('selectDate', function(event) {
            const datepicked = event.detail
            modifyDueDate(index, datepicked)
            datePicker.remove()
            handleEffects()
        });
}