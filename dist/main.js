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

/***/ "./src/controlListChange.js":
/*!**********************************!*\
  !*** ./src/controlListChange.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlListChange)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");




function controlListChange(element, index, lists, todos){
    
    const buttons = lists.map( list => list.listName);
    const { top, left } = element.getBoundingClientRect()
    const changeList = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().generateListOptions({top, left}, buttons, 'list')
    
    document.addEventListener('mousedown', e =>{
        changeList.remove()
        
    })
    
    // changePriority.addEventListener('mouseleave', e => {
    //     setInterval( function() {changePriority.remove()}, 500)
    // })
    changeList.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-list-button')){
             console.log(e.target.value);
             (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyList)(index, `${e.target.value}`, todos)
            //  interactDOM().hide(changeStatus);
            changeList.remove()
             ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(todos)  
        }
     })
}

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

/***/ "./src/createList.js":
/*!***************************!*\
  !*** ./src/createList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "modifyList": () => (/* binding */ modifyList)
/* harmony export */ });
/* harmony import */ var _displayLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayLists */ "./src/displayLists.js");


const lists = []


function modifyList (index, listValue, lists) {
    const list = createList(`${listValue}`)
    
    lists.splice(index, 1, list)

    ;(0,_displayLists__WEBPACK_IMPORTED_MODULE_0__["default"])(lists)
}

function createList (listName){
    let list = {
        listName
    }
    return Object.assign({}, list)
}



/***/ }),

/***/ "./src/displayLists.js":
/*!*****************************!*\
  !*** ./src/displayLists.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayLists)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");


function displayLists(array){
    const listsView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('listsView')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('lists').forEach(e => e.remove())
    // interactDOM().returnAllMatchingElements('delete-task').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('section', 'lists', `list${i}`)
        // let checkTask = interactDOM().createElementWithClassAndId('button', 'check-task', `checktask#${i}`)
        // let deleteTask = interactDOM().createElementWithClassAndId('button', 'delete-task', `${i}`)
        // let deleteImage = interactDOM().createElementWithClassAndId('img', 'delete-image', 'deleteImage')
        // deleteImage.src = x
        // deleteTask.appendChild(deleteImage)
        // container.appendChild(checkTask)
        ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendListElementandDefineContent(container, array[i], i)
        listsView.appendChild(container)
        // container.appendChild(deleteTask)
    }
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

    const show = function(element){
        element.style.display = 'flex'
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

    const appendListElementandDefineContent = function(container, obj, index){
        let list = interactDOM().createElementWithClassAndId('p', 'list-item', `list${index}`)
        container.appendChild(list)
        list.textContent = `${obj.listName}`
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
        appendListElementandDefineContent, 
        toggleElementDisplay,
        hide,
        show,
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
/* harmony export */   "modifyList": () => (/* binding */ modifyList),
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

function modifyList (index, listValue, todos) {
    const todo = todoCreator(`${todos[index].task}`, `${todos[index].status}` , `${listValue}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    
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
/* harmony import */ var _controlListChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controlListChange */ "./src/controlListChange.js");
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createList */ "./src/createList.js");
/* harmony import */ var _displayLists__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./displayLists */ "./src/displayLists.js");












const todos = []
const lists = []



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
    } else if (e.target.classList.contains('todo-lists')){
        const index = +`${e.target.id}`.replace("list", "")
        ;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target, index, lists, todos)
    }
    
    else {
        (0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
    }
});


// document.addEventListener('mousedown', e=> {
//     console.log(e.target)
// })


// =========================== add new task functionality, soon will be in a module
const openTaskForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('openTaskForm')
// const addNewTask = interactDOM().hookDOMelement('addNewTask')

const handleNewTaskButton = function (e){
    e.preventDefault()
    const newTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('newTask')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().toggleElementDisplay(newTask)
    document.body.addEventListener('mousedown', e => {
        if(!e.target.parentNode.classList.contains('new-task')){
            // console.log(e.target)
            (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hide(newTask)
            // newTask.remove()
        }
    })
}
openTaskForm.addEventListener('click', e =>{
    handleNewTaskButton(e)
})
// =========================== add new task functionality, soon will be in a module



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
    
    const listInput = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('select', 'select-input', 'listInput')
    const listArray = lists.map( list => list.listName)
    listArray.forEach(item => {
        const optionElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])(). createElementWithClassAndId('option', 'option-input', `list${listArray.indexOf(item)}`)
        optionElement.value = item
        optionElement.textContent = item
        listInput.appendChild(optionElement)
    })
    // listInput.type = 'text'
    // listInput.placeholder = 'List'

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


const list1 = (0,_createList__WEBPACK_IMPORTED_MODULE_7__.createList)('general')
const list2 = (0,_createList__WEBPACK_IMPORTED_MODULE_7__.createList)('Nemo')
const list3 = (0,_createList__WEBPACK_IMPORTED_MODULE_7__.createList)('Project')
lists.push(list1)
lists.push(list2)
lists.push(list3)
console.log(lists.map( list => list.listName))
;(0,_displayLists__WEBPACK_IMPORTED_MODULE_8__["default"])(lists)

const listInput = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('listInput')
const listArray = lists.map( list => list.listName)
    listArray.forEach(item => {
        const optionElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])(). createElementWithClassAndId('option', 'option-input', `list${listArray.indexOf(item)}`)
        optionElement.value = item
        optionElement.textContent = item
        listInput.appendChild(optionElement)
    })


const newList = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('newList')


function handleNewListForm (e){
    e.preventDefault()
    const newListForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('newListForm')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().toggleElementDisplay(newListForm)
    

}

newList.addEventListener('click', e => {
    handleNewListForm(e)
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VztBQUNuQztBQUNBO0FBQ0EsOEJBQThCLHdEQUFXLGtFQUFrRSxxQkFBcUI7QUFDaEk7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0JBQXNCLHdEQUFXO0FBQ2pDO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQVcsaUVBQWlFLHdCQUF3QjtBQUNsSTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdEQUFXO0FBQ3JDO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQVcsb0VBQW9FLDZCQUE2QjtBQUMxSTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUJBQXlCLHdEQUFXO0FBQ3BDO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBWTtBQUNoQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1REFBVTtBQUN4QixjQUFjLHVEQUFVO0FBQ3hCLGNBQWMsdURBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBWTtBQUNaO0FBQ0Esa0JBQWtCLHdEQUFXO0FBQzdCO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQVcsaUVBQWlFLHdCQUF3QjtBQUNsSTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQix3REFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBVztBQUNuQyxJQUFJLHlEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzM1OTciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xMaXN0Q2hhbmdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sUHJpb3JpdHlDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xTdGF0dXNDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlMaXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbnRlcmFjdERvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIjtcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuaW1wb3J0IHsgbW9kaWZ5TGlzdCB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xMaXN0Q2hhbmdlKGVsZW1lbnQsIGluZGV4LCBsaXN0cywgdG9kb3Mpe1xyXG4gICAgXHJcbiAgICBjb25zdCBidXR0b25zID0gbGlzdHMubWFwKCBsaXN0ID0+IGxpc3QubGlzdE5hbWUpO1xyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IGNoYW5nZUxpc3QgPSBpbnRlcmFjdERPTSgpLmdlbmVyYXRlTGlzdE9wdGlvbnMoe3RvcCwgbGVmdH0sIGJ1dHRvbnMsICdsaXN0JylcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBjaGFuZ2VMaXN0LnJlbW92ZSgpXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBjaGFuZ2VQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICAvLyAgICAgc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge2NoYW5nZVByaW9yaXR5LnJlbW92ZSgpfSwgNTAwKVxyXG4gICAgLy8gfSlcclxuICAgIGNoYW5nZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UtbGlzdC1idXR0b24nKSl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICBtb2RpZnlMaXN0KGluZGV4LCBgJHtlLnRhcmdldC52YWx1ZX1gLCB0b2RvcylcclxuICAgICAgICAgICAgLy8gIGludGVyYWN0RE9NKCkuaGlkZShjaGFuZ2VTdGF0dXMpO1xyXG4gICAgICAgICAgICBjaGFuZ2VMaXN0LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICBkaXNwbGF5VGFza3ModG9kb3MpICBcclxuICAgICAgICB9XHJcbiAgICAgfSlcclxufSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiO1xyXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5pbXBvcnQgeyBtb2RpZnlQcmlvcml0eSB9ICBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbFByaW9yaXR5Q2hhbmdlKGVsZW1lbnQsIGluZGV4LCB0b2Rvcyl7XHJcbiAgICBcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddO1xyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gaW50ZXJhY3RET00oKS5nZW5lcmF0ZUxpc3RPcHRpb25zKHt0b3AsIGxlZnR9LCBidXR0b25zLCAncHJpb3JpdHknKVxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGNoYW5nZVByaW9yaXR5LnJlbW92ZSgpXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBjaGFuZ2VQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICAvLyAgICAgc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge2NoYW5nZVByaW9yaXR5LnJlbW92ZSgpfSwgNTAwKVxyXG4gICAgLy8gfSlcclxuICAgIGNoYW5nZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlLXByaW9yaXR5LWJ1dHRvbicpKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgIG1vZGlmeVByaW9yaXR5KGluZGV4LCBgJHtlLnRhcmdldC52YWx1ZX1gLCB0b2RvcylcclxuICAgICAgICAgICAgLy8gIGludGVyYWN0RE9NKCkuaGlkZShjaGFuZ2VTdGF0dXMpO1xyXG4gICAgICAgICAgICBjaGFuZ2VQcmlvcml0eS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgZGlzcGxheVRhc2tzKHRvZG9zKSAgXHJcbiAgICAgICAgfVxyXG4gICAgIH0pXHJcbn0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIjtcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuaW1wb3J0IHsgbW9kaWZ5U3RhdHVzIH0gIGZyb20gXCIuL3RvZG9DcmVhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sU3RhdHVzQ2hhbmdlKGVsZW1lbnQsIGluZGV4LCB0b2Rvcyl7XHJcbiAgICBcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBbJ3RvLWRvJywgJ2RvaW5nJywgJ2RvbmUnLCAnd29udCBkbyddO1xyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSBpbnRlcmFjdERPTSgpLmdlbmVyYXRlTGlzdE9wdGlvbnMoe3RvcCwgbGVmdH0sIGJ1dHRvbnMsICdzdGF0dXMnKVxyXG4gICAgLy8gY29uc3QgY2hhbmdlU3RhdHVzID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnY2hhbmdlU3RhdHVzJylcclxuICAgIC8vIGNvbnN0IGNoYW5nZVN0YXR1cyA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY2hhbmdlLXN0YXR1cycsICdjaGFuZ2VTdGF0dXMnKVxyXG4gICAgLy8gICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAvLyAgICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdjaGFuZ2Utc3RhdHVzLWJ1dHRvbicsIGAke2J1dHRvbnNbYnV0dG9ucy5pbmRleE9mKGJ1dHRvbildfSNpZGApXHJcbiAgICAvLyAgICAgICBidXR0b25FbGVtZW50LnZhbHVlID0gYnV0dG9uO1xyXG4gICAgLy8gICAgICAgYnV0dG9uRWxlbWVudC50ZXh0Q29udGVudCA9IGJ1dHRvbjtcclxuICAgIC8vICAgICAgIGNoYW5nZVN0YXR1cy5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIC8vIGludGVyYWN0RE9NKCkudG9nZ2xlRWxlbWVudERpc3BsYXkoY2hhbmdlU3RhdHVzKVxyXG4gICAgLy8gY2hhbmdlU3RhdHVzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgLy8gY2hhbmdlU3RhdHVzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIC8vIGNoYW5nZVN0YXR1cy5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgLy8gY2hhbmdlU3RhdHVzLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDsgXHJcbiAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNoYW5nZVN0YXR1cyk7XHJcblxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgY2hhbmdlU3RhdHVzLnJlbW92ZSgpXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xyXG4gICAgLy8gICAgIHNldEludGVydmFsKCBmdW5jdGlvbigpIHtjaGFuZ2VTdGF0dXMucmVtb3ZlKCl9LCA1MDApXHJcbiAgICAvLyB9KVxyXG5cclxuXHJcbiAgICBjaGFuZ2VTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2Utc3RhdHVzLWJ1dHRvbicpKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgIG1vZGlmeVN0YXR1cyhpbmRleCwgYCR7ZS50YXJnZXQudmFsdWV9YCwgdG9kb3MpXHJcbiAgICAgICAgICAgIC8vICBpbnRlcmFjdERPTSgpLmhpZGUoY2hhbmdlU3RhdHVzKTtcclxuICAgICAgICAgICAgY2hhbmdlU3RhdHVzLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICBkaXNwbGF5VGFza3ModG9kb3MpICBcclxuICAgICAgICB9XHJcbiAgICAgfSlcclxufSIsImltcG9ydCBkaXNwbGF5TGlzdHMgZnJvbSBcIi4vZGlzcGxheUxpc3RzXCJcclxuXHJcbmNvbnN0IGxpc3RzID0gW11cclxuXHJcblxyXG5mdW5jdGlvbiBtb2RpZnlMaXN0IChpbmRleCwgbGlzdFZhbHVlLCBsaXN0cykge1xyXG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZUxpc3QoYCR7bGlzdFZhbHVlfWApXHJcbiAgICBcclxuICAgIGxpc3RzLnNwbGljZShpbmRleCwgMSwgbGlzdClcclxuXHJcbiAgICBkaXNwbGF5TGlzdHMobGlzdHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3QgKGxpc3ROYW1lKXtcclxuICAgIGxldCBsaXN0ID0ge1xyXG4gICAgICAgIGxpc3ROYW1lXHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbGlzdClcclxufVxyXG5cclxuZXhwb3J0IHsgbW9kaWZ5TGlzdCwgY3JlYXRlTGlzdCB9IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlMaXN0cyhhcnJheSl7XHJcbiAgICBjb25zdCBsaXN0c1ZpZXcgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdsaXN0c1ZpZXcnKVxyXG4gICAgaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCdsaXN0cycpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKVxyXG4gICAgLy8gaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCdkZWxldGUtdGFzaycpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3NlY3Rpb24nLCAnbGlzdHMnLCBgbGlzdCR7aX1gKVxyXG4gICAgICAgIC8vIGxldCBjaGVja1Rhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2NoZWNrLXRhc2snLCBgY2hlY2t0YXNrIyR7aX1gKVxyXG4gICAgICAgIC8vIGxldCBkZWxldGVUYXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdkZWxldGUtdGFzaycsIGAke2l9YClcclxuICAgICAgICAvLyBsZXQgZGVsZXRlSW1hZ2UgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW1nJywgJ2RlbGV0ZS1pbWFnZScsICdkZWxldGVJbWFnZScpXHJcbiAgICAgICAgLy8gZGVsZXRlSW1hZ2Uuc3JjID0geFxyXG4gICAgICAgIC8vIGRlbGV0ZVRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2UpXHJcbiAgICAgICAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrVGFzaylcclxuICAgICAgICBpbnRlcmFjdERPTSgpLmFwcGVuZExpc3RFbGVtZW50YW5kRGVmaW5lQ29udGVudChjb250YWluZXIsIGFycmF5W2ldLCBpKVxyXG4gICAgICAgIGxpc3RzVmlldy5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcbiAgICAgICAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIlxyXG4vLyBpbXBvcnQgbG9vcFRvZG9zIGZyb20gXCIuL2xvb3BUb2Rvc1wiXHJcbmltcG9ydCB4IGZyb20gJy4vY3Jvc3NlZC5wbmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5VGFza3MoYXJyYXkpe1xyXG4gICAgY29uc3QgdG9kb3NWaWV3ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgndG9kb3NWaWV3JylcclxuICAgIGludGVyYWN0RE9NKCkucmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cygndG9kb3MnKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSlcclxuICAgIGludGVyYWN0RE9NKCkucmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cygnZGVsZXRlLXRhc2snKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAndG9kb3MnLCBgdG9kbyR7aX1gKVxyXG4gICAgICAgIGxldCBjaGVja1Rhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2NoZWNrLXRhc2snLCBgY2hlY2t0YXNrIyR7aX1gKVxyXG4gICAgICAgIGxldCBkZWxldGVUYXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdkZWxldGUtdGFzaycsIGAke2l9YClcclxuICAgICAgICBsZXQgZGVsZXRlSW1hZ2UgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW1nJywgJ2RlbGV0ZS1pbWFnZScsICdkZWxldGVJbWFnZScpXHJcbiAgICAgICAgZGVsZXRlSW1hZ2Uuc3JjID0geFxyXG4gICAgICAgIGRlbGV0ZVRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2UpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrVGFzaylcclxuICAgICAgICBpbnRlcmFjdERPTSgpLmFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50KGNvbnRhaW5lciwgYXJyYXlbaV0sIGkpXHJcbiAgICAgICAgdG9kb3NWaWV3LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzaylcclxuICAgIH1cclxufSIsImNvbnN0IGludGVyYWN0RE9NID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50JylcclxuXHJcblxyXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkID0gZnVuY3Rpb24odHlwZSwgY2xhc3NOYW1lLCBpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBgJHtpZE5hbWV9YFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG9va0RPTWVsZW1lbnQgPSBmdW5jdGlvbiAoaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWROYW1lfWApXHJcbiAgICAgICAgcmV0dXJuIGVsZW1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzID0gZnVuY3Rpb24oY2xhc3NOYW1lKXtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uKGlkTmFtZSl7XHJcbiAgICAgICAgcmV0dXJuIGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoaWROYW1lKS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUVsZW1lbnREaXNwbGF5ID0gZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgaWYoZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jyl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaWRlID0gZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvdyA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgb2JqLCBpbmRleCkge1xyXG4gICAgICAgIGxldCB0YXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby10YXNrcycsIGB0YXNrJHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBzdGF0dXMgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLXN0YXR1cycsIGBzdGF0dXMke2luZGV4fWApXHJcbiAgICAgICAgbGV0IGxpc3QgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLWxpc3RzJywgYGxpc3Qke2luZGV4fWApXHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1wcmlvcml0eScsIGBwcmlvcml0eSR7aW5kZXh9YClcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tZHVlLWRhdGUnLCBgZHVlRGF0ZSR7aW5kZXh9YClcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzaylcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdHVzKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcclxuICAgICAgICB0YXNrLnRleHRDb250ZW50ID0gYCR7b2JqLnRhc2t9YFxyXG4gICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGAke29iai5zdGF0dXN9YFxyXG4gICAgICAgIGxpc3QudGV4dENvbnRlbnQgPSBgJHtvYmoubGlzdH1gXHJcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHtvYmoucHJpb3JpdHl9YFxyXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtvYmouZHVlRGF0ZX1gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kTGlzdEVsZW1lbnRhbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24oY29udGFpbmVyLCBvYmosIGluZGV4KXtcclxuICAgICAgICBsZXQgbGlzdCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2xpc3QtaXRlbScsIGBsaXN0JHtpbmRleH1gKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KVxyXG4gICAgICAgIGxpc3QudGV4dENvbnRlbnQgPSBgJHtvYmoubGlzdE5hbWV9YFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBnZW5lcmF0ZUxpc3RPcHRpb25zID0gZnVuY3Rpb24gKHt0b3AsIGxlZnR9LCBhcnJheSwgcHJvcGVydHkpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgYGNoYW5nZS0ke3Byb3BlcnR5fWAsIGBjaGFuZ2Uke3Byb3BlcnR5fUlkYClcclxuICAgICAgICAvLyBjb25zdCBidXR0b25zID0gWyd0by1kbycsICdkb2luZycsICdkb25lJywgJ3dvbnQgZG8nXTtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gYXJyYXk7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgYGNoYW5nZS0ke3Byb3BlcnR5fS1idXR0b25gLCBgJHtwcm9wZXJ0eX1jaGFuZ2Uke2J1dHRvbnMuaW5kZXhPZihidXR0b24pfSNpZGApXHJcbiAgICAgICAgICBidXR0b25FbGVtZW50LnZhbHVlID0gYnV0dG9uO1xyXG4gICAgICAgICAgYnV0dG9uRWxlbWVudC50ZXh0Q29udGVudCA9IGJ1dHRvbjtcclxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgXHJcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDsgXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgbWFpbkNvbnRlbnQsIFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCwgXHJcbiAgICAgICAgaG9va0RPTWVsZW1lbnQsIFxyXG4gICAgICAgIHJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMsIFxyXG4gICAgICAgIGdldElucHV0VmFsdWUsIFxyXG4gICAgICAgIGFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50LFxyXG4gICAgICAgIGFwcGVuZExpc3RFbGVtZW50YW5kRGVmaW5lQ29udGVudCwgXHJcbiAgICAgICAgdG9nZ2xlRWxlbWVudERpc3BsYXksXHJcbiAgICAgICAgaGlkZSxcclxuICAgICAgICBzaG93LFxyXG4gICAgICAgIGdlbmVyYXRlTGlzdE9wdGlvbnMgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0RE9NIiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIlxyXG5cclxuXHJcbmNvbnN0IHN0YXR1c0NoYW5nZXIgPSBwcm9wcyA9PiAoe1xyXG4gICAgY2hhbmdlU3RhdHVzOiAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc3RhdHVzID0gXCJPS1wiXHJcbiAgICB9XHJcbn0pXHJcbmNvbnN0IHByaW9yaXR5Q2hhbmdlciA9IHByb3BzID0+ICh7XHJcbiAgICBjaGFuZ2VQcmlvcml0eTogKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnByaW9yaXR5ID0gXCJMT1dcIlxyXG4gICAgfVxyXG59KVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5U3RhdHVzIChpbmRleCwgc3RhdHVzVmFsdWUsIHRvZG9zKSB7XHJcbiAgICBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dG9kb3NbaW5kZXhdLnRhc2t9YCwgYCR7c3RhdHVzVmFsdWV9YCwgYCR7dG9kb3NbaW5kZXhdLmxpc3R9YCwgYCR7dG9kb3NbaW5kZXhdLnByaW9yaXR5fWAsIGAke3RvZG9zW2luZGV4XS5kdWVEYXRlfWApXHJcbiAgICBcclxuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSwgdG9kbylcclxuXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVByaW9yaXR5IChpbmRleCwgcHJpb3JpdHlWYWx1ZSwgdG9kb3MpIHtcclxuICAgIGNvbnN0IHRvZG8gPSB0b2RvQ3JlYXRvcihgJHt0b2Rvc1tpbmRleF0udGFza31gLCBgJHt0b2Rvc1tpbmRleF0uc3RhdHVzfWAgLCBgJHt0b2Rvc1tpbmRleF0ubGlzdH1gLCBgJHtwcmlvcml0eVZhbHVlfWAsIGAke3RvZG9zW2luZGV4XS5kdWVEYXRlfWApXHJcbiAgICBcclxuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSwgdG9kbylcclxuXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUxpc3QgKGluZGV4LCBsaXN0VmFsdWUsIHRvZG9zKSB7XHJcbiAgICBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dG9kb3NbaW5kZXhdLnRhc2t9YCwgYCR7dG9kb3NbaW5kZXhdLnN0YXR1c31gICwgYCR7bGlzdFZhbHVlfWAsIGAke3RvZG9zW2luZGV4XS5wcmlvcml0eX1gLCBgJHt0b2Rvc1tpbmRleF0uZHVlRGF0ZX1gKVxyXG4gICAgXHJcbiAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEsIHRvZG8pXHJcblxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2RvQ3JlYXRvcih0YXNrLCBzdGF0dXMsIGxpc3QsIHByaW9yaXR5LCBkdWVEYXRlKXtcclxuICAgIGxldCB0b2RvID0ge1xyXG4gICAgICAgIHRhc2ssXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGxpc3QsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgZHVlRGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRvZG8sIHN0YXR1c0NoYW5nZXIodG9kbyksIHByaW9yaXR5Q2hhbmdlcih0b2RvKSlcclxufVxyXG5cclxuZXhwb3J0IHsgbW9kaWZ5U3RhdHVzLCBtb2RpZnlQcmlvcml0eSwgbW9kaWZ5TGlzdCwgdG9kb0NyZWF0b3J9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIlxyXG5pbXBvcnQgeyB0b2RvQ3JlYXRvciB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCJcclxuaW1wb3J0IHsgbW9kaWZ5U3RhdHVzIH0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIlxyXG5pbXBvcnQgY29udHJvbFN0YXR1c0NoYW5nZSBmcm9tIFwiLi9jb250cm9sU3RhdHVzQ2hhbmdlXCJcclxuaW1wb3J0IGNvbnRyb2xQcmlvcml0eUNoYW5nZSBmcm9tIFwiLi9jb250cm9sUHJpb3JpdHlDaGFuZ2VcIlxyXG5pbXBvcnQgY29udHJvbExpc3RDaGFuZ2UgZnJvbSBcIi4vY29udHJvbExpc3RDaGFuZ2VcIlxyXG5pbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiXHJcbmltcG9ydCBkaXNwbGF5TGlzdHMgZnJvbSBcIi4vZGlzcGxheUxpc3RzXCJcclxuXHJcblxyXG5jb25zdCB0b2RvcyA9IFtdXHJcbmNvbnN0IGxpc3RzID0gW11cclxuXHJcblxyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IGluZGV4ID0+IHtcclxuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSlcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZG8xID0gdG9kb0NyZWF0b3IoJ3dhbGsgd2l0aCBNYW5jaGluaGEnLCAndG8tZG8nLCAnZGFpbHknLCAnaGlnaCcsICcwMy8wNC8yMDIzJylcclxuY29uc3QgdG9kbzIgPSB0b2RvQ3JlYXRvcigncGxheSBSYXZlbmRhd24nLCAndG8tZG8nLCAnZGFpbHknLCAnaGlnaCcsICcwMy8wNC8yMDIzJylcclxuY29uc3QgdG9kbzMgPSB0b2RvQ3JlYXRvcignc3R1ZHkgbWF0aCcsICd0by1kbycsICdkYWlseScsICdtZWRpdW0nLCAnMDYvMDQvMjAyMycpXHJcblxyXG50b2Rvcy5wdXNoKHRvZG8xKVxyXG50b2Rvcy5wdXNoKHRvZG8yKVxyXG50b2Rvcy5wdXNoKHRvZG8zKVxyXG4vLyBjb25zb2xlLmxvZyh0b2RvcylcclxuXHJcblxyXG5jb25zdCBhZGRUYXNrID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnYWRkVGFzaycpXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgY29uc3QgbmV3VGFzayA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ25ld1Rhc2snKVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpbnRlcmFjdERPTSgpLmhpZGUobmV3VGFzaylcclxuICAgIGFkZFRhc2tzKClcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGFkZFRhc2tzID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCB0YXNrID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCd0YXNrSW5wdXQnKVxyXG4gICAgbGV0IHN0YXR1cyA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnc3RhdHVzSW5wdXQnKVxyXG4gICAgbGV0IGxpc3QgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ2xpc3RJbnB1dCcpXHJcbiAgICBsZXQgcHJpb3JpdHkgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ3ByaW9yaXR5SW5wdXQnKVxyXG4gICAgbGV0IGR1ZURhdGUgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ2R1ZURhdGVJbnB1dCcpXHJcbiAgICBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dGFza31gLGAke3N0YXR1c31gLGAke2xpc3R9YCxgJHtwcmlvcml0eX1gLGAke2R1ZURhdGV9YClcclxuICAgIHRvZG9zLnB1c2godG9kbylcclxufVxyXG5cclxuXHJcblxyXG5kaXNwbGF5VGFza3ModG9kb3MpXHJcblxyXG5cclxuY29uc3QgdG9kb3NWaWV3ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgndG9kb3NWaWV3JylcclxuXHJcblxyXG50b2Rvc1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWltYWdlJykpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5pZClcclxuICAgICAgICBkZWxldGVUYXNrKGUudGFyZ2V0LmlkKVxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tc3RhdHVzJykpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9ICtgJHtlLnRhcmdldC5pZH1gLnJlcGxhY2UoXCJzdGF0dXNcIiwgXCJcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICAvLyBoYW5kbGVTdGF0dXNDaGFuZ2UgKGUudGFyZ2V0LCBpbmRleClcclxuICAgICAgICBjb250cm9sU3RhdHVzQ2hhbmdlKGUudGFyZ2V0LCBpbmRleCwgdG9kb3MpXHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kby1wcmlvcml0eScpKXtcclxuICAgICAgICBjb25zdCBpbmRleCA9ICtgJHtlLnRhcmdldC5pZH1gLnJlcGxhY2UoXCJwcmlvcml0eVwiLCBcIlwiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIGNvbnRyb2xQcmlvcml0eUNoYW5nZShlLnRhcmdldCwgaW5kZXgsIHRvZG9zKSBcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjay10YXNrJykpe1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrZWQnKVxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tbGlzdHMnKSl7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSArYCR7ZS50YXJnZXQuaWR9YC5yZXBsYWNlKFwibGlzdFwiLCBcIlwiKVxyXG4gICAgICAgIGNvbnRyb2xMaXN0Q2hhbmdlKGUudGFyZ2V0LCBpbmRleCwgbGlzdHMsIHRvZG9zKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGU9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuLy8gfSlcclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gYWRkIG5ldyB0YXNrIGZ1bmN0aW9uYWxpdHksIHNvb24gd2lsbCBiZSBpbiBhIG1vZHVsZVxyXG5jb25zdCBvcGVuVGFza0Zvcm0gPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdvcGVuVGFza0Zvcm0nKVxyXG4vLyBjb25zdCBhZGROZXdUYXNrID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnYWRkTmV3VGFzaycpXHJcblxyXG5jb25zdCBoYW5kbGVOZXdUYXNrQnV0dG9uID0gZnVuY3Rpb24gKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBuZXdUYXNrID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbmV3VGFzaycpXHJcbiAgICBpbnRlcmFjdERPTSgpLnRvZ2dsZUVsZW1lbnREaXNwbGF5KG5ld1Rhc2spXHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICAgIGlmKCFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbmV3LXRhc2snKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgICAgICBpbnRlcmFjdERPTSgpLmhpZGUobmV3VGFzaylcclxuICAgICAgICAgICAgLy8gbmV3VGFzay5yZW1vdmUoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxub3BlblRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIGhhbmRsZU5ld1Rhc2tCdXR0b24oZSlcclxufSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IGFkZCBuZXcgdGFzayBmdW5jdGlvbmFsaXR5LCBzb29uIHdpbGwgYmUgaW4gYSBtb2R1bGVcclxuXHJcblxyXG5cclxuY29uc3QgY3JlYXRlVGFza0Zvcm0gPSBmdW5jdGlvbiAoKXtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZm9ybScsICduZXctdGFzaycsICduZXdUYXNrJylcclxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbnB1dCcsICd0ZXh0LWlucHV0JywgJ3Rhc2tJbnB1dCcpXHJcbiAgICB0YXNrSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgdGFza0lucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIGEgbmV3IHRhc2shJ1xyXG4gICAgY29uc3Qgc3RhdHVzSW5wdXQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnc2VsZWN0JywgJ3NlbGVjdC1pbnB1dCcsICdzdGF0dXNJbnB1dCcpXHJcbiAgICBjb25zdCBzdGF0dXMgPSBbJ3RvLWRvJywgJ2RvaW5nJywgJ2RvbmUnLCAnd29udCBkbyddXHJcbiAgICBzdGF0dXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ29wdGlvbicsICdvcHRpb24taW5wdXQnLCBgc3RhdHVzJHtzdGF0dXMuaW5kZXhPZihpdGVtKX1gKVxyXG4gICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBpdGVtXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW1cclxuICAgICAgICBzdGF0dXNJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgbGlzdElucHV0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3NlbGVjdCcsICdzZWxlY3QtaW5wdXQnLCAnbGlzdElucHV0JylcclxuICAgIGNvbnN0IGxpc3RBcnJheSA9IGxpc3RzLm1hcCggbGlzdCA9PiBsaXN0Lmxpc3ROYW1lKVxyXG4gICAgbGlzdEFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnb3B0aW9uJywgJ29wdGlvbi1pbnB1dCcsIGBsaXN0JHtsaXN0QXJyYXkuaW5kZXhPZihpdGVtKX1gKVxyXG4gICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBpdGVtXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW1cclxuICAgICAgICBsaXN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcclxuICAgIH0pXHJcbiAgICAvLyBsaXN0SW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgLy8gbGlzdElucHV0LnBsYWNlaG9sZGVyID0gJ0xpc3QnXHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdzZWxlY3QnLCAnc2VsZWN0LWlucHV0JywgJ3ByaW9yaXR5SW5wdXQnKVxyXG4gICAgY29uc3QgcHJpb3JpdGllcyA9IFsnaGlnaCcsICdtZWRpdW0nLCAnbG93J11cclxuICAgIHByaW9yaXRpZXMuZm9yRWFjaChwcmlvcml0eSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdvcHRpb24nLCAnb3B0aW9uLWlucHV0JywgYHByaW9yaXR5JHtwcmlvcml0aWVzLmluZGV4T2YocHJpb3JpdHkpfWApXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IHByaW9yaXR5XHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHByaW9yaXR5XHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbnB1dCcsICd0ZXh0LWlucHV0JywgJ2R1ZURhdGVJbnB1dCcpXHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgZHVlRGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gJ2R1ZSBkYXRlJ1xyXG4gICAgY29uc3QgYWRkVGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnYWRkLXRhc2snLCAnYWRkVGFzaycpXHJcbiAgICBhZGRUYXNrLnR5cGUgPSAnc3VibWl0J1xyXG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICdTYXZlJ1xyXG5cclxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0lucHV0KVxyXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChzdGF0dXNJbnB1dClcclxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobGlzdElucHV0KVxyXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KVxyXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpXHJcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGFkZFRhc2spXHJcbiAgIFxyXG5cclxuICAgIFxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgYWRkVGFza3MoKVxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59KVxyXG5cclxuXHJcbiAgICByZXR1cm4gbmV3VGFza1xyXG59XHJcblxyXG5cclxuY29uc3QgbGlzdDEgPSBjcmVhdGVMaXN0KCdnZW5lcmFsJylcclxuY29uc3QgbGlzdDIgPSBjcmVhdGVMaXN0KCdOZW1vJylcclxuY29uc3QgbGlzdDMgPSBjcmVhdGVMaXN0KCdQcm9qZWN0JylcclxubGlzdHMucHVzaChsaXN0MSlcclxubGlzdHMucHVzaChsaXN0MilcclxubGlzdHMucHVzaChsaXN0MylcclxuY29uc29sZS5sb2cobGlzdHMubWFwKCBsaXN0ID0+IGxpc3QubGlzdE5hbWUpKVxyXG5kaXNwbGF5TGlzdHMobGlzdHMpXHJcblxyXG5jb25zdCBsaXN0SW5wdXQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdsaXN0SW5wdXQnKVxyXG5jb25zdCBsaXN0QXJyYXkgPSBsaXN0cy5tYXAoIGxpc3QgPT4gbGlzdC5saXN0TmFtZSlcclxuICAgIGxpc3RBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLiBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ29wdGlvbicsICdvcHRpb24taW5wdXQnLCBgbGlzdCR7bGlzdEFycmF5LmluZGV4T2YoaXRlbSl9YClcclxuICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gaXRlbVxyXG4gICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtXHJcbiAgICAgICAgbGlzdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXHJcbiAgICB9KVxyXG5cclxuXHJcbmNvbnN0IG5ld0xpc3QgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdMaXN0JylcclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVOZXdMaXN0Rm9ybSAoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IG5ld0xpc3RGb3JtID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbmV3TGlzdEZvcm0nKVxyXG4gICAgaW50ZXJhY3RET00oKS50b2dnbGVFbGVtZW50RGlzcGxheShuZXdMaXN0Rm9ybSlcclxuICAgIFxyXG5cclxufVxyXG5cclxubmV3TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgaGFuZGxlTmV3TGlzdEZvcm0oZSlcclxufSlcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=