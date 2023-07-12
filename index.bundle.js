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
/* harmony export */   consoleProject: () => (/* binding */ consoleProject)
/* harmony export */ });
//This module is responsible for DOM manipulation and updating the HTML structure to reflect changes in the running data.

function consoleProject(name){
  console.log(name);
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
/* harmony export */   projects_arr: () => (/* binding */ projects_arr)
/* harmony export */ });
//This module contains the core business logic of your application, including processing the running data and performing CRUD operations.

let projects_arr = [];

function Project(title){
  this.title = title
  this.tasks_arr = [];
};

function Task(title, description, dueDate, priority, isComplete){
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
};

function createProject(title){
  projects_arr.push(new Project(title));
}

function createTask(projectIndex, title, description, dueDate, priority, isComplete){
  projects_arr[projectIndex].tasks_arr.push(new Task(title,description, dueDate, priority, isComplete));
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



(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)('Work');
(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)('Personal');
(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(0, 'Coding', 'Add new feature', 'July 13, 2023', 'Normal', false);
(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(0, 'Report', 'Provide the changelog', 'July 15, 2023', 'High', false);
(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(1, 'Car', 'Change oil', 'July 24, 2023', 'None', false);
(0,_display__WEBPACK_IMPORTED_MODULE_1__.consoleProject)(_logic__WEBPACK_IMPORTED_MODULE_0__.projects_arr);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOZ0U7QUFDckI7O0FBRTNDLHFEQUFhO0FBQ2IscURBQWE7QUFDYixrREFBVTtBQUNWLGtEQUFVO0FBQ1Ysa0RBQVU7QUFDVix3REFBYyxDQUFDLGdEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vVGhpcyBtb2R1bGUgaXMgcmVzcG9uc2libGUgZm9yIERPTSBtYW5pcHVsYXRpb24gYW5kIHVwZGF0aW5nIHRoZSBIVE1MIHN0cnVjdHVyZSB0byByZWZsZWN0IGNoYW5nZXMgaW4gdGhlIHJ1bm5pbmcgZGF0YS5cblxuZnVuY3Rpb24gY29uc29sZVByb2plY3QobmFtZSl7XG4gIGNvbnNvbGUubG9nKG5hbWUpO1xufVxuXG5leHBvcnR7XG4gIGNvbnNvbGVQcm9qZWN0XG59IiwiLy9UaGlzIG1vZHVsZSBjb250YWlucyB0aGUgY29yZSBidXNpbmVzcyBsb2dpYyBvZiB5b3VyIGFwcGxpY2F0aW9uLCBpbmNsdWRpbmcgcHJvY2Vzc2luZyB0aGUgcnVubmluZyBkYXRhIGFuZCBwZXJmb3JtaW5nIENSVUQgb3BlcmF0aW9ucy5cblxubGV0IHByb2plY3RzX2FyciA9IFtdO1xuXG5mdW5jdGlvbiBQcm9qZWN0KHRpdGxlKXtcbiAgdGhpcy50aXRsZSA9IHRpdGxlXG4gIHRoaXMudGFza3NfYXJyID0gW107XG59O1xuXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUpe1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSl7XG4gIHByb2plY3RzX2Fyci5wdXNoKG5ldyBQcm9qZWN0KHRpdGxlKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdEluZGV4LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKXtcbiAgcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udGFza3NfYXJyLnB1c2gobmV3IFRhc2sodGl0bGUsZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKSk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRhc2ssIHByb2plY3RzX2FyclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRhc2ssIHByb2plY3RzX2Fycn0gZnJvbSAnLi9sb2dpYydcbmltcG9ydCB7IGNvbnNvbGVQcm9qZWN0IH0gZnJvbSAnLi9kaXNwbGF5JztcblxuY3JlYXRlUHJvamVjdCgnV29yaycpO1xuY3JlYXRlUHJvamVjdCgnUGVyc29uYWwnKTtcbmNyZWF0ZVRhc2soMCwgJ0NvZGluZycsICdBZGQgbmV3IGZlYXR1cmUnLCAnSnVseSAxMywgMjAyMycsICdOb3JtYWwnLCBmYWxzZSk7XG5jcmVhdGVUYXNrKDAsICdSZXBvcnQnLCAnUHJvdmlkZSB0aGUgY2hhbmdlbG9nJywgJ0p1bHkgMTUsIDIwMjMnLCAnSGlnaCcsIGZhbHNlKTtcbmNyZWF0ZVRhc2soMSwgJ0NhcicsICdDaGFuZ2Ugb2lsJywgJ0p1bHkgMjQsIDIwMjMnLCAnTm9uZScsIGZhbHNlKTtcbmNvbnNvbGVQcm9qZWN0KHByb2plY3RzX2Fycik7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=