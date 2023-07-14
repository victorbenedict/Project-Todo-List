/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderDocument: () => (/* binding */ renderDocument),
/* harmony export */   renderProject: () => (/* binding */ renderProject),
/* harmony export */   renderTask: () => (/* binding */ renderTask)
/* harmony export */ });
//This module is responsible for DOM manipulation and updating the HTML structure to reflect changes in the running data.

/*

render the containers
render the add project/task buttons 
1 column design for easy html/css

---Project Title---
----Task Title-----
----Description----
----DueDate--------
----Priority-------
----Status---------


Use input tag for titles and description
Temporarily use input tag for dueDate
Use dropdown for priority
Use checkbox isComplete

*/

//Test output to console
function renderDocument(){
  document.body.onload = renderProject;
}

function addElement(){
  const newDiv = document.createElement('div');
  const newContent = document.createTextNode('Hello DOM!');
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById('div1');
  document.body.insertBefore(newDiv, currentDiv);
}

function renderProject(title){
  const newDiv = document.createElement('div');
  const projectTitle = document.createTextNode(`${title}`);
  newDiv.appendChild(projectTitle);
  const currentDiv = document.getElementById('.div1');
  document.body.insertBefore(newDiv, currentDiv);
}

function renderTask(array){
  const newDiv = document.createElement('div');
  const title = document.createTextNode(`${array[0]} | `);
  const description = document.createTextNode(`${array[1]} | `);
  const dueDate = document.createTextNode(`${array[2]} | `);
  const priority = document.createTextNode(`${array[3]} | `);
  const isComplete = document.createTextNode(`${array[4]} | `);
  newDiv.appendChild(title);
  newDiv.appendChild(description);
  newDiv.appendChild(dueDate);
  newDiv.appendChild(priority);
  newDiv.appendChild(isComplete);
  const currentDiv = document.getElementById('.div1');
  document.body.insertBefore(newDiv, currentDiv);
}



/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   projects_arrLength: () => (/* binding */ projects_arrLength),
/* harmony export */   retrieveAllProject: () => (/* binding */ retrieveAllProject),
/* harmony export */   retrieveAllTask: () => (/* binding */ retrieveAllTask),
/* harmony export */   retrieveProject: () => (/* binding */ retrieveProject),
/* harmony export */   retrieveProjectTitle: () => (/* binding */ retrieveProjectTitle),
/* harmony export */   retrieveTask: () => (/* binding */ retrieveTask),
/* harmony export */   tasks_arrLength: () => (/* binding */ tasks_arrLength),
/* harmony export */   updateProjectTitle: () => (/* binding */ updateProjectTitle),
/* harmony export */   updateTask: () => (/* binding */ updateTask)
/* harmony export */ });
//This module contains the core logic, including processing the running data and performing CRUD operations.

//Array for storing data
let projects_arr = [];


//------Constructor------
function Project(title){
  this.title = title
  this.tasks_arr = [];
};

function Task(title, description, dueDate, priority, isComplete){
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.isComplete = isComplete;
};

Project.prototype.updateTitle = function(newTitle){
  this.title = newTitle;
};

Task.prototype.updateTask = function(propertyName, newValue){
  this[propertyName] = newValue;
}

//------Create------
function createProject(title){
  projects_arr.push(new Project(title));
  return projects_arr;
}

function createTask(projectIndex, title, description, dueDate, priority, isComplete){
  projects_arr[projectIndex].tasks_arr.push(new Task(title,description, dueDate, priority, isComplete));
  return projects_arr;
}

//------Retrieve------
function retrieveAllProject(){
  return projects_arr;
}

function retrieveProject(projectIndex){
  return  projects_arr[projectIndex];
}

function retrieveProjectTitle(projectIndex){
  return projects_arr[projectIndex].title;
}

function retrieveAllTask(projectIndex){
  projects_arr[projectIndex].tasks_arr;
  return projects_arr;
}

function retrieveTask(projectIndex, taskIndex){
  const taskObject = projects_arr[projectIndex].tasks_arr[taskIndex]
  let _tasks_arr = [];
    _tasks_arr.push(taskObject.title);
    _tasks_arr.push(taskObject.description);
    _tasks_arr.push(taskObject.dueDate);
    _tasks_arr.push(taskObject.priority);
    _tasks_arr.push(taskObject.isComplete);
  return _tasks_arr;
}

//------Update------
function updateProjectTitle(projectIndex, newTitle){
  projects_arr[projectIndex].updateTitle(newTitle);
  return projects_arr;
}

function updateTask(projectIndex, taskIndex, propertyName, newValue){
  projects_arr[projectIndex].tasks_arr[taskIndex].updateTask(propertyName, newValue)
  return projects_arr;
}

//------Delete------
function deleteProject(projectIndex){
  projects_arr.splice(projectIndex, 1);
  return projects_arr;
}

function deleteTask(projectIndex, taskIndex){
  projects_arr[projectIndex].tasks_arr.splice(taskIndex, 1);
  return projects_arr;
}

//------Misc------
function projects_arrLength(){
  return projects_arr.length ;
 }

 function tasks_arrLength(projectIndex){
  return projects_arr[projectIndex].tasks_arr.length;
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
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/*
Note:
 Save the data by using a timeout 
  Start the timer when the user start typing or modifies the note 
  Reset the time if the user continues to make changes
  Save upon timeout/inactive state
*/





//IIFE
(function () {
  //Populate the initial Projects and Tasks
  function initData(){
    (0,_factory__WEBPACK_IMPORTED_MODULE_0__.createProject)('Work');
    (0,_factory__WEBPACK_IMPORTED_MODULE_0__.createTask)(0, 'Coding', 'Add new feature', 'July 13, 2023', 'Normal', false);
    (0,_factory__WEBPACK_IMPORTED_MODULE_0__.createTask)(0, 'Report', 'Provide the changelog', 'July 15, 2023', 'High', false);
    (0,_factory__WEBPACK_IMPORTED_MODULE_0__.createTask)(0, 'Debug', 'Fix logic model', 'July 16, 2023', 'High', false);

  
    (0,_factory__WEBPACK_IMPORTED_MODULE_0__.createProject)('Personal');
    (0,_factory__WEBPACK_IMPORTED_MODULE_0__.createTask)(1, 'Car', 'Change oil', 'July 24, 2023', 'None', false);
    (0,_factory__WEBPACK_IMPORTED_MODULE_0__.createTask)(1, 'Baby', 'Buy vitamins', 'Today', 'High', false);

    (0,_factory__WEBPACK_IMPORTED_MODULE_0__.createProject)('Toyota Group');
    (0,_factory__WEBPACK_IMPORTED_MODULE_0__.createTask)(2, 'Badges', 'Follow up designers and print', 'July 20, 2023', 'None', false);
  }

  //Test IIFE
  function hello(){
    console.log('Initiate IIFE');
  }
  hello();
  initData();
  // showProjects();
  // …
})();

//Test factory functions
// consoleLog(retrieveAllProject.name, retrieveAllProject());
// consoleLog(retrieveProject.name, retrieveProject(0));
// consoleLog(retrieveAllTask.name, retrieveAllTask(0));
// consoleLog(retrieveTask.name, retrieveTask(0, 1));
// consoleLog(updateProjectTitle.name, updateProjectTitle(0,'Working'));
// consoleLog(updateTask.name, updateTask(0, 1, 'description', 'Submit to TL for checking'));
// consoleLog(deleteProject.name, deleteProject(0))
// consoleLog(deleteTask.name, deleteTask(1,0))

//Test the DOM here
// console.log(projects_arrLength());
function showProjects(){
  for (let i = 0; i < (0,_factory__WEBPACK_IMPORTED_MODULE_0__.projects_arrLength)(); i++){
    (0,_display__WEBPACK_IMPORTED_MODULE_1__.renderProject)((0,_factory__WEBPACK_IMPORTED_MODULE_0__.retrieveProjectTitle)(i));
    showTasks(i);
  }
}

function showTasks(projectIndex){
  for (let i = 0; i < (0,_factory__WEBPACK_IMPORTED_MODULE_0__.tasks_arrLength)(projectIndex); i++){
    const arr = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.retrieveTask)(projectIndex, i);
    (0,_display__WEBPACK_IMPORTED_MODULE_1__.renderTask)(arr);
  }
}

showProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELE1BQU07QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxVQUFVO0FBQ3JELGlEQUFpRCxVQUFVO0FBQzNELDZDQUE2QyxVQUFVO0FBQ3ZELDhDQUE4QyxVQUFVO0FBQ3hELGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztVQ2pHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFTb0I7QUFLQzs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFhO0FBQ2pCLElBQUksb0RBQVU7QUFDZCxJQUFJLG9EQUFVO0FBQ2QsSUFBSSxvREFBVTs7QUFFZDtBQUNBLElBQUksdURBQWE7QUFDakIsSUFBSSxvREFBVTtBQUNkLElBQUksb0RBQVU7O0FBRWQsSUFBSSx1REFBYTtBQUNqQixJQUFJLG9EQUFVO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLDREQUFrQixJQUFJO0FBQzVDLElBQUksdURBQWEsQ0FBQyw4REFBb0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLElBQUkseURBQWUsZ0JBQWdCO0FBQ3JELGdCQUFnQixzREFBWTtBQUM1QixJQUFJLG9EQUFVO0FBQ2Q7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vVGhpcyBtb2R1bGUgaXMgcmVzcG9uc2libGUgZm9yIERPTSBtYW5pcHVsYXRpb24gYW5kIHVwZGF0aW5nIHRoZSBIVE1MIHN0cnVjdHVyZSB0byByZWZsZWN0IGNoYW5nZXMgaW4gdGhlIHJ1bm5pbmcgZGF0YS5cblxuLypcblxucmVuZGVyIHRoZSBjb250YWluZXJzXG5yZW5kZXIgdGhlIGFkZCBwcm9qZWN0L3Rhc2sgYnV0dG9ucyBcbjEgY29sdW1uIGRlc2lnbiBmb3IgZWFzeSBodG1sL2Nzc1xuXG4tLS1Qcm9qZWN0IFRpdGxlLS0tXG4tLS0tVGFzayBUaXRsZS0tLS0tXG4tLS0tRGVzY3JpcHRpb24tLS0tXG4tLS0tRHVlRGF0ZS0tLS0tLS0tXG4tLS0tUHJpb3JpdHktLS0tLS0tXG4tLS0tU3RhdHVzLS0tLS0tLS0tXG5cblxuVXNlIGlucHV0IHRhZyBmb3IgdGl0bGVzIGFuZCBkZXNjcmlwdGlvblxuVGVtcG9yYXJpbHkgdXNlIGlucHV0IHRhZyBmb3IgZHVlRGF0ZVxuVXNlIGRyb3Bkb3duIGZvciBwcmlvcml0eVxuVXNlIGNoZWNrYm94IGlzQ29tcGxldGVcblxuKi9cblxuLy9UZXN0IG91dHB1dCB0byBjb25zb2xlXG5mdW5jdGlvbiByZW5kZXJEb2N1bWVudCgpe1xuICBkb2N1bWVudC5ib2R5Lm9ubG9hZCA9IHJlbmRlclByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnQoKXtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5ld0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnSGVsbG8gRE9NIScpO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3Q29udGVudCk7XG4gIGNvbnN0IGN1cnJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2MScpO1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShuZXdEaXYsIGN1cnJlbnREaXYpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KHRpdGxlKXtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3RpdGxlfWApO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgY29uc3QgY3VycmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcuZGl2MScpO1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShuZXdEaXYsIGN1cnJlbnREaXYpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrKGFycmF5KXtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7YXJyYXlbMF19IHwgYCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7YXJyYXlbMV19IHwgYCk7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHthcnJheVsyXX0gfCBgKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHthcnJheVszXX0gfCBgKTtcbiAgY29uc3QgaXNDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2FycmF5WzRdfSB8IGApO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChpc0NvbXBsZXRlKTtcbiAgY29uc3QgY3VycmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcuZGl2MScpO1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShuZXdEaXYsIGN1cnJlbnREaXYpO1xufVxuXG5leHBvcnR7XG4gIHJlbmRlckRvY3VtZW50LFxuICByZW5kZXJQcm9qZWN0LFxuICByZW5kZXJUYXNrXG59IiwiLy9UaGlzIG1vZHVsZSBjb250YWlucyB0aGUgY29yZSBsb2dpYywgaW5jbHVkaW5nIHByb2Nlc3NpbmcgdGhlIHJ1bm5pbmcgZGF0YSBhbmQgcGVyZm9ybWluZyBDUlVEIG9wZXJhdGlvbnMuXG5cbi8vQXJyYXkgZm9yIHN0b3JpbmcgZGF0YVxubGV0IHByb2plY3RzX2FyciA9IFtdO1xuXG5cbi8vLS0tLS0tQ29uc3RydWN0b3ItLS0tLS1cbmZ1bmN0aW9uIFByb2plY3QodGl0bGUpe1xuICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgdGhpcy50YXNrc19hcnIgPSBbXTtcbn07XG5cbmZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZSl7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS51cGRhdGVUaXRsZSA9IGZ1bmN0aW9uKG5ld1RpdGxlKXtcbiAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xufTtcblxuVGFzay5wcm90b3R5cGUudXBkYXRlVGFzayA9IGZ1bmN0aW9uKHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpe1xuICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbn1cblxuLy8tLS0tLS1DcmVhdGUtLS0tLS1cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpe1xuICBwcm9qZWN0c19hcnIucHVzaChuZXcgUHJvamVjdCh0aXRsZSkpO1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHByb2plY3RJbmRleCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZSl7XG4gIHByb2plY3RzX2Fycltwcm9qZWN0SW5kZXhdLnRhc2tzX2Fyci5wdXNoKG5ldyBUYXNrKHRpdGxlLGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZSkpO1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG4vLy0tLS0tLVJldHJpZXZlLS0tLS0tXG5mdW5jdGlvbiByZXRyaWV2ZUFsbFByb2plY3QoKXtcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVQcm9qZWN0KHByb2plY3RJbmRleCl7XG4gIHJldHVybiAgcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF07XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlUHJvamVjdFRpdGxlKHByb2plY3RJbmRleCl7XG4gIHJldHVybiBwcm9qZWN0c19hcnJbcHJvamVjdEluZGV4XS50aXRsZTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVBbGxUYXNrKHByb2plY3RJbmRleCl7XG4gIHByb2plY3RzX2Fycltwcm9qZWN0SW5kZXhdLnRhc2tzX2FycjtcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVUYXNrKHByb2plY3RJbmRleCwgdGFza0luZGV4KXtcbiAgY29uc3QgdGFza09iamVjdCA9IHByb2plY3RzX2Fycltwcm9qZWN0SW5kZXhdLnRhc2tzX2Fyclt0YXNrSW5kZXhdXG4gIGxldCBfdGFza3NfYXJyID0gW107XG4gICAgX3Rhc2tzX2Fyci5wdXNoKHRhc2tPYmplY3QudGl0bGUpO1xuICAgIF90YXNrc19hcnIucHVzaCh0YXNrT2JqZWN0LmRlc2NyaXB0aW9uKTtcbiAgICBfdGFza3NfYXJyLnB1c2godGFza09iamVjdC5kdWVEYXRlKTtcbiAgICBfdGFza3NfYXJyLnB1c2godGFza09iamVjdC5wcmlvcml0eSk7XG4gICAgX3Rhc2tzX2Fyci5wdXNoKHRhc2tPYmplY3QuaXNDb21wbGV0ZSk7XG4gIHJldHVybiBfdGFza3NfYXJyO1xufVxuXG4vLy0tLS0tLVVwZGF0ZS0tLS0tLVxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdFRpdGxlKHByb2plY3RJbmRleCwgbmV3VGl0bGUpe1xuICBwcm9qZWN0c19hcnJbcHJvamVjdEluZGV4XS51cGRhdGVUaXRsZShuZXdUaXRsZSk7XG4gIHJldHVybiBwcm9qZWN0c19hcnI7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2socHJvamVjdEluZGV4LCB0YXNrSW5kZXgsIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpe1xuICBwcm9qZWN0c19hcnJbcHJvamVjdEluZGV4XS50YXNrc19hcnJbdGFza0luZGV4XS51cGRhdGVUYXNrKHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpXG4gIHJldHVybiBwcm9qZWN0c19hcnI7XG59XG5cbi8vLS0tLS0tRGVsZXRlLS0tLS0tXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleCl7XG4gIHByb2plY3RzX2Fyci5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCl7XG4gIHByb2plY3RzX2Fycltwcm9qZWN0SW5kZXhdLnRhc2tzX2Fyci5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuLy8tLS0tLS1NaXNjLS0tLS0tXG5mdW5jdGlvbiBwcm9qZWN0c19hcnJMZW5ndGgoKXtcbiAgcmV0dXJuIHByb2plY3RzX2Fyci5sZW5ndGggO1xuIH1cblxuIGZ1bmN0aW9uIHRhc2tzX2Fyckxlbmd0aChwcm9qZWN0SW5kZXgpe1xuICByZXR1cm4gcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udGFza3NfYXJyLmxlbmd0aDtcbiB9XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRhc2ssIFxuICByZXRyaWV2ZUFsbFByb2plY3QsIHJldHJpZXZlUHJvamVjdCwgcmV0cmlldmVQcm9qZWN0VGl0bGUsIHJldHJpZXZlQWxsVGFzaywgcmV0cmlldmVUYXNrLFxuICB1cGRhdGVQcm9qZWN0VGl0bGUsIHVwZGF0ZVRhc2ssXG4gIGRlbGV0ZVByb2plY3QsIGRlbGV0ZVRhc2ssXG4gIHByb2plY3RzX2Fyckxlbmd0aCwgdGFza3NfYXJyTGVuZ3RoXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuTm90ZTpcbiBTYXZlIHRoZSBkYXRhIGJ5IHVzaW5nIGEgdGltZW91dCBcbiAgU3RhcnQgdGhlIHRpbWVyIHdoZW4gdGhlIHVzZXIgc3RhcnQgdHlwaW5nIG9yIG1vZGlmaWVzIHRoZSBub3RlIFxuICBSZXNldCB0aGUgdGltZSBpZiB0aGUgdXNlciBjb250aW51ZXMgdG8gbWFrZSBjaGFuZ2VzXG4gIFNhdmUgdXBvbiB0aW1lb3V0L2luYWN0aXZlIHN0YXRlXG4qL1xuXG5cbmltcG9ydCB7IFxuICBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUYXNrLFxuICByZXRyaWV2ZUFsbFByb2plY3QsIHJldHJpZXZlUHJvamVjdCwgcmV0cmlldmVQcm9qZWN0VGl0bGUsIHJldHJpZXZlQWxsVGFzaywgcmV0cmlldmVUYXNrLFxuICB1cGRhdGVQcm9qZWN0VGl0bGUsIHVwZGF0ZVRhc2ssXG4gIGRlbGV0ZVByb2plY3QsIGRlbGV0ZVRhc2ssXG4gIHByb2plY3RzX2Fyckxlbmd0aCwgdGFza3NfYXJyTGVuZ3RoXG4gIH0gZnJvbSAnLi9mYWN0b3J5J1xuaW1wb3J0IHsgXG4gIHJlbmRlckRvY3VtZW50LFxuICByZW5kZXJQcm9qZWN0LFxuICByZW5kZXJUYXNrXG4gIH0gZnJvbSAnLi9kaXNwbGF5JztcblxuLy9JSUZFXG4oZnVuY3Rpb24gKCkge1xuICAvL1BvcHVsYXRlIHRoZSBpbml0aWFsIFByb2plY3RzIGFuZCBUYXNrc1xuICBmdW5jdGlvbiBpbml0RGF0YSgpe1xuICAgIGNyZWF0ZVByb2plY3QoJ1dvcmsnKTtcbiAgICBjcmVhdGVUYXNrKDAsICdDb2RpbmcnLCAnQWRkIG5ldyBmZWF0dXJlJywgJ0p1bHkgMTMsIDIwMjMnLCAnTm9ybWFsJywgZmFsc2UpO1xuICAgIGNyZWF0ZVRhc2soMCwgJ1JlcG9ydCcsICdQcm92aWRlIHRoZSBjaGFuZ2Vsb2cnLCAnSnVseSAxNSwgMjAyMycsICdIaWdoJywgZmFsc2UpO1xuICAgIGNyZWF0ZVRhc2soMCwgJ0RlYnVnJywgJ0ZpeCBsb2dpYyBtb2RlbCcsICdKdWx5IDE2LCAyMDIzJywgJ0hpZ2gnLCBmYWxzZSk7XG5cbiAgXG4gICAgY3JlYXRlUHJvamVjdCgnUGVyc29uYWwnKTtcbiAgICBjcmVhdGVUYXNrKDEsICdDYXInLCAnQ2hhbmdlIG9pbCcsICdKdWx5IDI0LCAyMDIzJywgJ05vbmUnLCBmYWxzZSk7XG4gICAgY3JlYXRlVGFzaygxLCAnQmFieScsICdCdXkgdml0YW1pbnMnLCAnVG9kYXknLCAnSGlnaCcsIGZhbHNlKTtcblxuICAgIGNyZWF0ZVByb2plY3QoJ1RveW90YSBHcm91cCcpO1xuICAgIGNyZWF0ZVRhc2soMiwgJ0JhZGdlcycsICdGb2xsb3cgdXAgZGVzaWduZXJzIGFuZCBwcmludCcsICdKdWx5IDIwLCAyMDIzJywgJ05vbmUnLCBmYWxzZSk7XG4gIH1cblxuICAvL1Rlc3QgSUlGRVxuICBmdW5jdGlvbiBoZWxsbygpe1xuICAgIGNvbnNvbGUubG9nKCdJbml0aWF0ZSBJSUZFJyk7XG4gIH1cbiAgaGVsbG8oKTtcbiAgaW5pdERhdGEoKTtcbiAgLy8gc2hvd1Byb2plY3RzKCk7XG4gIC8vIOKAplxufSkoKTtcblxuLy9UZXN0IGZhY3RvcnkgZnVuY3Rpb25zXG4vLyBjb25zb2xlTG9nKHJldHJpZXZlQWxsUHJvamVjdC5uYW1lLCByZXRyaWV2ZUFsbFByb2plY3QoKSk7XG4vLyBjb25zb2xlTG9nKHJldHJpZXZlUHJvamVjdC5uYW1lLCByZXRyaWV2ZVByb2plY3QoMCkpO1xuLy8gY29uc29sZUxvZyhyZXRyaWV2ZUFsbFRhc2submFtZSwgcmV0cmlldmVBbGxUYXNrKDApKTtcbi8vIGNvbnNvbGVMb2cocmV0cmlldmVUYXNrLm5hbWUsIHJldHJpZXZlVGFzaygwLCAxKSk7XG4vLyBjb25zb2xlTG9nKHVwZGF0ZVByb2plY3RUaXRsZS5uYW1lLCB1cGRhdGVQcm9qZWN0VGl0bGUoMCwnV29ya2luZycpKTtcbi8vIGNvbnNvbGVMb2codXBkYXRlVGFzay5uYW1lLCB1cGRhdGVUYXNrKDAsIDEsICdkZXNjcmlwdGlvbicsICdTdWJtaXQgdG8gVEwgZm9yIGNoZWNraW5nJykpO1xuLy8gY29uc29sZUxvZyhkZWxldGVQcm9qZWN0Lm5hbWUsIGRlbGV0ZVByb2plY3QoMCkpXG4vLyBjb25zb2xlTG9nKGRlbGV0ZVRhc2submFtZSwgZGVsZXRlVGFzaygxLDApKVxuXG4vL1Rlc3QgdGhlIERPTSBoZXJlXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0c19hcnJMZW5ndGgoKSk7XG5mdW5jdGlvbiBzaG93UHJvamVjdHMoKXtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c19hcnJMZW5ndGgoKTsgaSsrKXtcbiAgICByZW5kZXJQcm9qZWN0KHJldHJpZXZlUHJvamVjdFRpdGxlKGkpKTtcbiAgICBzaG93VGFza3MoaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tzKHByb2plY3RJbmRleCl7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NfYXJyTGVuZ3RoKHByb2plY3RJbmRleCk7IGkrKyl7XG4gICAgY29uc3QgYXJyID0gcmV0cmlldmVUYXNrKHByb2plY3RJbmRleCwgaSk7XG4gICAgcmVuZGVyVGFzayhhcnIpO1xuICB9XG59XG5cbnNob3dQcm9qZWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9