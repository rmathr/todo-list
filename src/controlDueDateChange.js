import interactDOM from "./interactDom";
import displayTasks from "./displayTasks";
import { modifyDueDate}  from "./todoCreator";
import { WcDatepicker } from "wc-datepicker/dist/components/wc-datepicker"
import "wc-datepicker/dist/themes/dark.css";
import { eachWeekOfInterval } from "date-fns";
// customElements.define("wc-datepicker", WcDatepicker);
import { getFromLocalStorage } from "./handleSaveLogic";

export default function controlDueDateChange(element, index){
    let todos = getFromLocalStorage()
    // const buttons = ['low', 'medium', 'high'];
    const correctIndex = todos.findIndex(item => item.order == index)
    const { top, left } = element.getBoundingClientRect()

    
    const datePicker = interactDOM().createElementWithClassAndId('wc-datepicker', 'date-picker', 'datepicker')
    datePicker.classList.add('edit-due-date')
    const currentDate = todos[correctIndex].dueDate 
    datePicker.setAttribute('start-date', `${currentDate}`)
    // datePicker.setAttribute('value', `${Date('2024-01-04')}`)
    datePicker.value = new Date(`${currentDate.replaceAll('-', '/')}`)

    datePicker.style.position = 'absolute'
    datePicker.style.display = 'flex'
    datePicker.style.top = `${top}px`;
    datePicker.style.left = `${left}px`; 
    document.body.appendChild(datePicker);
    
    document.addEventListener('mousedown', e =>{
           datePicker.remove()
    })
    function handleDateChange(){
        datePicker.addEventListener('selectDate', function(event) {
            console.log(event)
            const datepicked = event.detail
            modifyDueDate(index, datepicked)
            datePicker.remove()
            // displayTasks(todos)
            console.log(todos)
        });
    }
    datePicker.addEventListener('mousedown', e => {
        e.preventDefault()
        e.stopPropagation()
        handleDateChange()
    })    
    
}