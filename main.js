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

    const appendElementAndDefineContent = function(container, obj, index){
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




    return { mainContent, createElementWithClassAndId, hookDOMelement, appendElementAndDefineContent }
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




const todos = []


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

const todo1 = todoCreator('walk with Manchinha', 'todo', 'daily', 'high', '03/04/2023')
const todo2 = todoCreator('play Ravendawn', 'todo', 'daily', 'high', '03/04/2023')
const todo3 = todoCreator('study math', 'todo', 'daily', 'medium', '06/04/2023')

todos.push(todo1)
todos.push(todo2)
todos.push(todo3)
console.log(todos)

const todosView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('todosView')
for(let i = 0; i < todos.length; i++){
    let container = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().createElementWithClassAndId('div', 'todos', `todo${i}`)
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().appendElementAndDefineContent(container, todos[i], i)
    todosView.appendChild(container)
}





// function swimmingMonsterCreator(name) {
//     const monster = { name: name}

//     function swimmer({ name }){
//         return {
//             swim: () => console.log(`${name} swan`)
//         }
//     }

//     return {
//         ...monster,
//         ...swimmer(monster)
//     }
// }

// const obj = swimmingMonsterCreator('Monster')
// obj.swim()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQyx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLE1BQU07QUFDN0YsNEZBQTRGLE1BQU07QUFDbEcsdUZBQXVGLE1BQU07QUFDN0Ysa0dBQWtHLE1BQU07QUFDeEcsZ0dBQWdHLE1BQU07QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUztBQUN2QyxnQ0FBZ0MsV0FBVztBQUMzQyw4QkFBOEIsU0FBUztBQUN2QyxrQ0FBa0MsYUFBYTtBQUMvQyxpQ0FBaUMsWUFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7O1VDMUNmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ21CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFXO0FBQzdCLGVBQWUsa0JBQWtCO0FBQ2pDLG9CQUFvQix3REFBVyxzREFBc0QsRUFBRTtBQUN2RixJQUFJLHlEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz8zNTk3Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbnRlcmFjdERvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgaW50ZXJhY3RET00gPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKVxyXG5cclxuXHJcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQgPSBmdW5jdGlvbih0eXBlLCBjbGFzc05hbWUsIGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApXHJcbiAgICAgICAgZWxlbWVudC5pZCA9IGAke2lkTmFtZX1gXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBob29rRE9NZWxlbWVudCA9IGZ1bmN0aW9uIChpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZE5hbWV9YClcclxuICAgICAgICByZXR1cm4gZWxlbVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24oY29udGFpbmVyLCBvYmosIGluZGV4KXtcclxuICAgICAgICBsZXQgdGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tdGFza3MnLCBgdGFzayR7aW5kZXh9YClcclxuICAgICAgICBsZXQgc3RhdHVzID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1zdGF0dXMnLCBgc3RhdHVzJHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBsaXN0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1saXN0cycsIGBsaXN0JHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tcHJpb3JpdHknLCBgcHJpb3JpdHkke2luZGV4fWApXHJcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLWR1ZS1kYXRlJywgYGR1ZURhdGUke2luZGV4fWApXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXR1cylcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdClcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpXHJcblxyXG4gICAgICAgIHRhc2sudGV4dENvbnRlbnQgPSBgJHtvYmoudGFza31gXHJcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gYCR7b2JqLnN0YXR1c31gXHJcbiAgICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGAke29iai5saXN0fWBcclxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGAke29iai5wcmlvcml0eX1gXHJcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke29iai5kdWVEYXRlfWBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4geyBtYWluQ29udGVudCwgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkLCBob29rRE9NZWxlbWVudCwgYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdERPTSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIlxyXG5cclxuXHJcbmNvbnN0IHRvZG9zID0gW11cclxuXHJcblxyXG5jb25zdCBzdGF0dXNDaGFuZ2VyID0gcHJvcHMgPT4gKHtcclxuICAgIGNoYW5nZVN0YXR1czogKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnN0YXR1cyA9IFwiT0tcIlxyXG4gICAgfVxyXG59KVxyXG5jb25zdCBwcmlvcml0eUNoYW5nZXIgPSBwcm9wcyA9PiAoe1xyXG4gICAgY2hhbmdlUHJpb3JpdHk6ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5wcmlvcml0eSA9IFwiTE9XXCJcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiB0b2RvQ3JlYXRvcih0YXNrLCBzdGF0dXMsIGxpc3QsIHByaW9yaXR5LCBkdWVEYXRlKXtcclxuICAgIGxldCB0b2RvID0ge1xyXG4gICAgICAgIHRhc2ssXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGxpc3QsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgZHVlRGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRvZG8sIHN0YXR1c0NoYW5nZXIodG9kbyksIHByaW9yaXR5Q2hhbmdlcih0b2RvKSlcclxufVxyXG5cclxuY29uc3QgdG9kbzEgPSB0b2RvQ3JlYXRvcignd2FsayB3aXRoIE1hbmNoaW5oYScsICd0b2RvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMDMvMDQvMjAyMycpXHJcbmNvbnN0IHRvZG8yID0gdG9kb0NyZWF0b3IoJ3BsYXkgUmF2ZW5kYXduJywgJ3RvZG8nLCAnZGFpbHknLCAnaGlnaCcsICcwMy8wNC8yMDIzJylcclxuY29uc3QgdG9kbzMgPSB0b2RvQ3JlYXRvcignc3R1ZHkgbWF0aCcsICd0b2RvJywgJ2RhaWx5JywgJ21lZGl1bScsICcwNi8wNC8yMDIzJylcclxuXHJcbnRvZG9zLnB1c2godG9kbzEpXHJcbnRvZG9zLnB1c2godG9kbzIpXHJcbnRvZG9zLnB1c2godG9kbzMpXHJcbmNvbnNvbGUubG9nKHRvZG9zKVxyXG5cclxuY29uc3QgdG9kb3NWaWV3ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgndG9kb3NWaWV3JylcclxuZm9yKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKXtcclxuICAgIGxldCBjb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3RvZG9zJywgYHRvZG8ke2l9YClcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyLCB0b2Rvc1tpXSwgaSlcclxuICAgIHRvZG9zVmlldy5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBzd2ltbWluZ01vbnN0ZXJDcmVhdG9yKG5hbWUpIHtcclxuLy8gICAgIGNvbnN0IG1vbnN0ZXIgPSB7IG5hbWU6IG5hbWV9XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gc3dpbW1lcih7IG5hbWUgfSl7XHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgc3dpbTogKCkgPT4gY29uc29sZS5sb2coYCR7bmFtZX0gc3dhbmApXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4ubW9uc3RlcixcclxuLy8gICAgICAgICAuLi5zd2ltbWVyKG1vbnN0ZXIpXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IG9iaiA9IHN3aW1taW5nTW9uc3RlckNyZWF0b3IoJ01vbnN0ZXInKVxyXG4vLyBvYmouc3dpbSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9