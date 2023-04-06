import interactDOM from "./interactDom";
import displayTasks from "./displayTasks";





function controlStatusChange(element, index){
    // const changeStatus = interactDOM().hookDOMelement('changeStatus')
    const changeStatus = interactDOM().createElementWithClassAndId('div', 'change-status', 'changeStatus')
    const buttons = ['to-do', 'doing', 'done', 'wont do'];
        buttons.forEach((button) => {
          const buttonElement = interactDOM().createElementWithClassAndId('button', 'change-status-button', `${buttons[buttons.indexOf(button)]}#id`)
          buttonElement.value = button;
          buttonElement.textContent = button;
          changeStatus.appendChild(buttonElement);
        });
    const { top, left } = element.getBoundingClientRect()
    // interactDOM().toggleElementDisplay(changeStatus)
    changeStatus.style.position = 'absolute'
    changeStatus.style.display = 'flex'
    changeStatus.style.top = `${top}px`;
    changeStatus.style.left = `${left}px`; 
    document.body.appendChild(changeStatus);
    
    changeStatus.addEventListener('mouseleave', e => {
        setInterval( function() {changeStatus.remove()}, 500)
    })


    changeStatus.addEventListener('click', e =>{
        if (e.target.classList.contains('change-status-button')){
             console.log(e.target.value);
             modifyStatus(index, `${e.target.value}`)
            //  interactDOM().hide(changeStatus);
            changeStatus.remove()
             displayTasks(todos)  
        }
     })
}