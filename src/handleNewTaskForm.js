import interactDOM from "./interactDom"
import format from "date-fns/format"

export default function handleNewTaskForm (){
    const openTaskForm = interactDOM().hookDOMelement('openTaskForm')
    const newTask = interactDOM().hookDOMelement('newTask')
    openTaskForm.addEventListener('mousedown', e =>{
        e.preventDefault()
            e.stopPropagation()
        setTimeout(function(){
            interactDOM().toggleElementDisplay(newTask, 'grid');
        }, 200)   
    })
    const dueDateInput = interactDOM().hookDOMelement('dueDateInput')
    const datePicker = interactDOM().createElementWithClassAndId('wc-datepicker', 'new-due-date', 'datepicker')
    dueDateInput.addEventListener('mousedown', e => {
        e.stopPropagation()
        const { top, left, width } = e.target.getBoundingClientRect()
        const currentDate = format(new Date(), "P")
        datePicker.setAttribute('start-date', `${currentDate}`)
        datePicker.value = new Date(`${currentDate.replaceAll('-', '/')}`)
        datePicker.style.position = 'absolute'
        datePicker.style.display = 'flex'
        datePicker.style.top = `${top + 26}px`;
        datePicker.style.left = `${left -(236-width)}px`;
        document.body.appendChild(datePicker)
        datePicker.addEventListener('selectDate', function(event) {
            const datepicked = event.detail
            dueDateInput.textContent = datepicked
            dueDateInput.value = datepicked
            datePicker.remove()
          });
    })

    document.body.addEventListener('mousedown', e => {
        if(!e.target.parentNode.classList.contains('new-task') 
        && !e.target.parentNode.classList.contains('open-task-form') 
        && !e.target.closest('.new-due-date')){
            interactDOM().hide(newTask)
            datePicker.remove()
        } 
    })
    document.body.addEventListener('mousedown', e=>{
        if(!e.target.closest('.new-due-date')){
            datePicker.remove()
        }
    })
}



