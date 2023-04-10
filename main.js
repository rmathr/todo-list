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
/* harmony import */ var _crossed_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crossed.png */ "./src/crossed.png");

// import loopTodos from "./loopTodos"


function displayTasks(array){
    const todosView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('todosView')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todos').forEach(e => e.remove())
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('delete-task').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'todos', `todo${i}`)
        let checkTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'check-task', `checktask#${i}`)
        let deleteTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'delete-task', `${i}`)
        let deleteImage = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'delete-image', 'deleteImage')
        deleteImage.src = _crossed_png__WEBPACK_IMPORTED_MODULE_1__
        deleteTask.appendChild(deleteImage)
        container.appendChild(checkTask)
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



/***/ }),

/***/ "./src/crossed.png":
/*!*************************!*\
  !*** ./src/crossed.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a91a6cb8bc28dc1d6402.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
    if (e.target.classList.contains('delete-image')) {
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
    } else if (e.target.classList.contains('check-task')){
        e.target.classList.toggle('clicked')
    } 
    
    else {
        (0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
    }
});


const openTaskForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('openTaskForm')

const handleNewTaskButton = function (e){
    e.preventDefault()


    const newTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('newTask')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().toggleElementDisplay(newTask)
    
    document.body.addEventListener('click', e => {
        if(!e.target.parentNode.classList.contains('new-task')){
            // console.log(e.target)
            (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hide(newTask)
        }
    })
    

}

openTaskForm.addEventListener('mousedown', e =>{
    handleNewTaskButton(e)
})


document.addEventListener('click', e=> {
    console.log(e.target)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBVztBQUNuQztBQUNBO0FBQ0EsOEJBQThCLHdEQUFXLGtFQUFrRSxxQkFBcUI7QUFDaEk7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQix3REFBVztBQUNqQztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0RBQVc7QUFDckM7QUFDQTtBQUNBLDhCQUE4Qix3REFBVyxvRUFBb0UsNkJBQTZCO0FBQzFJO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx5QkFBeUIsd0RBQVc7QUFDcEM7QUFDQTtBQUNBLG9CQUFvQix3REFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFZO0FBQ2hCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz8zNTk3Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sUHJpb3JpdHlDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xTdGF0dXNDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJhY3REb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9DcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCI7XHJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcbmltcG9ydCB7IG1vZGlmeVByaW9yaXR5IH0gIGZyb20gXCIuL3RvZG9DcmVhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sUHJpb3JpdHlDaGFuZ2UoZWxlbWVudCwgaW5kZXgsIHRvZG9zKXtcclxuICAgIFxyXG4gICAgY29uc3QgYnV0dG9ucyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XHJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSBpbnRlcmFjdERPTSgpLmdlbmVyYXRlTGlzdE9wdGlvbnMoe3RvcCwgbGVmdH0sIGJ1dHRvbnMsICdwcmlvcml0eScpXHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgY2hhbmdlUHJpb3JpdHkucmVtb3ZlKClcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIGNoYW5nZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgIC8vICAgICBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7Y2hhbmdlUHJpb3JpdHkucmVtb3ZlKCl9LCA1MDApXHJcbiAgICAvLyB9KVxyXG4gICAgY2hhbmdlUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UtcHJpb3JpdHktYnV0dG9uJykpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgbW9kaWZ5UHJpb3JpdHkoaW5kZXgsIGAke2UudGFyZ2V0LnZhbHVlfWAsIHRvZG9zKVxyXG4gICAgICAgICAgICAvLyAgaW50ZXJhY3RET00oKS5oaWRlKGNoYW5nZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICBkaXNwbGF5VGFza3ModG9kb3MpICBcclxuICAgICAgICB9XHJcbiAgICAgfSlcclxufSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiO1xyXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5pbXBvcnQgeyBtb2RpZnlTdGF0dXMgfSAgZnJvbSBcIi4vdG9kb0NyZWF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xTdGF0dXNDaGFuZ2UoZWxlbWVudCwgaW5kZXgsIHRvZG9zKXtcclxuICAgIFxyXG4gICAgY29uc3QgYnV0dG9ucyA9IFsndG8tZG8nLCAnZG9pbmcnLCAnZG9uZScsICd3b250IGRvJ107XHJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVN0YXR1cyA9IGludGVyYWN0RE9NKCkuZ2VuZXJhdGVMaXN0T3B0aW9ucyh7dG9wLCBsZWZ0fSwgYnV0dG9ucywgJ3N0YXR1cycpXHJcbiAgICAvLyBjb25zdCBjaGFuZ2VTdGF0dXMgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdjaGFuZ2VTdGF0dXMnKVxyXG4gICAgLy8gY29uc3QgY2hhbmdlU3RhdHVzID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdjaGFuZ2Utc3RhdHVzJywgJ2NoYW5nZVN0YXR1cycpXHJcbiAgICAvLyAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIC8vICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2NoYW5nZS1zdGF0dXMtYnV0dG9uJywgYCR7YnV0dG9uc1tidXR0b25zLmluZGV4T2YoYnV0dG9uKV19I2lkYClcclxuICAgIC8vICAgICAgIGJ1dHRvbkVsZW1lbnQudmFsdWUgPSBidXR0b247XHJcbiAgICAvLyAgICAgICBidXR0b25FbGVtZW50LnRleHRDb250ZW50ID0gYnV0dG9uO1xyXG4gICAgLy8gICAgICAgY2hhbmdlU3RhdHVzLmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gLy8gaW50ZXJhY3RET00oKS50b2dnbGVFbGVtZW50RGlzcGxheShjaGFuZ2VTdGF0dXMpXHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgLy8gY2hhbmdlU3RhdHVzLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgOyBcclxuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2hhbmdlU3RhdHVzKTtcclxuXHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBjaGFuZ2VTdGF0dXMucmVtb3ZlKClcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIGNoYW5nZVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICAvLyAgICAgc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge2NoYW5nZVN0YXR1cy5yZW1vdmUoKX0sIDUwMClcclxuICAgIC8vIH0pXHJcblxyXG5cclxuICAgIGNoYW5nZVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoYW5nZS1zdGF0dXMtYnV0dG9uJykpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgbW9kaWZ5U3RhdHVzKGluZGV4LCBgJHtlLnRhcmdldC52YWx1ZX1gLCB0b2RvcylcclxuICAgICAgICAgICAgLy8gIGludGVyYWN0RE9NKCkuaGlkZShjaGFuZ2VTdGF0dXMpO1xyXG4gICAgICAgICAgICBjaGFuZ2VTdGF0dXMucmVtb3ZlKClcclxuICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyh0b2RvcykgIFxyXG4gICAgICAgIH1cclxuICAgICB9KVxyXG59IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuLy8gaW1wb3J0IGxvb3BUb2RvcyBmcm9tIFwiLi9sb29wVG9kb3NcIlxyXG5pbXBvcnQgeCBmcm9tICcuL2Nyb3NzZWQucG5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRhc2tzKGFycmF5KXtcclxuICAgIGNvbnN0IHRvZG9zVmlldyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ3RvZG9zVmlldycpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ3RvZG9zJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2RlbGV0ZS10YXNrJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3RvZG9zJywgYHRvZG8ke2l9YClcclxuICAgICAgICBsZXQgY2hlY2tUYXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdjaGVjay10YXNrJywgYGNoZWNrdGFzayMke2l9YClcclxuICAgICAgICBsZXQgZGVsZXRlVGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnZGVsZXRlLXRhc2snLCBgJHtpfWApXHJcbiAgICAgICAgbGV0IGRlbGV0ZUltYWdlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2ltZycsICdkZWxldGUtaW1hZ2UnLCAnZGVsZXRlSW1hZ2UnKVxyXG4gICAgICAgIGRlbGV0ZUltYWdlLnNyYyA9IHhcclxuICAgICAgICBkZWxldGVUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZUltYWdlKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja1Rhc2spXHJcbiAgICAgICAgaW50ZXJhY3RET00oKS5hcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudChjb250YWluZXIsIGFycmF5W2ldLCBpKVxyXG4gICAgICAgIHRvZG9zVmlldy5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spXHJcbiAgICB9XHJcbn0iLCJjb25zdCBpbnRlcmFjdERPTSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpXHJcblxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCA9IGZ1bmN0aW9uKHR5cGUsIGNsYXNzTmFtZSwgaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YClcclxuICAgICAgICBlbGVtZW50LmlkID0gYCR7aWROYW1lfWBcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhvb2tET01lbGVtZW50ID0gZnVuY3Rpb24gKGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkTmFtZX1gKVxyXG4gICAgICAgIHJldHVybiBlbGVtXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldElucHV0VmFsdWUgPSBmdW5jdGlvbihpZE5hbWUpe1xyXG4gICAgICAgIHJldHVybiBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KGlkTmFtZSkudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVFbGVtZW50RGlzcGxheSA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgIGlmKGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpe1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGlkZSA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgb2JqLCBpbmRleCkge1xyXG4gICAgICAgIGxldCB0YXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby10YXNrcycsIGB0YXNrJHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBzdGF0dXMgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLXN0YXR1cycsIGBzdGF0dXMke2luZGV4fWApXHJcbiAgICAgICAgbGV0IGxpc3QgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLWxpc3RzJywgYGxpc3Qke2luZGV4fWApXHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1wcmlvcml0eScsIGBwcmlvcml0eSR7aW5kZXh9YClcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tZHVlLWRhdGUnLCBgZHVlRGF0ZSR7aW5kZXh9YClcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzaylcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdHVzKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcclxuICAgICAgICB0YXNrLnRleHRDb250ZW50ID0gYCR7b2JqLnRhc2t9YFxyXG4gICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGAke29iai5zdGF0dXN9YFxyXG4gICAgICAgIGxpc3QudGV4dENvbnRlbnQgPSBgJHtvYmoubGlzdH1gXHJcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHtvYmoucHJpb3JpdHl9YFxyXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtvYmouZHVlRGF0ZX1gXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGdlbmVyYXRlTGlzdE9wdGlvbnMgPSBmdW5jdGlvbiAoe3RvcCwgbGVmdH0sIGFycmF5LCBwcm9wZXJ0eSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCBgY2hhbmdlLSR7cHJvcGVydHl9YCwgYGNoYW5nZSR7cHJvcGVydHl9SWRgKVxyXG4gICAgICAgIC8vIGNvbnN0IGJ1dHRvbnMgPSBbJ3RvLWRvJywgJ2RvaW5nJywgJ2RvbmUnLCAnd29udCBkbyddO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBhcnJheTtcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCBgY2hhbmdlLSR7cHJvcGVydHl9LWJ1dHRvbmAsIGAke3Byb3BlcnR5fWNoYW5nZSR7YnV0dG9ucy5pbmRleE9mKGJ1dHRvbil9I2lkYClcclxuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQudmFsdWUgPSBidXR0b247XHJcbiAgICAgICAgICBidXR0b25FbGVtZW50LnRleHRDb250ZW50ID0gYnV0dG9uO1xyXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICBcclxuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgOyBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBtYWluQ29udGVudCwgXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkLCBcclxuICAgICAgICBob29rRE9NZWxlbWVudCwgXHJcbiAgICAgICAgcmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cywgXHJcbiAgICAgICAgZ2V0SW5wdXRWYWx1ZSwgXHJcbiAgICAgICAgYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQsIFxyXG4gICAgICAgIHRvZ2dsZUVsZW1lbnREaXNwbGF5LFxyXG4gICAgICAgIGhpZGUsXHJcbiAgICAgICAgZ2VuZXJhdGVMaXN0T3B0aW9ucyBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJhY3RET00iLCJpbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiXHJcblxyXG5cclxuY29uc3Qgc3RhdHVzQ2hhbmdlciA9IHByb3BzID0+ICh7XHJcbiAgICBjaGFuZ2VTdGF0dXM6ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zdGF0dXMgPSBcIk9LXCJcclxuICAgIH1cclxufSlcclxuY29uc3QgcHJpb3JpdHlDaGFuZ2VyID0gcHJvcHMgPT4gKHtcclxuICAgIGNoYW5nZVByaW9yaXR5OiAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMucHJpb3JpdHkgPSBcIkxPV1wiXHJcbiAgICB9XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBtb2RpZnlTdGF0dXMgKGluZGV4LCBzdGF0dXNWYWx1ZSwgdG9kb3MpIHtcclxuICAgIGNvbnN0IHRvZG8gPSB0b2RvQ3JlYXRvcihgJHt0b2Rvc1tpbmRleF0udGFza31gLCBgJHtzdGF0dXNWYWx1ZX1gLCBgJHt0b2Rvc1tpbmRleF0ubGlzdH1gLCBgJHt0b2Rvc1tpbmRleF0ucHJpb3JpdHl9YCwgYCR7dG9kb3NbaW5kZXhdLmR1ZURhdGV9YClcclxuICAgIFxyXG4gICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxLCB0b2RvKVxyXG5cclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5UHJpb3JpdHkgKGluZGV4LCBwcmlvcml0eVZhbHVlLCB0b2Rvcykge1xyXG4gICAgY29uc3QgdG9kbyA9IHRvZG9DcmVhdG9yKGAke3RvZG9zW2luZGV4XS50YXNrfWAsIGAke3RvZG9zW2luZGV4XS5zdGF0dXN9YCAsIGAke3RvZG9zW2luZGV4XS5saXN0fWAsIGAke3ByaW9yaXR5VmFsdWV9YCwgYCR7dG9kb3NbaW5kZXhdLmR1ZURhdGV9YClcclxuICAgIFxyXG4gICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxLCB0b2RvKVxyXG5cclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuZnVuY3Rpb24gdG9kb0NyZWF0b3IodGFzaywgc3RhdHVzLCBsaXN0LCBwcmlvcml0eSwgZHVlRGF0ZSl7XHJcbiAgICBsZXQgdG9kbyA9IHtcclxuICAgICAgICB0YXNrLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBsaXN0LFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGR1ZURhdGVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0b2RvLCBzdGF0dXNDaGFuZ2VyKHRvZG8pLCBwcmlvcml0eUNoYW5nZXIodG9kbykpXHJcbn1cclxuXHJcbmV4cG9ydCB7IG1vZGlmeVN0YXR1cywgbW9kaWZ5UHJpb3JpdHkgLHRvZG9DcmVhdG9yfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCJcclxuaW1wb3J0IHsgdG9kb0NyZWF0b3IgfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiXHJcbmltcG9ydCB7IG1vZGlmeVN0YXR1cyB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCJcclxuaW1wb3J0IGNvbnRyb2xTdGF0dXNDaGFuZ2UgZnJvbSBcIi4vY29udHJvbFN0YXR1c0NoYW5nZVwiXHJcbmltcG9ydCBjb250cm9sUHJpb3JpdHlDaGFuZ2UgZnJvbSBcIi4vY29udHJvbFByaW9yaXR5Q2hhbmdlXCJcclxuXHJcblxyXG5jb25zdCB0b2RvcyA9IFtdXHJcblxyXG5cclxuXHJcbmNvbnN0IGRlbGV0ZVRhc2sgPSBpbmRleCA9PiB7XHJcbiAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcblxyXG5jb25zdCB0b2RvMSA9IHRvZG9DcmVhdG9yKCd3YWxrIHdpdGggTWFuY2hpbmhhJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMDMvMDQvMjAyMycpXHJcbmNvbnN0IHRvZG8yID0gdG9kb0NyZWF0b3IoJ3BsYXkgUmF2ZW5kYXduJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMDMvMDQvMjAyMycpXHJcbmNvbnN0IHRvZG8zID0gdG9kb0NyZWF0b3IoJ3N0dWR5IG1hdGgnLCAndG8tZG8nLCAnZGFpbHknLCAnbWVkaXVtJywgJzA2LzA0LzIwMjMnKVxyXG5cclxudG9kb3MucHVzaCh0b2RvMSlcclxudG9kb3MucHVzaCh0b2RvMilcclxudG9kb3MucHVzaCh0b2RvMylcclxuLy8gY29uc29sZS5sb2codG9kb3MpXHJcblxyXG5cclxuY29uc3QgYWRkVGFzayA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2FkZFRhc2snKVxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdUYXNrJylcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaW50ZXJhY3RET00oKS5oaWRlKG5ld1Rhc2spXHJcbiAgICBhZGRUYXNrcygpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBhZGRUYXNrcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdGFzayA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgndGFza0lucHV0JylcclxuICAgIGxldCBzdGF0dXMgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ3N0YXR1c0lucHV0JylcclxuICAgIGxldCBsaXN0ID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCdsaXN0SW5wdXQnKVxyXG4gICAgbGV0IHByaW9yaXR5ID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCdwcmlvcml0eUlucHV0JylcclxuICAgIGxldCBkdWVEYXRlID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCdkdWVEYXRlSW5wdXQnKVxyXG4gICAgY29uc3QgdG9kbyA9IHRvZG9DcmVhdG9yKGAke3Rhc2t9YCxgJHtzdGF0dXN9YCxgJHtsaXN0fWAsYCR7cHJpb3JpdHl9YCxgJHtkdWVEYXRlfWApXHJcbiAgICB0b2Rvcy5wdXNoKHRvZG8pXHJcbn1cclxuXHJcblxyXG5cclxuZGlzcGxheVRhc2tzKHRvZG9zKVxyXG5cclxuXHJcbmNvbnN0IHRvZG9zVmlldyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ3RvZG9zVmlldycpXHJcblxyXG5cclxudG9kb3NWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1pbWFnZScpKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuaWQpXHJcbiAgICAgICAgZGVsZXRlVGFzayhlLnRhcmdldC5pZClcclxuICAgICAgICBcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLXN0YXR1cycpKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSArYCR7ZS50YXJnZXQuaWR9YC5yZXBsYWNlKFwic3RhdHVzXCIsIFwiXCIpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgLy8gaGFuZGxlU3RhdHVzQ2hhbmdlIChlLnRhcmdldCwgaW5kZXgpXHJcbiAgICAgICAgY29udHJvbFN0YXR1c0NoYW5nZShlLnRhcmdldCwgaW5kZXgsIHRvZG9zKVxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tcHJpb3JpdHknKSl7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSArYCR7ZS50YXJnZXQuaWR9YC5yZXBsYWNlKFwicHJpb3JpdHlcIiwgXCJcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICBjb250cm9sUHJpb3JpdHlDaGFuZ2UoZS50YXJnZXQsIGluZGV4LCB0b2RvcykgXHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2stdGFzaycpKXtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja2VkJylcclxuICAgIH0gXHJcbiAgICBcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuY29uc3Qgb3BlblRhc2tGb3JtID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnb3BlblRhc2tGb3JtJylcclxuXHJcbmNvbnN0IGhhbmRsZU5ld1Rhc2tCdXR0b24gPSBmdW5jdGlvbiAoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcblxyXG4gICAgY29uc3QgbmV3VGFzayA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ25ld1Rhc2snKVxyXG4gICAgaW50ZXJhY3RET00oKS50b2dnbGVFbGVtZW50RGlzcGxheShuZXdUYXNrKVxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctdGFzaycpKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgICAgIGludGVyYWN0RE9NKCkuaGlkZShuZXdUYXNrKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbm9wZW5UYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgaGFuZGxlTmV3VGFza0J1dHRvbihlKVxyXG59KVxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG59KVxyXG5cclxuY29uc3QgY3JlYXRlVGFza0Zvcm0gPSBmdW5jdGlvbiAoKXtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZm9ybScsICduZXctdGFzaycsICduZXdUYXNrJylcclxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbnB1dCcsICd0ZXh0LWlucHV0JywgJ3Rhc2tJbnB1dCcpXHJcbiAgICB0YXNrSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgdGFza0lucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIGEgbmV3IHRhc2shJ1xyXG4gICAgY29uc3Qgc3RhdHVzSW5wdXQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnc2VsZWN0JywgJ3NlbGVjdC1pbnB1dCcsICdzdGF0dXNJbnB1dCcpXHJcbiAgICBjb25zdCBzdGF0dXMgPSBbJ3RvLWRvJywgJ2RvaW5nJywgJ2RvbmUnLCAnd29udCBkbyddXHJcbiAgICBzdGF0dXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ29wdGlvbicsICdvcHRpb24taW5wdXQnLCBgc3RhdHVzJHtzdGF0dXMuaW5kZXhPZihpdGVtKX1gKVxyXG4gICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBpdGVtXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW1cclxuICAgICAgICBzdGF0dXNJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGxpc3RJbnB1dCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbnB1dCcsICd0ZXh0LWlucHV0JywgJ2xpc3RJbnB1dCcpXHJcbiAgICBsaXN0SW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgbGlzdElucHV0LnBsYWNlaG9sZGVyID0gJ0xpc3QnXHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdzZWxlY3QnLCAnc2VsZWN0LWlucHV0JywgJ3ByaW9yaXR5SW5wdXQnKVxyXG4gICAgY29uc3QgcHJpb3JpdGllcyA9IFsnaGlnaCcsICdtZWRpdW0nLCAnbG93J11cclxuICAgIHByaW9yaXRpZXMuZm9yRWFjaChwcmlvcml0eSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdvcHRpb24nLCAnb3B0aW9uLWlucHV0JywgYHByaW9yaXR5JHtwcmlvcml0aWVzLmluZGV4T2YocHJpb3JpdHkpfWApXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IHByaW9yaXR5XHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHByaW9yaXR5XHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbnB1dCcsICd0ZXh0LWlucHV0JywgJ2R1ZURhdGVJbnB1dCcpXHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgZHVlRGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gJ2R1ZSBkYXRlJ1xyXG4gICAgY29uc3QgYWRkVGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnYWRkLXRhc2snLCAnYWRkVGFzaycpXHJcbiAgICBhZGRUYXNrLnR5cGUgPSAnc3VibWl0J1xyXG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICdTYXZlJ1xyXG5cclxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0lucHV0KVxyXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChzdGF0dXNJbnB1dClcclxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobGlzdElucHV0KVxyXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KVxyXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpXHJcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGFkZFRhc2spXHJcbiAgIFxyXG5cclxuICAgIFxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgYWRkVGFza3MoKVxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59KVxyXG5cclxuXHJcbiAgICByZXR1cm4gbmV3VGFza1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9