import interactDOM from "./interactDom";
import displayTasks from "./displayTasks";
import { modifyDueDate}  from "./todoCreator";
import { WcDatepicker } from "wc-datepicker/dist/components/wc-datepicker"
import "wc-datepicker/dist/themes/dark.css";
import { eachWeekOfInterval } from "date-fns";
// customElements.define("wc-datepicker", WcDatepicker);

export default function controlDueDateChange(element, index, todos){
    
    // const buttons = ['low', 'medium', 'high'];
    const correctIndex = todos.findIndex(item => item.order == index)
    const { top, left } = element.getBoundingClientRect()

    
    const datePicker = interactDOM().createElementWithClassAndId('wc-datepicker', 'date-picker', 'datepicker')
    datePicker.classList.add('edit-due-date') 
    // datePicker.setAttribute('start-date', '2024-01-04')
    // datePicker.setAttribute('value', `${Date('2024-01-04')}`)
    

    datePicker.style.position = 'absolute'
    datePicker.style.display = 'flex'
    datePicker.style.top = `${top}px`;
    datePicker.style.left = `${left}px`; 
    document.body.appendChild(datePicker);
    // document.addEventListener('mousedown', e =>{
    //     // e.stopPropagation()
    //     if(e.target.parentNode.classList.contains('wc-datepicker__date') && document.contains(datePicker)){
    //         datePicker.addEventListener('selectDate', function(event) {
    //             const datepicked = event.detail
    //             modifyDueDate(index, datepicked, todos)
    //             datePicker.remove()
    //             displayTasks(todos)
    //             console.log(todos)
    //           });
           
            
    //     }
    // })
    // document.addEventListener('mousedown', e => {
    //     if(!e.target.parentNode.classList.contains('wc-datepicker__calendar-row') 
    //      || (!e.target.parentNode.classList.contains('wc-datepicker__date'))
    //      || (!e.target.parentNode.classList.contains('sc-wc-datepicker'))
    //      || (!e.target.parentNode.classList.contains('wc-datepicker__weekday-row'))
    //      || (!e.target.parentNode.classList.contains('wc-datepicker__calendar-header'))
    //      || (!e.target.parentNode.classList.contains('wc-datepicker__calendar'))
    //      || (!e.target.parentNode.classList.contains('wc-datepicker__body'))
    //      || (!e.target.parentNode.classList.contains('wc-datepicker__previous-month-button'))
    //      || (!e.target.parentNode.classList.contains('c-datepicker__next-month-button'))
    //      || (!e.target.parentNode.classList.contains('wc-datepicker__current-month'))
    //      || (!e.target.parentNode.classList.contains('wc-datepicker__current-month'))
    //      || (!e.target.classList.contains('sc-wc-datepicker'))
    //      || (!e.target.classList.contains('wc-datepicker__year-select'))
    //     ){
    //         datePicker.remove()
    //     }
    // })

    document.addEventListener('mousedown', e =>{
           datePicker.remove()
    })
    function handleDateChange(){
        datePicker.addEventListener('selectDate', function(event) {
            console.log(event)
            const datepicked = event.detail
            modifyDueDate(index, datepicked, todos)
            datePicker.remove()
            displayTasks(todos)
            console.log(todos)
        });
    }
    datePicker.addEventListener('mousedown', e => {
        e.preventDefault()
        e.stopPropagation()
        handleDateChange()
    })    
    
}