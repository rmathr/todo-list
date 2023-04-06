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

  
    return { 
        mainContent, 
        createElementWithClassAndId, 
        hookDOMelement, 
        returnAllMatchingElements, 
        getInputValue, 
        appendElementAndDefineContent, 
        toggleElementDisplay,
        hide 
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

const modifyStatus = function (index, statusValue) {
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
    // const changeStatus = interactDOM().hookDOMelement('changeStatus')
    const changeStatus = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('div', 'change-status', 'changeStatus')
    const buttons = ['to-do', 'doing', 'done', 'wont do'];
        buttons.forEach((button) => {
          const buttonElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('button', 'change-status-button', `${buttons[buttons.indexOf(button)]}#id`)
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
             ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)  
        }
     })
}

const closePopup = function (){
    const changeStatus = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('changeStatus')
    document.addEventListener('click', e =>{
        if(document.body.contains(changeStatus)){
            changeStatus.remove()
        }
    })
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
                modifyStatus(index, `${event.target.value}`)
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
        const index = +`${e.target.id}`.replace("status", "")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLFlBQVk7QUFDWjtBQUNBO0FBQ0EsNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzM1OTciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJhY3REb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbi8vIGltcG9ydCBsb29wVG9kb3MgZnJvbSBcIi4vbG9vcFRvZG9zXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhhcnJheSl7XHJcbiAgICBjb25zdCB0b2Rvc1ZpZXcgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCd0b2Rvc1ZpZXcnKVxyXG4gICAgaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCd0b2RvcycpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKVxyXG4gICAgaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCdkZWxldGUtdGFzaycpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICd0b2RvcycsIGB0b2RvJHtpfWApXHJcbiAgICAgICAgbGV0IGRlbGV0ZVRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2RlbGV0ZS10YXNrJywgYCR7aX1gKVxyXG4gICAgICAgIGRlbGV0ZVRhc2sudGV4dENvbnRlbnQgPSAneCdcclxuICAgICAgICBpbnRlcmFjdERPTSgpLmFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50KGNvbnRhaW5lciwgYXJyYXlbaV0sIGkpXHJcbiAgICAgICAgdG9kb3NWaWV3LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzaylcclxuICAgIH1cclxufSIsImNvbnN0IGludGVyYWN0RE9NID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50JylcclxuXHJcblxyXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkID0gZnVuY3Rpb24odHlwZSwgY2xhc3NOYW1lLCBpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBgJHtpZE5hbWV9YFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG9va0RPTWVsZW1lbnQgPSBmdW5jdGlvbiAoaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWROYW1lfWApXHJcbiAgICAgICAgcmV0dXJuIGVsZW1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzID0gZnVuY3Rpb24oY2xhc3NOYW1lKXtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uKGlkTmFtZSl7XHJcbiAgICAgICAgcmV0dXJuIGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoaWROYW1lKS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUVsZW1lbnREaXNwbGF5ID0gZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgaWYoZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jyl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaWRlID0gZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBvYmosIGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLXRhc2tzJywgYHRhc2ske2luZGV4fWApXHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tc3RhdHVzJywgYHN0YXR1cyR7aW5kZXh9YClcclxuICAgICAgICBsZXQgbGlzdCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tbGlzdHMnLCBgbGlzdCR7aW5kZXh9YClcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLXByaW9yaXR5JywgYHByaW9yaXR5JHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBkdWVEYXRlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1kdWUtZGF0ZScsIGBkdWVEYXRlJHtpbmRleH1gKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0dXMpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKVxyXG4gICAgICAgIHRhc2sudGV4dENvbnRlbnQgPSBgJHtvYmoudGFza31gXHJcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gYCR7b2JqLnN0YXR1c31gXHJcbiAgICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGAke29iai5saXN0fWBcclxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGAke29iai5wcmlvcml0eX1gXHJcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke29iai5kdWVEYXRlfWBcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBtYWluQ29udGVudCwgXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkLCBcclxuICAgICAgICBob29rRE9NZWxlbWVudCwgXHJcbiAgICAgICAgcmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cywgXHJcbiAgICAgICAgZ2V0SW5wdXRWYWx1ZSwgXHJcbiAgICAgICAgYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQsIFxyXG4gICAgICAgIHRvZ2dsZUVsZW1lbnREaXNwbGF5LFxyXG4gICAgICAgIGhpZGUgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0RE9NIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCJcclxuXHJcblxyXG5jb25zdCB0b2RvcyA9IFtdXHJcblxyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IGluZGV4ID0+IHtcclxuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSlcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuY29uc3QgbW9kaWZ5U3RhdHVzID0gZnVuY3Rpb24gKGluZGV4LCBzdGF0dXNWYWx1ZSkge1xyXG4gICAgY29uc3QgdG9kbyA9IHRvZG9DcmVhdG9yKGAke3RvZG9zW2luZGV4XS50YXNrfWAsIGAke3N0YXR1c1ZhbHVlfWAsIGAke3RvZG9zW2luZGV4XS5saXN0fWAsIGAke3RvZG9zW2luZGV4XS5wcmlvcml0eX1gLCBgJHt0b2Rvc1tpbmRleF0uZHVlRGF0ZX1gKVxyXG4gICAgXHJcbiAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEsIHRvZG8pXHJcblxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHN0YXR1c0NoYW5nZXIgPSBwcm9wcyA9PiAoe1xyXG4gICAgY2hhbmdlU3RhdHVzOiAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc3RhdHVzID0gXCJPS1wiXHJcbiAgICB9XHJcbn0pXHJcbmNvbnN0IHByaW9yaXR5Q2hhbmdlciA9IHByb3BzID0+ICh7XHJcbiAgICBjaGFuZ2VQcmlvcml0eTogKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnByaW9yaXR5ID0gXCJMT1dcIlxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZG9DcmVhdG9yKHRhc2ssIHN0YXR1cywgbGlzdCwgcHJpb3JpdHksIGR1ZURhdGUpe1xyXG4gICAgbGV0IHRvZG8gPSB7XHJcbiAgICAgICAgdGFzayxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgbGlzdCxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBkdWVEYXRlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odG9kbywgc3RhdHVzQ2hhbmdlcih0b2RvKSwgcHJpb3JpdHlDaGFuZ2VyKHRvZG8pKVxyXG59XHJcblxyXG5jb25zdCB0b2RvMSA9IHRvZG9DcmVhdG9yKCd3YWxrIHdpdGggTWFuY2hpbmhhJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMDMvMDQvMjAyMycpXHJcbmNvbnN0IHRvZG8yID0gdG9kb0NyZWF0b3IoJ3BsYXkgUmF2ZW5kYXduJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMDMvMDQvMjAyMycpXHJcbmNvbnN0IHRvZG8zID0gdG9kb0NyZWF0b3IoJ3N0dWR5IG1hdGgnLCAndG8tZG8nLCAnZGFpbHknLCAnbWVkaXVtJywgJzA2LzA0LzIwMjMnKVxyXG5cclxudG9kb3MucHVzaCh0b2RvMSlcclxudG9kb3MucHVzaCh0b2RvMilcclxudG9kb3MucHVzaCh0b2RvMylcclxuLy8gY29uc29sZS5sb2codG9kb3MpXHJcblxyXG5cclxuY29uc3QgYWRkVGFzayA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2FkZFRhc2snKVxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgYWRkVGFza3MoKVxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgYWRkVGFza3MgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHRhc2sgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ3Rhc2tJbnB1dCcpXHJcbiAgICBsZXQgc3RhdHVzID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCdzdGF0dXNJbnB1dCcpXHJcbiAgICBsZXQgbGlzdCA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnbGlzdElucHV0JylcclxuICAgIGxldCBwcmlvcml0eSA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgncHJpb3JpdHlJbnB1dCcpXHJcbiAgICBsZXQgZHVlRGF0ZSA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnZHVlRGF0ZUlucHV0JylcclxuICAgIGNvbnN0IHRvZG8gPSB0b2RvQ3JlYXRvcihgJHt0YXNrfWAsYCR7c3RhdHVzfWAsYCR7bGlzdH1gLGAke3ByaW9yaXR5fWAsYCR7ZHVlRGF0ZX1gKVxyXG4gICAgdG9kb3MucHVzaCh0b2RvKVxyXG59XHJcblxyXG5cclxuXHJcbmRpc3BsYXlUYXNrcyh0b2RvcylcclxuXHJcblxyXG5jb25zdCB0b2Rvc1ZpZXcgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCd0b2Rvc1ZpZXcnKVxyXG5cclxuLy8gY29uc3Qgc3RhdHVzQ2hhbmdlID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnc3RhdHVzQ2hhbmdlJylcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udHJvbFN0YXR1c0NoYW5nZShlbGVtZW50LCBpbmRleCl7XHJcbiAgICAvLyBjb25zdCBjaGFuZ2VTdGF0dXMgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdjaGFuZ2VTdGF0dXMnKVxyXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdjaGFuZ2Utc3RhdHVzJywgJ2NoYW5nZVN0YXR1cycpXHJcbiAgICBjb25zdCBidXR0b25zID0gWyd0by1kbycsICdkb2luZycsICdkb25lJywgJ3dvbnQgZG8nXTtcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY2hhbmdlLXN0YXR1cy1idXR0b24nLCBgJHtidXR0b25zW2J1dHRvbnMuaW5kZXhPZihidXR0b24pXX0jaWRgKVxyXG4gICAgICAgICAgYnV0dG9uRWxlbWVudC52YWx1ZSA9IGJ1dHRvbjtcclxuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBidXR0b247XHJcbiAgICAgICAgICBjaGFuZ2VTdGF0dXMuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgLy8gaW50ZXJhY3RET00oKS50b2dnbGVFbGVtZW50RGlzcGxheShjaGFuZ2VTdGF0dXMpXHJcbiAgICBjaGFuZ2VTdGF0dXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICBjaGFuZ2VTdGF0dXMuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgY2hhbmdlU3RhdHVzLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICBjaGFuZ2VTdGF0dXMuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgOyBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2hhbmdlU3RhdHVzKTtcclxuICAgIFxyXG4gICAgY2hhbmdlU3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgICAgICBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7Y2hhbmdlU3RhdHVzLnJlbW92ZSgpfSwgNTAwKVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgY2hhbmdlU3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2Utc3RhdHVzLWJ1dHRvbicpKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgIG1vZGlmeVN0YXR1cyhpbmRleCwgYCR7ZS50YXJnZXQudmFsdWV9YClcclxuICAgICAgICAgICAgLy8gIGludGVyYWN0RE9NKCkuaGlkZShjaGFuZ2VTdGF0dXMpO1xyXG4gICAgICAgICAgICBjaGFuZ2VTdGF0dXMucmVtb3ZlKClcclxuICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyh0b2RvcykgIFxyXG4gICAgICAgIH1cclxuICAgICB9KVxyXG59XHJcblxyXG5jb25zdCBjbG9zZVBvcHVwID0gZnVuY3Rpb24gKCl7XHJcbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdjaGFuZ2VTdGF0dXMnKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmJvZHkuY29udGFpbnMoY2hhbmdlU3RhdHVzKSl7XHJcbiAgICAgICAgICAgIGNoYW5nZVN0YXR1cy5yZW1vdmUoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVTdGF0dXNDaGFuZ2UgKGVsZW1lbnQsIGluZGV4KXtcclxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjaGFuZ2VWYWx1ZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdzZWxlY3QnLCAnY2hhbmdlLXZhbHVlJywgJ2NoYW5nZVZhbHVlJylcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBbJ3NlbGVjdCcsJ3RvLWRvJywgJ2RvaW5nJywgJ2RvbmUnLCAnd29udCBkbyddO1xyXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uO1xyXG4gICAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbjtcclxuICAgICAgICAgIGNoYW5nZVZhbHVlLmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0T3B0aW9uID0gY2hhbmdlVmFsdWUuZmlyc3RDaGlsZFxyXG4gICAgICAgIGZpcnN0T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxyXG4gICAgICAgIGZpcnN0T3B0aW9uLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgIGZpcnN0T3B0aW9uLmhpZGRlbiA9IHRydWVcclxuXHJcbiAgICAgICAgY2hhbmdlVmFsdWUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIGNoYW5nZVZhbHVlLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICAgICAgY2hhbmdlVmFsdWUuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xyXG4gICAgICAgIGNoYW5nZVZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYW5nZVZhbHVlLnNpemUpXHJcbiAgICAgICAgICAgIGNoYW5nZVZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4geyAgICBcclxuICAgICAgICAgICAgICAgIG1vZGlmeVN0YXR1cyhpbmRleCwgYCR7ZXZlbnQudGFyZ2V0LnZhbHVlfWApXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VWYWx1ZS5yZW1vdmUoKTsgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgICAgICAgICAgICAgaWYoY2hhbmdlVmFsdWUuc2l6ZSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiP1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVZhbHVlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgIFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjaGFuZ2VWYWx1ZSk7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG50b2Rvc1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXRhc2snKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKVxyXG4gICAgICAgIGRlbGV0ZVRhc2soZS50YXJnZXQuaWQpXHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kby1zdGF0dXMnKSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcInN0YXR1c1wiLCBcIlwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIC8vIGhhbmRsZVN0YXR1c0NoYW5nZSAoZS50YXJnZXQsIGluZGV4KVxyXG4gICAgICAgIGNvbnRyb2xTdGF0dXNDaGFuZ2UoZS50YXJnZXQsIGluZGV4KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gY29uc3QgeyB0b3AsIGxlZnQgfSA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuLy8gICAgICAgICAvLyBDcmVhdGUgYSBzZWxlY3QgZWxlbWVudFxyXG4vLyAgICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgXHJcbi8vICAgICAgICAgLy8gQ3JlYXRlIG9wdGlvbnMgZm9yIHRoZSBzZWxlY3QgZWxlbWVudFxyXG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbJ3RvLWRvJywgJ2RvaW5nJywgJ2RvbmUnLCAnd29udCBkbyddO1xyXG4vLyAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbi8vICAgICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbi8vICAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uO1xyXG4vLyAgICAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbjtcclxuLy8gICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuLy8gICAgICAgICB9KTtcclxuICAgIFxyXG4vLyAgICAgICAgIC8vIFBvc2l0aW9uIHRoZSBzZWxlY3QgZWxlbWVudCB3aGVyZSB0aGUgY2xpY2tlZCBlbGVtZW50IGlzXHJcbi8vICAgICAgICAgc2VsZWN0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuLy8gICAgICAgICBzZWxlY3Quc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcclxuLy8gICAgICAgICBzZWxlY3Quc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xyXG4gICAgXHJcblxyXG4vLyAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbi8vICAgICAgICAgICAgIGlmKHdpbmRvdy5vbmNsaWNrKXtcclxuLy8gICAgICAgICAgICAgICAgIHNlbGVjdC5yZW1vdmUoKVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSlcclxuXHJcbi8vICAgICAgICAgLy8gQWRkIGEgY2hhbmdlIGV2ZW50IGxpc3RlbmVyIHRvIHVwZGF0ZSB0aGUgY2xpY2tlZCBlbGVtZW50IHRleHRcclxuLy8gICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbi8vICAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuLy8gICAgICAgICAgIHNlbGVjdC5yZW1vdmUoKTsgLy8gcmVtb3ZlIHRoZSBzZWxlY3QgZWxlbWVudCBhZnRlciB0aGUgc2VsZWN0aW9uIGlzIG1hZGVcclxuLy8gICAgICAgICB9KTtcclxuICAgIFxyXG4vLyAgICAgICAgIC8vIEFwcGVuZCB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gdGhlIGJvZHlcclxuLy8gICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlbGVjdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9