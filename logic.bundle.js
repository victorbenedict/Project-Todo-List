/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9UaGlzIG1vZHVsZSBjb250YWlucyB0aGUgY29yZSBsb2dpYywgaW5jbHVkaW5nIHByb2Nlc3NpbmcgdGhlIHJ1bm5pbmcgZGF0YSBhbmQgcGVyZm9ybWluZyBDUlVEIG9wZXJhdGlvbnMuXG5cbi8vQXJyYXkgZm9yIHN0b3JpbmcgZGF0YVxubGV0IHByb2plY3RzX2FyciA9IFtdO1xuXG4vLy0tLS0tLUNvbnN0cnVjdG9yLS0tLS0tXG5mdW5jdGlvbiBQcm9qZWN0KHRpdGxlKXtcbiAgdGhpcy50aXRsZSA9IHRpdGxlXG4gIHRoaXMudGFza3NfYXJyID0gW107XG59O1xuXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUpe1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUudXBkYXRlVGl0bGUgPSBmdW5jdGlvbihuZXdUaXRsZSl7XG4gIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbn07XG5cblRhc2sucHJvdG90eXBlLnVwZGF0ZVRhc2sgPSBmdW5jdGlvbihwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKXtcbiAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG59XG5cbi8vLS0tLS0tQ3JlYXRlLS0tLS0tXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcbiAgcHJvamVjdHNfYXJyLnB1c2gobmV3IFByb2plY3QodGl0bGUpKTtcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhwcm9qZWN0SW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUpe1xuICBwcm9qZWN0c19hcnJbcHJvamVjdEluZGV4XS50YXNrc19hcnIucHVzaChuZXcgVGFzayh0aXRsZSxkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUpKTtcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuLy8tLS0tLS1SZXRyaWV2ZS0tLS0tLVxuZnVuY3Rpb24gcmV0cmlldmVBbGxQcm9qZWN0KCl7XG4gIHByb2plY3RzX2Fycjtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVQcm9qZWN0KHByb2plY3RJbmRleCl7XG4gIHByb2plY3RzX2Fycltwcm9qZWN0SW5kZXhdO1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUFsbFRhc2socHJvamVjdEluZGV4KXtcbiAgcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udGFza3NfYXJyO1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVRhc2socHJvamVjdEluZGV4LCB0YXNrSW5kZXgpe1xuICBwcm9qZWN0c19hcnJbcHJvamVjdEluZGV4XS50YXNrc19hcnJbdGFza0luZGV4XTtcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuLy8tLS0tLS1VcGRhdGUtLS0tLS1cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0SW5kZXgsIG5ld1RpdGxlKXtcbiAgcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udXBkYXRlVGl0bGUobmV3VGl0bGUpO1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrKHByb2plY3RJbmRleCwgdGFza0luZGV4LCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKXtcbiAgcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udGFza3NfYXJyW3Rhc2tJbmRleF0udXBkYXRlVGFzayhwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKVxuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG4vLy0tLS0tLURlbGV0ZS0tLS0tLVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SW5kZXgpe1xuICBwcm9qZWN0c19hcnIuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gIHJldHVybiBwcm9qZWN0c19hcnI7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdEluZGV4LCB0YXNrSW5kZXgpe1xuICBwcm9qZWN0c19hcnJbcHJvamVjdEluZGV4XS50YXNrc19hcnIuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIHJldHVybiBwcm9qZWN0c19hcnI7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRhc2ssIFxuICByZXRyaWV2ZUFsbFByb2plY3QsIHJldHJpZXZlUHJvamVjdCwgcmV0cmlldmVBbGxUYXNrLCByZXRyaWV2ZVRhc2ssXG4gIHVwZGF0ZVByb2plY3RUaXRsZSwgdXBkYXRlVGFzayxcbiAgZGVsZXRlUHJvamVjdCwgZGVsZXRlVGFza1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==