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
/* harmony export */   consoleLog: () => (/* binding */ consoleLog)
/* harmony export */ });
//This module is responsible for DOM manipulation and updating the HTML structure to reflect changes in the running data.

//Test output to console
function consoleLog(funcName, func){
 return console.log(funcName, func);
}



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   retrieveAllProject: () => (/* binding */ retrieveAllProject),
/* harmony export */   retrieveAllTask: () => (/* binding */ retrieveAllTask),
/* harmony export */   retrieveProject: () => (/* binding */ retrieveProject),
/* harmony export */   retrieveTask: () => (/* binding */ retrieveTask),
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
  projects_arr;
}

function retrieveProject(projectIndex){
  projects_arr[projectIndex];
  return projects_arr;
}

function retrieveAllTask(projectIndex){
  projects_arr[projectIndex].tasks_arr;
  return projects_arr;
}

function retrieveTask(projectIndex, taskIndex){
  projects_arr[projectIndex].tasks_arr[taskIndex];
  return projects_arr;
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
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");



//IIFE
(function () {
  //Populate the initial Projects and Tasks
  function initData(){
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)('Work');
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(0, 'Coding', 'Add new feature', 'July 13, 2023', 'Normal', false);
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(0, 'Report', 'Provide the changelog', 'July 15, 2023', 'High', false);
  
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)('Personal');
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(1, 'Car', 'Change oil', 'July 24, 2023', 'None', false);
  }
  //Test IIFE
  function hello(){
    console.log('Initiate IIFE');
  }
  hello();
  initData();
  // …
})();

// consoleLog(retrieveAllProject.name, retrieveAllProject());
// consoleLog(retrieveProject.name, retrieveProject(0));
// consoleLog(retrieveAllTask.name, retrieveAllTask(0));
// consoleLog(retrieveTask.name, retrieveTask(0, 1));
// consoleLog(updateProjectTitle.name, updateProjectTitle(0,'Working'));
// consoleLog(updateTask.name, updateTask(0, 1, 'description', 'Submit to TL for checking'));
// consoleLog(deleteProject.name, deleteProject(0))
// consoleLog(deleteTask.name, deleteTask(1,0))

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUM5RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNEa0I7QUFDcUI7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBYTtBQUNqQixJQUFJLGtEQUFVO0FBQ2QsSUFBSSxrREFBVTtBQUNkO0FBQ0EsSUFBSSxxREFBYTtBQUNqQixJQUFJLGtEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1RoaXMgbW9kdWxlIGlzIHJlc3BvbnNpYmxlIGZvciBET00gbWFuaXB1bGF0aW9uIGFuZCB1cGRhdGluZyB0aGUgSFRNTCBzdHJ1Y3R1cmUgdG8gcmVmbGVjdCBjaGFuZ2VzIGluIHRoZSBydW5uaW5nIGRhdGEuXG5cbi8vVGVzdCBvdXRwdXQgdG8gY29uc29sZVxuZnVuY3Rpb24gY29uc29sZUxvZyhmdW5jTmFtZSwgZnVuYyl7XG4gcmV0dXJuIGNvbnNvbGUubG9nKGZ1bmNOYW1lLCBmdW5jKTtcbn1cblxuZXhwb3J0e1xuICBjb25zb2xlTG9nXG59IiwiLy9UaGlzIG1vZHVsZSBjb250YWlucyB0aGUgY29yZSBsb2dpYywgaW5jbHVkaW5nIHByb2Nlc3NpbmcgdGhlIHJ1bm5pbmcgZGF0YSBhbmQgcGVyZm9ybWluZyBDUlVEIG9wZXJhdGlvbnMuXG5cbi8vQXJyYXkgZm9yIHN0b3JpbmcgZGF0YVxubGV0IHByb2plY3RzX2FyciA9IFtdO1xuXG4vLy0tLS0tLUNvbnN0cnVjdG9yLS0tLS0tXG5mdW5jdGlvbiBQcm9qZWN0KHRpdGxlKXtcbiAgdGhpcy50aXRsZSA9IHRpdGxlXG4gIHRoaXMudGFza3NfYXJyID0gW107XG59O1xuXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUpe1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUudXBkYXRlVGl0bGUgPSBmdW5jdGlvbihuZXdUaXRsZSl7XG4gIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbn07XG5cblRhc2sucHJvdG90eXBlLnVwZGF0ZVRhc2sgPSBmdW5jdGlvbihwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKXtcbiAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG59XG5cbi8vLS0tLS0tQ3JlYXRlLS0tLS0tXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcbiAgcHJvamVjdHNfYXJyLnB1c2gobmV3IFByb2plY3QodGl0bGUpKTtcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhwcm9qZWN0SW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUpe1xuICBwcm9qZWN0c19hcnJbcHJvamVjdEluZGV4XS50YXNrc19hcnIucHVzaChuZXcgVGFzayh0aXRsZSxkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUpKTtcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuLy8tLS0tLS1SZXRyaWV2ZS0tLS0tLVxuZnVuY3Rpb24gcmV0cmlldmVBbGxQcm9qZWN0KCl7XG4gIHByb2plY3RzX2Fycjtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVQcm9qZWN0KHByb2plY3RJbmRleCl7XG4gIHByb2plY3RzX2Fycltwcm9qZWN0SW5kZXhdO1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUFsbFRhc2socHJvamVjdEluZGV4KXtcbiAgcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udGFza3NfYXJyO1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVRhc2socHJvamVjdEluZGV4LCB0YXNrSW5kZXgpe1xuICBwcm9qZWN0c19hcnJbcHJvamVjdEluZGV4XS50YXNrc19hcnJbdGFza0luZGV4XTtcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuLy8tLS0tLS1VcGRhdGUtLS0tLS1cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0SW5kZXgsIG5ld1RpdGxlKXtcbiAgcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udXBkYXRlVGl0bGUobmV3VGl0bGUpO1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrKHByb2plY3RJbmRleCwgdGFza0luZGV4LCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKXtcbiAgcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udGFza3NfYXJyW3Rhc2tJbmRleF0udXBkYXRlVGFzayhwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKVxuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG4vLy0tLS0tLURlbGV0ZS0tLS0tLVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SW5kZXgpe1xuICBwcm9qZWN0c19hcnIuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gIHJldHVybiBwcm9qZWN0c19hcnI7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdEluZGV4LCB0YXNrSW5kZXgpe1xuICBwcm9qZWN0c19hcnJbcHJvamVjdEluZGV4XS50YXNrc19hcnIuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIHJldHVybiBwcm9qZWN0c19hcnI7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRhc2ssIFxuICByZXRyaWV2ZUFsbFByb2plY3QsIHJldHJpZXZlUHJvamVjdCwgcmV0cmlldmVBbGxUYXNrLCByZXRyaWV2ZVRhc2ssXG4gIHVwZGF0ZVByb2plY3RUaXRsZSwgdXBkYXRlVGFzayxcbiAgZGVsZXRlUHJvamVjdCwgZGVsZXRlVGFza1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgXG4gIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRhc2ssXG4gIHJldHJpZXZlQWxsUHJvamVjdCwgcmV0cmlldmVQcm9qZWN0LCByZXRyaWV2ZUFsbFRhc2ssIHJldHJpZXZlVGFzayxcbiAgdXBkYXRlUHJvamVjdFRpdGxlLCB1cGRhdGVUYXNrLFxuICBkZWxldGVQcm9qZWN0LCBkZWxldGVUYXNrXG4gIH0gZnJvbSAnLi9sb2dpYydcbmltcG9ydCB7IGNvbnNvbGVMb2cgfSBmcm9tICcuL2Rpc3BsYXknO1xuXG4vL0lJRkVcbihmdW5jdGlvbiAoKSB7XG4gIC8vUG9wdWxhdGUgdGhlIGluaXRpYWwgUHJvamVjdHMgYW5kIFRhc2tzXG4gIGZ1bmN0aW9uIGluaXREYXRhKCl7XG4gICAgY3JlYXRlUHJvamVjdCgnV29yaycpO1xuICAgIGNyZWF0ZVRhc2soMCwgJ0NvZGluZycsICdBZGQgbmV3IGZlYXR1cmUnLCAnSnVseSAxMywgMjAyMycsICdOb3JtYWwnLCBmYWxzZSk7XG4gICAgY3JlYXRlVGFzaygwLCAnUmVwb3J0JywgJ1Byb3ZpZGUgdGhlIGNoYW5nZWxvZycsICdKdWx5IDE1LCAyMDIzJywgJ0hpZ2gnLCBmYWxzZSk7XG4gIFxuICAgIGNyZWF0ZVByb2plY3QoJ1BlcnNvbmFsJyk7XG4gICAgY3JlYXRlVGFzaygxLCAnQ2FyJywgJ0NoYW5nZSBvaWwnLCAnSnVseSAyNCwgMjAyMycsICdOb25lJywgZmFsc2UpO1xuICB9XG4gIC8vVGVzdCBJSUZFXG4gIGZ1bmN0aW9uIGhlbGxvKCl7XG4gICAgY29uc29sZS5sb2coJ0luaXRpYXRlIElJRkUnKTtcbiAgfVxuICBoZWxsbygpO1xuICBpbml0RGF0YSgpO1xuICAvLyDigKZcbn0pKCk7XG5cbi8vIGNvbnNvbGVMb2cocmV0cmlldmVBbGxQcm9qZWN0Lm5hbWUsIHJldHJpZXZlQWxsUHJvamVjdCgpKTtcbi8vIGNvbnNvbGVMb2cocmV0cmlldmVQcm9qZWN0Lm5hbWUsIHJldHJpZXZlUHJvamVjdCgwKSk7XG4vLyBjb25zb2xlTG9nKHJldHJpZXZlQWxsVGFzay5uYW1lLCByZXRyaWV2ZUFsbFRhc2soMCkpO1xuLy8gY29uc29sZUxvZyhyZXRyaWV2ZVRhc2submFtZSwgcmV0cmlldmVUYXNrKDAsIDEpKTtcbi8vIGNvbnNvbGVMb2codXBkYXRlUHJvamVjdFRpdGxlLm5hbWUsIHVwZGF0ZVByb2plY3RUaXRsZSgwLCdXb3JraW5nJykpO1xuLy8gY29uc29sZUxvZyh1cGRhdGVUYXNrLm5hbWUsIHVwZGF0ZVRhc2soMCwgMSwgJ2Rlc2NyaXB0aW9uJywgJ1N1Ym1pdCB0byBUTCBmb3IgY2hlY2tpbmcnKSk7XG4vLyBjb25zb2xlTG9nKGRlbGV0ZVByb2plY3QubmFtZSwgZGVsZXRlUHJvamVjdCgwKSlcbi8vIGNvbnNvbGVMb2coZGVsZXRlVGFzay5uYW1lLCBkZWxldGVUYXNrKDEsMCkpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=