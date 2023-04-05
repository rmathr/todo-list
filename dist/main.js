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
        deleteTask.textContent = 'x'
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

    const toggleElementDisplay = function(element, display){
        if(element.style.display === 'none'){
            element.style.display = `${display}`
        } else {
            element.style.display = 'none'
        }
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

  
    return { 
        mainContent, 
        createElementWithClassAndId, 
        hookDOMelement, 
        returnAllMatchingElements, 
        getInputValue, 
        appendElementAndDefineContent, 
        toggleElementDisplay 
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interactDOM);

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





const todos = []


const deleteTask = index => {
    todos.splice(index, 1)
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
}

const changeStatus = function (index, statusValue) {
    const todo = todoCreator(`${todos[index].task}`, `${statusValue}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    
    todos.splice(index, 1, todo)

    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
}



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

const todo1 = todoCreator('walk with Manchinha', 'to-do', 'daily', 'high', '03/04/2023')
const todo2 = todoCreator('play Ravendawn', 'to-do', 'daily', 'high', '03/04/2023')
const todo3 = todoCreator('study math', 'to-do', 'daily', 'medium', '06/04/2023')

todos.push(todo1)
todos.push(todo2)
todos.push(todo3)
// console.log(todos)


const addTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('addTask')
addTask.addEventListener('click', e =>{
    e.preventDefault()
    addTasks()
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
})




const addTasks = function(){
    let task = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('taskInput')
    let status = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('statusInput')
    let list = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('listInput')
    let priority = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('priorityInput')
    let dueDate = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('dueDateInput')
    const todo = todoCreator(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`)
    todos.push(todo)
}



;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)


const todosView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('todosView')

// const statusChange = interactDOM().hookDOMelement('statusChange')



function controlStatusChange(element, index){
    const changeStatus = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('changeStatus')
    const { top, left } = element.getBoundingClientRect();
    (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().toggleElementDisplay(changeStatus, 'flex')
    changeStatus.style.top = `${top}px`;
    changeStatus.style.left = `${left}px`; 
    const buttons = document.querySelectorAll('div#changeStatus > button')
    buttons.forEach(button => 
        button.addEventListener('click', e => {
            e.preventDefault()
            console.log(e.target.value)
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().toggleElementDisplay(changeStatus, 'flex')

        })
        )
}



function handleStatusChange (element, index){
    const { top, left } = element.getBoundingClientRect();
    
    const changeValue = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('select', 'change-value', 'changeValue')
    const options = ['select','to-do', 'doing', 'done', 'wont do'];
        options.forEach((option) => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.textContent = option;
          changeValue.appendChild(optionElement);
        });
        const firstOption = changeValue.firstChild
        firstOption.selected = true
        firstOption.disabled = true
        firstOption.hidden = true

        changeValue.style.position = 'absolute';
        changeValue.style.top = `${top}px`;
        changeValue.style.left = `${left}px`;
        changeValue.addEventListener('click', e => {
            console.log(changeValue.size)
            changeValue.addEventListener('change', (event) => {    
                changeStatus(index, `${event.target.value}`)
                changeValue.remove(); 
            })
            document.body.addEventListener('click', e =>{
                if(changeValue.size > 0){
                    console.log("?")
                    changeValue.remove()
                }
            })
            
        })
   
    document.body.appendChild(changeValue);
    
    
}




todosView.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-task')) {
        console.log(e.target.id)
        deleteTask(e.target.id)
        
    } else if (e.target.classList.contains('todo-status')) {
        let index = +`${e.target.id}`.replace("status", "")
        console.log(index)
        // handleStatusChange (e.target, index)
        controlStatusChange(e.target, index)
    } else {
        (0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
    }
});

// const { top, left } = e.target.getBoundingClientRect();

//         // Create a select element
//         const select = document.createElement('select');
    
//         // Create options for the select element
//         const options = ['to-do', 'doing', 'done', 'wont do'];
//         options.forEach((option) => {
//           const optionElement = document.createElement('option');
//           optionElement.value = option;
//           optionElement.textContent = option;
//           select.appendChild(optionElement);
//         });
    
//         // Position the select element where the clicked element is
//         select.style.position = 'absolute';
//         select.style.top = `${top}px`;
//         select.style.left = `${left}px`;
    

//         select.addEventListener('click', e =>{
//             if(window.onclick){
//                 select.remove()
//             }
//         })

//         // Add a change event listener to update the clicked element text
//         select.addEventListener('change', (event) => {
//           e.target.textContent = event.target.value;
//           select.remove(); // remove the select element after the selection is made
//         });
    
//         // Append the select element to the body
//         document.body.appendChild(select);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFlBQVk7QUFDeEIsSUFBSSx3REFBVztBQUNmLGdDQUFnQyxJQUFJO0FBQ3BDLGlDQUFpQyxLQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUFXO0FBQ3ZCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksWUFBWTtBQUN4QjtBQUNBLHdCQUF3Qix3REFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLElBQUk7QUFDdkMsb0NBQW9DLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1CQUFtQjtBQUMxRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFFBQVEseURBQVk7QUFDcEI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxXQUFXLFlBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsSUFBSTtBQUNyQyxrQ0FBa0MsS0FBSztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsWUFBWTtBQUNaO0FBQ0E7QUFDQSw2QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/MzU5NyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbnRlcmFjdERvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuLy8gaW1wb3J0IGxvb3BUb2RvcyBmcm9tIFwiLi9sb29wVG9kb3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRhc2tzKGFycmF5KXtcclxuICAgIGNvbnN0IHRvZG9zVmlldyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ3RvZG9zVmlldycpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ3RvZG9zJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2RlbGV0ZS10YXNrJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3RvZG9zJywgYHRvZG8ke2l9YClcclxuICAgICAgICBsZXQgZGVsZXRlVGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnZGVsZXRlLXRhc2snLCBgJHtpfWApXHJcbiAgICAgICAgZGVsZXRlVGFzay50ZXh0Q29udGVudCA9ICd4J1xyXG4gICAgICAgIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyLCBhcnJheVtpXSwgaSlcclxuICAgICAgICB0b2Rvc1ZpZXcuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKVxyXG4gICAgfVxyXG59IiwiY29uc3QgaW50ZXJhY3RET00gPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKVxyXG5cclxuXHJcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQgPSBmdW5jdGlvbih0eXBlLCBjbGFzc05hbWUsIGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApXHJcbiAgICAgICAgZWxlbWVudC5pZCA9IGAke2lkTmFtZX1gXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBob29rRE9NZWxlbWVudCA9IGZ1bmN0aW9uIChpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZE5hbWV9YClcclxuICAgICAgICByZXR1cm4gZWxlbVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMgPSBmdW5jdGlvbihjbGFzc05hbWUpe1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24oaWROYW1lKXtcclxuICAgICAgICByZXR1cm4gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudChpZE5hbWUpLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRWxlbWVudERpc3BsYXkgPSBmdW5jdGlvbihlbGVtZW50LCBkaXNwbGF5KXtcclxuICAgICAgICBpZihlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGAke2Rpc3BsYXl9YFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudCA9IGZ1bmN0aW9uIChjb250YWluZXIsIG9iaiwgaW5kZXgpIHtcclxuICAgICAgICBsZXQgdGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tdGFza3MnLCBgdGFzayR7aW5kZXh9YClcclxuICAgICAgICBsZXQgc3RhdHVzID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1zdGF0dXMnLCBgc3RhdHVzJHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBsaXN0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1saXN0cycsIGBsaXN0JHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tcHJpb3JpdHknLCBgcHJpb3JpdHkke2luZGV4fWApXHJcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLWR1ZS1kYXRlJywgYGR1ZURhdGUke2luZGV4fWApXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXR1cylcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdClcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpXHJcbiAgICAgICAgdGFzay50ZXh0Q29udGVudCA9IGAke29iai50YXNrfWBcclxuICAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBgJHtvYmouc3RhdHVzfWBcclxuICAgICAgICBsaXN0LnRleHRDb250ZW50ID0gYCR7b2JqLmxpc3R9YFxyXG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7b2JqLnByaW9yaXR5fWBcclxuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7b2JqLmR1ZURhdGV9YFxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIG1haW5Db250ZW50LCBcclxuICAgICAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQsIFxyXG4gICAgICAgIGhvb2tET01lbGVtZW50LCBcclxuICAgICAgICByZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzLCBcclxuICAgICAgICBnZXRJbnB1dFZhbHVlLCBcclxuICAgICAgICBhcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudCwgXHJcbiAgICAgICAgdG9nZ2xlRWxlbWVudERpc3BsYXkgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0RE9NIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCJcclxuXHJcblxyXG5jb25zdCB0b2RvcyA9IFtdXHJcblxyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IGluZGV4ID0+IHtcclxuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSlcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuY29uc3QgY2hhbmdlU3RhdHVzID0gZnVuY3Rpb24gKGluZGV4LCBzdGF0dXNWYWx1ZSkge1xyXG4gICAgY29uc3QgdG9kbyA9IHRvZG9DcmVhdG9yKGAke3RvZG9zW2luZGV4XS50YXNrfWAsIGAke3N0YXR1c1ZhbHVlfWAsIGAke3RvZG9zW2luZGV4XS5saXN0fWAsIGAke3RvZG9zW2luZGV4XS5wcmlvcml0eX1gLCBgJHt0b2Rvc1tpbmRleF0uZHVlRGF0ZX1gKVxyXG4gICAgXHJcbiAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEsIHRvZG8pXHJcblxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHN0YXR1c0NoYW5nZXIgPSBwcm9wcyA9PiAoe1xyXG4gICAgY2hhbmdlU3RhdHVzOiAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc3RhdHVzID0gXCJPS1wiXHJcbiAgICB9XHJcbn0pXHJcbmNvbnN0IHByaW9yaXR5Q2hhbmdlciA9IHByb3BzID0+ICh7XHJcbiAgICBjaGFuZ2VQcmlvcml0eTogKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnByaW9yaXR5ID0gXCJMT1dcIlxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZG9DcmVhdG9yKHRhc2ssIHN0YXR1cywgbGlzdCwgcHJpb3JpdHksIGR1ZURhdGUpe1xyXG4gICAgbGV0IHRvZG8gPSB7XHJcbiAgICAgICAgdGFzayxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgbGlzdCxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBkdWVEYXRlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odG9kbywgc3RhdHVzQ2hhbmdlcih0b2RvKSwgcHJpb3JpdHlDaGFuZ2VyKHRvZG8pKVxyXG59XHJcblxyXG5jb25zdCB0b2RvMSA9IHRvZG9DcmVhdG9yKCd3YWxrIHdpdGggTWFuY2hpbmhhJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMDMvMDQvMjAyMycpXHJcbmNvbnN0IHRvZG8yID0gdG9kb0NyZWF0b3IoJ3BsYXkgUmF2ZW5kYXduJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMDMvMDQvMjAyMycpXHJcbmNvbnN0IHRvZG8zID0gdG9kb0NyZWF0b3IoJ3N0dWR5IG1hdGgnLCAndG8tZG8nLCAnZGFpbHknLCAnbWVkaXVtJywgJzA2LzA0LzIwMjMnKVxyXG5cclxudG9kb3MucHVzaCh0b2RvMSlcclxudG9kb3MucHVzaCh0b2RvMilcclxudG9kb3MucHVzaCh0b2RvMylcclxuLy8gY29uc29sZS5sb2codG9kb3MpXHJcblxyXG5cclxuY29uc3QgYWRkVGFzayA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2FkZFRhc2snKVxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgYWRkVGFza3MoKVxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgYWRkVGFza3MgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHRhc2sgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ3Rhc2tJbnB1dCcpXHJcbiAgICBsZXQgc3RhdHVzID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCdzdGF0dXNJbnB1dCcpXHJcbiAgICBsZXQgbGlzdCA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnbGlzdElucHV0JylcclxuICAgIGxldCBwcmlvcml0eSA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgncHJpb3JpdHlJbnB1dCcpXHJcbiAgICBsZXQgZHVlRGF0ZSA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnZHVlRGF0ZUlucHV0JylcclxuICAgIGNvbnN0IHRvZG8gPSB0b2RvQ3JlYXRvcihgJHt0YXNrfWAsYCR7c3RhdHVzfWAsYCR7bGlzdH1gLGAke3ByaW9yaXR5fWAsYCR7ZHVlRGF0ZX1gKVxyXG4gICAgdG9kb3MucHVzaCh0b2RvKVxyXG59XHJcblxyXG5cclxuXHJcbmRpc3BsYXlUYXNrcyh0b2RvcylcclxuXHJcblxyXG5jb25zdCB0b2Rvc1ZpZXcgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCd0b2Rvc1ZpZXcnKVxyXG5cclxuLy8gY29uc3Qgc3RhdHVzQ2hhbmdlID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnc3RhdHVzQ2hhbmdlJylcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udHJvbFN0YXR1c0NoYW5nZShlbGVtZW50LCBpbmRleCl7XHJcbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdjaGFuZ2VTdGF0dXMnKVxyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpbnRlcmFjdERPTSgpLnRvZ2dsZUVsZW1lbnREaXNwbGF5KGNoYW5nZVN0YXR1cywgJ2ZsZXgnKVxyXG4gICAgY2hhbmdlU3RhdHVzLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICBjaGFuZ2VTdGF0dXMuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgOyBcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYjY2hhbmdlU3RhdHVzID4gYnV0dG9uJylcclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgaW50ZXJhY3RET00oKS50b2dnbGVFbGVtZW50RGlzcGxheShjaGFuZ2VTdGF0dXMsICdmbGV4JylcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU3RhdHVzQ2hhbmdlIChlbGVtZW50LCBpbmRleCl7XHJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIFxyXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnc2VsZWN0JywgJ2NoYW5nZS12YWx1ZScsICdjaGFuZ2VWYWx1ZScpXHJcbiAgICBjb25zdCBvcHRpb25zID0gWydzZWxlY3QnLCd0by1kbycsICdkb2luZycsICdkb25lJywgJ3dvbnQgZG8nXTtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcclxuICAgICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb247XHJcbiAgICAgICAgICBjaGFuZ2VWYWx1ZS5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBmaXJzdE9wdGlvbiA9IGNoYW5nZVZhbHVlLmZpcnN0Q2hpbGRcclxuICAgICAgICBmaXJzdE9wdGlvbi5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICBmaXJzdE9wdGlvbi5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICBmaXJzdE9wdGlvbi5oaWRkZW4gPSB0cnVlXHJcblxyXG4gICAgICAgIGNoYW5nZVZhbHVlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBjaGFuZ2VWYWx1ZS5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgICAgIGNoYW5nZVZhbHVlLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcclxuICAgICAgICBjaGFuZ2VWYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFuZ2VWYWx1ZS5zaXplKVxyXG4gICAgICAgICAgICBjaGFuZ2VWYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHsgICAgXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VTdGF0dXMoaW5kZXgsIGAke2V2ZW50LnRhcmdldC52YWx1ZX1gKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlVmFsdWUucmVtb3ZlKCk7IFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICAgICAgICAgIGlmKGNoYW5nZVZhbHVlLnNpemUgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj9cIilcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VWYWx1ZS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2hhbmdlVmFsdWUpO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxudG9kb3NWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS10YXNrJykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZClcclxuICAgICAgICBkZWxldGVUYXNrKGUudGFyZ2V0LmlkKVxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tc3RhdHVzJykpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSArYCR7ZS50YXJnZXQuaWR9YC5yZXBsYWNlKFwic3RhdHVzXCIsIFwiXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgLy8gaGFuZGxlU3RhdHVzQ2hhbmdlIChlLnRhcmdldCwgaW5kZXgpXHJcbiAgICAgICAgY29udHJvbFN0YXR1c0NoYW5nZShlLnRhcmdldCwgaW5kZXgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4vLyAgICAgICAgIC8vIENyZWF0ZSBhIHNlbGVjdCBlbGVtZW50XHJcbi8vICAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBcclxuLy8gICAgICAgICAvLyBDcmVhdGUgb3B0aW9ucyBmb3IgdGhlIHNlbGVjdCBlbGVtZW50XHJcbi8vICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFsndG8tZG8nLCAnZG9pbmcnLCAnZG9uZScsICd3b250IGRvJ107XHJcbi8vICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuLy8gICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuLy8gICAgICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb247XHJcbi8vICAgICAgICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG4vLyAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4gICAgXHJcbi8vICAgICAgICAgLy8gUG9zaXRpb24gdGhlIHNlbGVjdCBlbGVtZW50IHdoZXJlIHRoZSBjbGlja2VkIGVsZW1lbnQgaXNcclxuLy8gICAgICAgICBzZWxlY3Quc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4vLyAgICAgICAgIHNlbGVjdC5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4vLyAgICAgICAgIHNlbGVjdC5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XHJcbiAgICBcclxuXHJcbi8vICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuLy8gICAgICAgICAgICAgaWYod2luZG93Lm9uY2xpY2spe1xyXG4vLyAgICAgICAgICAgICAgICAgc2VsZWN0LnJlbW92ZSgpXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9KVxyXG5cclxuLy8gICAgICAgICAvLyBBZGQgYSBjaGFuZ2UgZXZlbnQgbGlzdGVuZXIgdG8gdXBkYXRlIHRoZSBjbGlja2VkIGVsZW1lbnQgdGV4dFxyXG4vLyAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuLy8gICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4vLyAgICAgICAgICAgc2VsZWN0LnJlbW92ZSgpOyAvLyByZW1vdmUgdGhlIHNlbGVjdCBlbGVtZW50IGFmdGVyIHRoZSBzZWxlY3Rpb24gaXMgbWFkZVxyXG4vLyAgICAgICAgIH0pO1xyXG4gICAgXHJcbi8vICAgICAgICAgLy8gQXBwZW5kIHRoZSBzZWxlY3QgZWxlbWVudCB0byB0aGUgYm9keVxyXG4vLyAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VsZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=