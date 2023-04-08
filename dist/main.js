/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controlPriorityChange.js":
/*!**************************************!*\
  !*** ./src/controlPriorityChange.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlPriorityChange)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");




function controlPriorityChange(element, index, todos){
    
    const buttons = ['low', 'medium', 'high'];
    const { top, left } = element.getBoundingClientRect()
    const changePriority = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().generateListOptions({top, left}, buttons, 'priority')
    
    document.addEventListener('mousedown', e =>{
        changePriority.remove()
        
    })
    
    // changePriority.addEventListener('mouseleave', e => {
    //     setInterval( function() {changePriority.remove()}, 500)
    // })
    changePriority.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-priority-button')){
             console.log(e.target.value);
             (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyPriority)(index, `${e.target.value}`, todos)
            //  interactDOM().hide(changeStatus);
            changePriority.remove()
             ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(todos)  
        }
     })
}

/***/ }),

/***/ "./src/controlStatusChange.js":
/*!************************************!*\
  !*** ./src/controlStatusChange.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlStatusChange)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");




function controlStatusChange(element, index, todos){
    
    const buttons = ['to-do', 'doing', 'done', 'wont do'];
    const { top, left } = element.getBoundingClientRect()

    const changeStatus = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().generateListOptions({top, left}, buttons, 'status')
    // const changeStatus = interactDOM().hookDOMelement('changeStatus')
    // const changeStatus = interactDOM().createElementWithClassAndId('div', 'change-status', 'changeStatus')
    //     buttons.forEach((button) => {
    //       const buttonElement = interactDOM().createElementWithClassAndId('button', 'change-status-button', `${buttons[buttons.indexOf(button)]}#id`)
    //       buttonElement.value = button;
    //       buttonElement.textContent = button;
    //       changeStatus.appendChild(buttonElement);
    //     });
    // // interactDOM().toggleElementDisplay(changeStatus)
    // changeStatus.style.position = 'absolute'
    // changeStatus.style.display = 'flex'
    // changeStatus.style.top = `${top}px`;
    // changeStatus.style.left = `${left}px`; 
    // document.body.appendChild(changeStatus);


    document.addEventListener('mousedown', e =>{
        changeStatus.remove()
        
    })
    
    // changeStatus.addEventListener('mouseleave', e => {
    //     setInterval( function() {changeStatus.remove()}, 500)
    // })


    changeStatus.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-status-button')){
             console.log(e.target.value);
             (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyStatus)(index, `${e.target.value}`, todos)
            //  interactDOM().hide(changeStatus);
            changeStatus.remove()
             ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(todos)  
        }
     })
}

/***/ }),

/***/ "./src/displayTasks.js":
/*!*****************************!*\
  !*** ./src/displayTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");

// import loopTodos from "./loopTodos"

function displayTasks(array){
    const todosView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('todosView')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todos').forEach(e => e.remove())
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('delete-task').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'todos', `todo${i}`)
        let deleteTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'delete-task', `${i}`)
        let checkbox = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('input', 'check-task', `checktask#${i}`)
        checkbox.type = 'checkbox'
        deleteTask.textContent = 'x'
        container.appendChild(checkbox)
        ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendElementAndDefineContent(container, array[i], i)
        todosView.appendChild(container)
        container.appendChild(deleteTask)
    }
}

/***/ }),

/***/ "./src/interactDom.js":
/*!****************************!*\
  !*** ./src/interactDom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const interactDOM = function(){
    const mainContent = document.getElementById('mainContent')


    const createElementWithClassAndId = function(type, className, idName){
        const element = document.createElement(type)
        element.classList.add(`${className}`)
        element.id = `${idName}`
        return element
    }

    const hookDOMelement = function (idName){
        const elem = document.getElementById(`${idName}`)
        return elem
    }

    const returnAllMatchingElements = function(className){
        return document.querySelectorAll(`.${className}`)
    }

    const getInputValue = function(idName){
        return interactDOM().hookDOMelement(idName).value
    }

    const toggleElementDisplay = function(element){
        if(element.style.display == 'flex'){
            element.style.display = 'none'
        } else {
            element.style.display = 'flex'
        }
    }

    const hide = function(element){
        element.style.display = 'none'
    }

    const appendElementAndDefineContent = function (container, obj, index) {
        let task = interactDOM().createElementWithClassAndId('p', 'todo-tasks', `task${index}`)
        let status = interactDOM().createElementWithClassAndId('p', 'todo-status', `status${index}`)
        let list = interactDOM().createElementWithClassAndId('p', 'todo-lists', `list${index}`)
        let priority = interactDOM().createElementWithClassAndId('p', 'todo-priority', `priority${index}`)
        let dueDate = interactDOM().createElementWithClassAndId('p', 'todo-due-date', `dueDate${index}`)
        container.appendChild(task)
        container.appendChild(status)
        container.appendChild(list)
        container.appendChild(priority)
        container.appendChild(dueDate)
        task.textContent = `${obj.task}`
        status.textContent = `${obj.status}`
        list.textContent = `${obj.list}`
        priority.textContent = `${obj.priority}`
        dueDate.textContent = `${obj.dueDate}`
    }


    const generateListOptions = function ({top, left}, array, property){
        
        const element = interactDOM().createElementWithClassAndId('div', `change-${property}`, `change${property}Id`)
        // const buttons = ['to-do', 'doing', 'done', 'wont do'];
        const buttons = array;
        buttons.forEach((button) => {
          const buttonElement = interactDOM().createElementWithClassAndId('button', `change-${property}-button`, `${property}change${buttons.indexOf(button)}#id`)
          buttonElement.value = button;
          buttonElement.textContent = button;
          element.appendChild(buttonElement);
        });
    
   
    element.style.position = 'absolute'
    element.style.display = 'flex'
    element.style.top = `${top}px`;
    element.style.left = `${left}px`; 
    document.body.appendChild(element);

    return element
    }

  
    return { 
        mainContent, 
        createElementWithClassAndId, 
        hookDOMelement, 
        returnAllMatchingElements, 
        getInputValue, 
        appendElementAndDefineContent, 
        toggleElementDisplay,
        hide,
        generateListOptions 
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interactDOM);

/***/ }),

/***/ "./src/todoCreator.js":
/*!****************************!*\
  !*** ./src/todoCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modifyPriority": () => (/* binding */ modifyPriority),
/* harmony export */   "modifyStatus": () => (/* binding */ modifyStatus),
/* harmony export */   "todoCreator": () => (/* binding */ todoCreator)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");



const statusChanger = props => ({
    changeStatus: () => {
        props.status = "OK"
    }
})
const priorityChanger = props => ({
    changePriority: () => {
        props.priority = "LOW"
    }
})

function modifyStatus (index, statusValue, todos) {
    const todo = todoCreator(`${todos[index].task}`, `${statusValue}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    
    todos.splice(index, 1, todo)

    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}

function modifyPriority (index, priorityValue, todos) {
    const todo = todoCreator(`${todos[index].task}`, `${todos[index].status}` , `${todos[index].list}`, `${priorityValue}`, `${todos[index].dueDate}`)
    
    todos.splice(index, 1, todo)

    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}

function todoCreator(task, status, list, priority, dueDate){
    let todo = {
        task,
        status,
        list,
        priority,
        dueDate
    }

    return Object.assign(todo, statusChanger(todo), priorityChanger(todo))
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _controlStatusChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controlStatusChange */ "./src/controlStatusChange.js");
/* harmony import */ var _controlPriorityChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controlPriorityChange */ "./src/controlPriorityChange.js");









const todos = []



const deleteTask = index => {
    todos.splice(index, 1)
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
}


const todo1 = (0,_todoCreator__WEBPACK_IMPORTED_MODULE_3__.todoCreator)('walk with Manchinha', 'to-do', 'daily', 'high', '03/04/2023')
const todo2 = (0,_todoCreator__WEBPACK_IMPORTED_MODULE_3__.todoCreator)('play Ravendawn', 'to-do', 'daily', 'high', '03/04/2023')
const todo3 = (0,_todoCreator__WEBPACK_IMPORTED_MODULE_3__.todoCreator)('study math', 'to-do', 'daily', 'medium', '06/04/2023')

todos.push(todo1)
todos.push(todo2)
todos.push(todo3)
// console.log(todos)


const addTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('addTask')
addTask.addEventListener('click', e =>{
    const newTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('newTask')
    e.preventDefault()
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hide(newTask)
    addTasks()
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
})




const addTasks = function(){
    let task = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('taskInput')
    let status = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('statusInput')
    let list = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('listInput')
    let priority = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('priorityInput')
    let dueDate = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('dueDateInput')
    const todo = (0,_todoCreator__WEBPACK_IMPORTED_MODULE_3__.todoCreator)(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`)
    todos.push(todo)
}



;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)


const todosView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('todosView')


todosView.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-task')) {
        // console.log(e.target.id)
        deleteTask(e.target.id)
        
    } else if (e.target.classList.contains('todo-status')) {
        const index = +`${e.target.id}`.replace("status", "")
        // console.log(index)
        // handleStatusChange (e.target, index)
        ;(0,_controlStatusChange__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, index, todos)
    } else if (e.target.classList.contains('todo-priority')){
        const index = +`${e.target.id}`.replace("priority", "")
        // console.log(index)
        ;(0,_controlPriorityChange__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target, index, todos) 
    } else {
        (0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
    }
});


const openTaskForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('openTaskForm')

const handleNewTaskButton = function (e){
    e.preventDefault()


    const newTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('newTask')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().toggleElementDisplay(newTask)
    
    document.body.addEventListener('mousedown', e => {
        if(!e.target.parentNode.classList.contains('new-task')){
            // console.log(e.target)
            (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hide(newTask)
        }
    })
    

}

openTaskForm.addEventListener('click', e =>{
    handleNewTaskButton(e)
})


const createTaskForm = function (){
    const newTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('form', 'new-task', 'newTask')
    const taskInput = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('input', 'text-input', 'taskInput')
    taskInput.type = 'text'
    taskInput.placeholder = 'Enter a new task!'
    const statusInput = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('select', 'select-input', 'statusInput')
    const status = ['to-do', 'doing', 'done', 'wont do']
    status.forEach(item => {
        const optionElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('option', 'option-input', `status${status.indexOf(item)}`)
        optionElement.value = item
        optionElement.textContent = item
        statusInput.appendChild(optionElement)
    })
    const listInput = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('input', 'text-input', 'listInput')
    listInput.type = 'text'
    listInput.placeholder = 'List'

    const priorityInput = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('select', 'select-input', 'priorityInput')
    const priorities = ['high', 'medium', 'low']
    priorities.forEach(priority => {
        const optionElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('option', 'option-input', `priority${priorities.indexOf(priority)}`)
        optionElement.value = priority
        optionElement.textContent = priority
        priorityInput.appendChild(optionElement)
    })
    const dueDateInput = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('input', 'text-input', 'dueDateInput')
    dueDateInput.type = 'text'
    dueDateInput.placeholder = 'due date'
    const addTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('button', 'add-task', 'addTask')
    addTask.type = 'submit'
    addTask.textContent = 'Save'

    newTask.appendChild(taskInput)
    newTask.appendChild(statusInput)
    newTask.appendChild(listInput)
    newTask.appendChild(priorityInput)
    newTask.appendChild(dueDateInput)
    newTask.appendChild(addTask)
   

    
addTask.addEventListener('click', e =>{
    e.preventDefault()
    addTasks()
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
})


    return newTask
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qix3REFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFZO0FBQ2hCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz8zNTk3Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sUHJpb3JpdHlDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xTdGF0dXNDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJhY3REb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9DcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIjtcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuaW1wb3J0IHsgbW9kaWZ5UHJpb3JpdHkgfSAgZnJvbSBcIi4vdG9kb0NyZWF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xQcmlvcml0eUNoYW5nZShlbGVtZW50LCBpbmRleCwgdG9kb3Mpe1xyXG4gICAgXHJcbiAgICBjb25zdCBidXR0b25zID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXTtcclxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IGludGVyYWN0RE9NKCkuZ2VuZXJhdGVMaXN0T3B0aW9ucyh7dG9wLCBsZWZ0fSwgYnV0dG9ucywgJ3ByaW9yaXR5JylcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBjaGFuZ2VQcmlvcml0eS5yZW1vdmUoKVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gY2hhbmdlUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xyXG4gICAgLy8gICAgIHNldEludGVydmFsKCBmdW5jdGlvbigpIHtjaGFuZ2VQcmlvcml0eS5yZW1vdmUoKX0sIDUwMClcclxuICAgIC8vIH0pXHJcbiAgICBjaGFuZ2VQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoYW5nZS1wcmlvcml0eS1idXR0b24nKSl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICBtb2RpZnlQcmlvcml0eShpbmRleCwgYCR7ZS50YXJnZXQudmFsdWV9YCwgdG9kb3MpXHJcbiAgICAgICAgICAgIC8vICBpbnRlcmFjdERPTSgpLmhpZGUoY2hhbmdlU3RhdHVzKTtcclxuICAgICAgICAgICAgY2hhbmdlUHJpb3JpdHkucmVtb3ZlKClcclxuICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyh0b2RvcykgIFxyXG4gICAgICAgIH1cclxuICAgICB9KVxyXG59IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCI7XHJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcbmltcG9ydCB7IG1vZGlmeVN0YXR1cyB9ICBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbFN0YXR1c0NoYW5nZShlbGVtZW50LCBpbmRleCwgdG9kb3Mpe1xyXG4gICAgXHJcbiAgICBjb25zdCBidXR0b25zID0gWyd0by1kbycsICdkb2luZycsICdkb25lJywgJ3dvbnQgZG8nXTtcclxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gaW50ZXJhY3RET00oKS5nZW5lcmF0ZUxpc3RPcHRpb25zKHt0b3AsIGxlZnR9LCBidXR0b25zLCAnc3RhdHVzJylcclxuICAgIC8vIGNvbnN0IGNoYW5nZVN0YXR1cyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2NoYW5nZVN0YXR1cycpXHJcbiAgICAvLyBjb25zdCBjaGFuZ2VTdGF0dXMgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2NoYW5nZS1zdGF0dXMnLCAnY2hhbmdlU3RhdHVzJylcclxuICAgIC8vICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgLy8gICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY2hhbmdlLXN0YXR1cy1idXR0b24nLCBgJHtidXR0b25zW2J1dHRvbnMuaW5kZXhPZihidXR0b24pXX0jaWRgKVxyXG4gICAgLy8gICAgICAgYnV0dG9uRWxlbWVudC52YWx1ZSA9IGJ1dHRvbjtcclxuICAgIC8vICAgICAgIGJ1dHRvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBidXR0b247XHJcbiAgICAvLyAgICAgICBjaGFuZ2VTdGF0dXMuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAvLyBpbnRlcmFjdERPTSgpLnRvZ2dsZUVsZW1lbnREaXNwbGF5KGNoYW5nZVN0YXR1cylcclxuICAgIC8vIGNoYW5nZVN0YXR1cy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgIC8vIGNoYW5nZVN0YXR1cy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcclxuICAgIC8vIGNoYW5nZVN0YXR1cy5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7IFxyXG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjaGFuZ2VTdGF0dXMpO1xyXG5cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGNoYW5nZVN0YXR1cy5yZW1vdmUoKVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gY2hhbmdlU3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgIC8vICAgICBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7Y2hhbmdlU3RhdHVzLnJlbW92ZSgpfSwgNTAwKVxyXG4gICAgLy8gfSlcclxuXHJcblxyXG4gICAgY2hhbmdlU3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlLXN0YXR1cy1idXR0b24nKSl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICBtb2RpZnlTdGF0dXMoaW5kZXgsIGAke2UudGFyZ2V0LnZhbHVlfWAsIHRvZG9zKVxyXG4gICAgICAgICAgICAvLyAgaW50ZXJhY3RET00oKS5oaWRlKGNoYW5nZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIGNoYW5nZVN0YXR1cy5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgZGlzcGxheVRhc2tzKHRvZG9zKSAgXHJcbiAgICAgICAgfVxyXG4gICAgIH0pXHJcbn0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIlxyXG4vLyBpbXBvcnQgbG9vcFRvZG9zIGZyb20gXCIuL2xvb3BUb2Rvc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5VGFza3MoYXJyYXkpe1xyXG4gICAgY29uc3QgdG9kb3NWaWV3ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgndG9kb3NWaWV3JylcclxuICAgIGludGVyYWN0RE9NKCkucmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cygndG9kb3MnKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSlcclxuICAgIGludGVyYWN0RE9NKCkucmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cygnZGVsZXRlLXRhc2snKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAndG9kb3MnLCBgdG9kbyR7aX1gKVxyXG4gICAgICAgIGxldCBkZWxldGVUYXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdkZWxldGUtdGFzaycsIGAke2l9YClcclxuICAgICAgICBsZXQgY2hlY2tib3ggPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW5wdXQnLCAnY2hlY2stdGFzaycsIGBjaGVja3Rhc2sjJHtpfWApXHJcbiAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcclxuICAgICAgICBkZWxldGVUYXNrLnRleHRDb250ZW50ID0gJ3gnXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KVxyXG4gICAgICAgIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyLCBhcnJheVtpXSwgaSlcclxuICAgICAgICB0b2Rvc1ZpZXcuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKVxyXG4gICAgfVxyXG59IiwiY29uc3QgaW50ZXJhY3RET00gPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKVxyXG5cclxuXHJcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQgPSBmdW5jdGlvbih0eXBlLCBjbGFzc05hbWUsIGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApXHJcbiAgICAgICAgZWxlbWVudC5pZCA9IGAke2lkTmFtZX1gXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBob29rRE9NZWxlbWVudCA9IGZ1bmN0aW9uIChpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZE5hbWV9YClcclxuICAgICAgICByZXR1cm4gZWxlbVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMgPSBmdW5jdGlvbihjbGFzc05hbWUpe1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24oaWROYW1lKXtcclxuICAgICAgICByZXR1cm4gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudChpZE5hbWUpLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRWxlbWVudERpc3BsYXkgPSBmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICBpZihlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnKXtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpZGUgPSBmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudCA9IGZ1bmN0aW9uIChjb250YWluZXIsIG9iaiwgaW5kZXgpIHtcclxuICAgICAgICBsZXQgdGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tdGFza3MnLCBgdGFzayR7aW5kZXh9YClcclxuICAgICAgICBsZXQgc3RhdHVzID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1zdGF0dXMnLCBgc3RhdHVzJHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBsaXN0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1saXN0cycsIGBsaXN0JHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tcHJpb3JpdHknLCBgcHJpb3JpdHkke2luZGV4fWApXHJcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLWR1ZS1kYXRlJywgYGR1ZURhdGUke2luZGV4fWApXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXR1cylcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdClcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpXHJcbiAgICAgICAgdGFzay50ZXh0Q29udGVudCA9IGAke29iai50YXNrfWBcclxuICAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBgJHtvYmouc3RhdHVzfWBcclxuICAgICAgICBsaXN0LnRleHRDb250ZW50ID0gYCR7b2JqLmxpc3R9YFxyXG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7b2JqLnByaW9yaXR5fWBcclxuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7b2JqLmR1ZURhdGV9YFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBnZW5lcmF0ZUxpc3RPcHRpb25zID0gZnVuY3Rpb24gKHt0b3AsIGxlZnR9LCBhcnJheSwgcHJvcGVydHkpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgYGNoYW5nZS0ke3Byb3BlcnR5fWAsIGBjaGFuZ2Uke3Byb3BlcnR5fUlkYClcclxuICAgICAgICAvLyBjb25zdCBidXR0b25zID0gWyd0by1kbycsICdkb2luZycsICdkb25lJywgJ3dvbnQgZG8nXTtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gYXJyYXk7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgYGNoYW5nZS0ke3Byb3BlcnR5fS1idXR0b25gLCBgJHtwcm9wZXJ0eX1jaGFuZ2Uke2J1dHRvbnMuaW5kZXhPZihidXR0b24pfSNpZGApXHJcbiAgICAgICAgICBidXR0b25FbGVtZW50LnZhbHVlID0gYnV0dG9uO1xyXG4gICAgICAgICAgYnV0dG9uRWxlbWVudC50ZXh0Q29udGVudCA9IGJ1dHRvbjtcclxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgXHJcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDsgXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgbWFpbkNvbnRlbnQsIFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCwgXHJcbiAgICAgICAgaG9va0RPTWVsZW1lbnQsIFxyXG4gICAgICAgIHJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMsIFxyXG4gICAgICAgIGdldElucHV0VmFsdWUsIFxyXG4gICAgICAgIGFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50LCBcclxuICAgICAgICB0b2dnbGVFbGVtZW50RGlzcGxheSxcclxuICAgICAgICBoaWRlLFxyXG4gICAgICAgIGdlbmVyYXRlTGlzdE9wdGlvbnMgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0RE9NIiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIlxyXG5cclxuXHJcbmNvbnN0IHN0YXR1c0NoYW5nZXIgPSBwcm9wcyA9PiAoe1xyXG4gICAgY2hhbmdlU3RhdHVzOiAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc3RhdHVzID0gXCJPS1wiXHJcbiAgICB9XHJcbn0pXHJcbmNvbnN0IHByaW9yaXR5Q2hhbmdlciA9IHByb3BzID0+ICh7XHJcbiAgICBjaGFuZ2VQcmlvcml0eTogKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnByaW9yaXR5ID0gXCJMT1dcIlxyXG4gICAgfVxyXG59KVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5U3RhdHVzIChpbmRleCwgc3RhdHVzVmFsdWUsIHRvZG9zKSB7XHJcbiAgICBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dG9kb3NbaW5kZXhdLnRhc2t9YCwgYCR7c3RhdHVzVmFsdWV9YCwgYCR7dG9kb3NbaW5kZXhdLmxpc3R9YCwgYCR7dG9kb3NbaW5kZXhdLnByaW9yaXR5fWAsIGAke3RvZG9zW2luZGV4XS5kdWVEYXRlfWApXHJcbiAgICBcclxuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSwgdG9kbylcclxuXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVByaW9yaXR5IChpbmRleCwgcHJpb3JpdHlWYWx1ZSwgdG9kb3MpIHtcclxuICAgIGNvbnN0IHRvZG8gPSB0b2RvQ3JlYXRvcihgJHt0b2Rvc1tpbmRleF0udGFza31gLCBgJHt0b2Rvc1tpbmRleF0uc3RhdHVzfWAgLCBgJHt0b2Rvc1tpbmRleF0ubGlzdH1gLCBgJHtwcmlvcml0eVZhbHVlfWAsIGAke3RvZG9zW2luZGV4XS5kdWVEYXRlfWApXHJcbiAgICBcclxuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSwgdG9kbylcclxuXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZG9DcmVhdG9yKHRhc2ssIHN0YXR1cywgbGlzdCwgcHJpb3JpdHksIGR1ZURhdGUpe1xyXG4gICAgbGV0IHRvZG8gPSB7XHJcbiAgICAgICAgdGFzayxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgbGlzdCxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBkdWVEYXRlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odG9kbywgc3RhdHVzQ2hhbmdlcih0b2RvKSwgcHJpb3JpdHlDaGFuZ2VyKHRvZG8pKVxyXG59XHJcblxyXG5leHBvcnQgeyBtb2RpZnlTdGF0dXMsIG1vZGlmeVByaW9yaXR5ICx0b2RvQ3JlYXRvcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIlxyXG5pbXBvcnQgeyB0b2RvQ3JlYXRvciB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCJcclxuaW1wb3J0IHsgbW9kaWZ5U3RhdHVzIH0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIlxyXG5pbXBvcnQgY29udHJvbFN0YXR1c0NoYW5nZSBmcm9tIFwiLi9jb250cm9sU3RhdHVzQ2hhbmdlXCJcclxuaW1wb3J0IGNvbnRyb2xQcmlvcml0eUNoYW5nZSBmcm9tIFwiLi9jb250cm9sUHJpb3JpdHlDaGFuZ2VcIlxyXG5cclxuXHJcbmNvbnN0IHRvZG9zID0gW11cclxuXHJcblxyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IGluZGV4ID0+IHtcclxuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSlcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZG8xID0gdG9kb0NyZWF0b3IoJ3dhbGsgd2l0aCBNYW5jaGluaGEnLCAndG8tZG8nLCAnZGFpbHknLCAnaGlnaCcsICcwMy8wNC8yMDIzJylcclxuY29uc3QgdG9kbzIgPSB0b2RvQ3JlYXRvcigncGxheSBSYXZlbmRhd24nLCAndG8tZG8nLCAnZGFpbHknLCAnaGlnaCcsICcwMy8wNC8yMDIzJylcclxuY29uc3QgdG9kbzMgPSB0b2RvQ3JlYXRvcignc3R1ZHkgbWF0aCcsICd0by1kbycsICdkYWlseScsICdtZWRpdW0nLCAnMDYvMDQvMjAyMycpXHJcblxyXG50b2Rvcy5wdXNoKHRvZG8xKVxyXG50b2Rvcy5wdXNoKHRvZG8yKVxyXG50b2Rvcy5wdXNoKHRvZG8zKVxyXG4vLyBjb25zb2xlLmxvZyh0b2RvcylcclxuXHJcblxyXG5jb25zdCBhZGRUYXNrID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnYWRkVGFzaycpXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgY29uc3QgbmV3VGFzayA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ25ld1Rhc2snKVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpbnRlcmFjdERPTSgpLmhpZGUobmV3VGFzaylcclxuICAgIGFkZFRhc2tzKClcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGFkZFRhc2tzID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCB0YXNrID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCd0YXNrSW5wdXQnKVxyXG4gICAgbGV0IHN0YXR1cyA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnc3RhdHVzSW5wdXQnKVxyXG4gICAgbGV0IGxpc3QgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ2xpc3RJbnB1dCcpXHJcbiAgICBsZXQgcHJpb3JpdHkgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ3ByaW9yaXR5SW5wdXQnKVxyXG4gICAgbGV0IGR1ZURhdGUgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ2R1ZURhdGVJbnB1dCcpXHJcbiAgICBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dGFza31gLGAke3N0YXR1c31gLGAke2xpc3R9YCxgJHtwcmlvcml0eX1gLGAke2R1ZURhdGV9YClcclxuICAgIHRvZG9zLnB1c2godG9kbylcclxufVxyXG5cclxuXHJcblxyXG5kaXNwbGF5VGFza3ModG9kb3MpXHJcblxyXG5cclxuY29uc3QgdG9kb3NWaWV3ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgndG9kb3NWaWV3JylcclxuXHJcblxyXG50b2Rvc1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXRhc2snKSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKVxyXG4gICAgICAgIGRlbGV0ZVRhc2soZS50YXJnZXQuaWQpXHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kby1zdGF0dXMnKSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcInN0YXR1c1wiLCBcIlwiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIC8vIGhhbmRsZVN0YXR1c0NoYW5nZSAoZS50YXJnZXQsIGluZGV4KVxyXG4gICAgICAgIGNvbnRyb2xTdGF0dXNDaGFuZ2UoZS50YXJnZXQsIGluZGV4LCB0b2RvcylcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLXByaW9yaXR5Jykpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcInByaW9yaXR5XCIsIFwiXCIpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgY29udHJvbFByaW9yaXR5Q2hhbmdlKGUudGFyZ2V0LCBpbmRleCwgdG9kb3MpIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IG9wZW5UYXNrRm9ybSA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ29wZW5UYXNrRm9ybScpXHJcblxyXG5jb25zdCBoYW5kbGVOZXdUYXNrQnV0dG9uID0gZnVuY3Rpb24gKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdUYXNrJylcclxuICAgIGludGVyYWN0RE9NKCkudG9nZ2xlRWxlbWVudERpc3BsYXkobmV3VGFzaylcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICBpZighZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy10YXNrJykpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICAgICAgaW50ZXJhY3RET00oKS5oaWRlKG5ld1Rhc2spXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG5cclxufVxyXG5cclxub3BlblRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIGhhbmRsZU5ld1Rhc2tCdXR0b24oZSlcclxufSlcclxuXHJcblxyXG5jb25zdCBjcmVhdGVUYXNrRm9ybSA9IGZ1bmN0aW9uICgpe1xyXG4gICAgY29uc3QgbmV3VGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdmb3JtJywgJ25ldy10YXNrJywgJ25ld1Rhc2snKVxyXG4gICAgY29uc3QgdGFza0lucHV0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2lucHV0JywgJ3RleHQtaW5wdXQnLCAndGFza0lucHV0JylcclxuICAgIHRhc2tJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICB0YXNrSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBuZXcgdGFzayEnXHJcbiAgICBjb25zdCBzdGF0dXNJbnB1dCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdzZWxlY3QnLCAnc2VsZWN0LWlucHV0JywgJ3N0YXR1c0lucHV0JylcclxuICAgIGNvbnN0IHN0YXR1cyA9IFsndG8tZG8nLCAnZG9pbmcnLCAnZG9uZScsICd3b250IGRvJ11cclxuICAgIHN0YXR1cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnb3B0aW9uJywgJ29wdGlvbi1pbnB1dCcsIGBzdGF0dXMke3N0YXR1cy5pbmRleE9mKGl0ZW0pfWApXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IGl0ZW1cclxuICAgICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gaXRlbVxyXG4gICAgICAgIHN0YXR1c0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgbGlzdElucHV0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2lucHV0JywgJ3RleHQtaW5wdXQnLCAnbGlzdElucHV0JylcclxuICAgIGxpc3RJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICBsaXN0SW5wdXQucGxhY2Vob2xkZXIgPSAnTGlzdCdcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3NlbGVjdCcsICdzZWxlY3QtaW5wdXQnLCAncHJpb3JpdHlJbnB1dCcpXHJcbiAgICBjb25zdCBwcmlvcml0aWVzID0gWydoaWdoJywgJ21lZGl1bScsICdsb3cnXVxyXG4gICAgcHJpb3JpdGllcy5mb3JFYWNoKHByaW9yaXR5ID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ29wdGlvbicsICdvcHRpb24taW5wdXQnLCBgcHJpb3JpdHkke3ByaW9yaXRpZXMuaW5kZXhPZihwcmlvcml0eSl9YClcclxuICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gcHJpb3JpdHlcclxuICAgICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gcHJpb3JpdHlcclxuICAgICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2lucHV0JywgJ3RleHQtaW5wdXQnLCAnZHVlRGF0ZUlucHV0JylcclxuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICBkdWVEYXRlSW5wdXQucGxhY2Vob2xkZXIgPSAnZHVlIGRhdGUnXHJcbiAgICBjb25zdCBhZGRUYXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdhZGQtdGFzaycsICdhZGRUYXNrJylcclxuICAgIGFkZFRhc2sudHlwZSA9ICdzdWJtaXQnXHJcbiAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJ1NhdmUnXHJcblxyXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpXHJcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHN0YXR1c0lucHV0KVxyXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChsaXN0SW5wdXQpXHJcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpXHJcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dClcclxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoYWRkVGFzaylcclxuICAgXHJcblxyXG4gICAgXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBhZGRUYXNrcygpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn0pXHJcblxyXG5cclxuICAgIHJldHVybiBuZXdUYXNrXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=