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
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2ZhY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL1RoaXMgbW9kdWxlIGNvbnRhaW5zIHRoZSBjb3JlIGxvZ2ljLCBpbmNsdWRpbmcgcHJvY2Vzc2luZyB0aGUgcnVubmluZyBkYXRhIGFuZCBwZXJmb3JtaW5nIENSVUQgb3BlcmF0aW9ucy5cblxuLy9BcnJheSBmb3Igc3RvcmluZyBkYXRhXG5sZXQgcHJvamVjdHNfYXJyID0gW107XG5cblxuLy8tLS0tLS1Db25zdHJ1Y3Rvci0tLS0tLVxuZnVuY3Rpb24gUHJvamVjdCh0aXRsZSl7XG4gIHRoaXMudGl0bGUgPSB0aXRsZVxuICB0aGlzLnRhc2tzX2FyciA9IFtdO1xufTtcblxuZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKXtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5pc0NvbXBsZXRlID0gaXNDb21wbGV0ZTtcbn07XG5cblByb2plY3QucHJvdG90eXBlLnVwZGF0ZVRpdGxlID0gZnVuY3Rpb24obmV3VGl0bGUpe1xuICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG59O1xuXG5UYXNrLnByb3RvdHlwZS51cGRhdGVUYXNrID0gZnVuY3Rpb24ocHJvcGVydHlOYW1lLCBuZXdWYWx1ZSl7XG4gIHRoaXNbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xufVxuXG4vLy0tLS0tLUNyZWF0ZS0tLS0tLVxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSl7XG4gIHByb2plY3RzX2Fyci5wdXNoKG5ldyBQcm9qZWN0KHRpdGxlKSk7XG4gIHJldHVybiBwcm9qZWN0c19hcnI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdEluZGV4LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKXtcbiAgcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udGFza3NfYXJyLnB1c2gobmV3IFRhc2sodGl0bGUsZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKSk7XG4gIHJldHVybiBwcm9qZWN0c19hcnI7XG59XG5cbi8vLS0tLS0tUmV0cmlldmUtLS0tLS1cbmZ1bmN0aW9uIHJldHJpZXZlQWxsUHJvamVjdCgpe1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVByb2plY3QocHJvamVjdEluZGV4KXtcbiAgcmV0dXJuICBwcm9qZWN0c19hcnJbcHJvamVjdEluZGV4XTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVQcm9qZWN0VGl0bGUocHJvamVjdEluZGV4KXtcbiAgcmV0dXJuIHByb2plY3RzX2Fycltwcm9qZWN0SW5kZXhdLnRpdGxlO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUFsbFRhc2socHJvamVjdEluZGV4KXtcbiAgcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udGFza3NfYXJyO1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVRhc2socHJvamVjdEluZGV4LCB0YXNrSW5kZXgpe1xuICBjb25zdCB0YXNrT2JqZWN0ID0gcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udGFza3NfYXJyW3Rhc2tJbmRleF1cbiAgbGV0IF90YXNrc19hcnIgPSBbXTtcbiAgICBfdGFza3NfYXJyLnB1c2godGFza09iamVjdC50aXRsZSk7XG4gICAgX3Rhc2tzX2Fyci5wdXNoKHRhc2tPYmplY3QuZGVzY3JpcHRpb24pO1xuICAgIF90YXNrc19hcnIucHVzaCh0YXNrT2JqZWN0LmR1ZURhdGUpO1xuICAgIF90YXNrc19hcnIucHVzaCh0YXNrT2JqZWN0LnByaW9yaXR5KTtcbiAgICBfdGFza3NfYXJyLnB1c2godGFza09iamVjdC5pc0NvbXBsZXRlKTtcbiAgcmV0dXJuIF90YXNrc19hcnI7XG59XG5cbi8vLS0tLS0tVXBkYXRlLS0tLS0tXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdEluZGV4LCBuZXdUaXRsZSl7XG4gIHByb2plY3RzX2Fycltwcm9qZWN0SW5kZXhdLnVwZGF0ZVRpdGxlKG5ld1RpdGxlKTtcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFzayhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSl7XG4gIHByb2plY3RzX2Fycltwcm9qZWN0SW5kZXhdLnRhc2tzX2Fyclt0YXNrSW5kZXhdLnVwZGF0ZVRhc2socHJvcGVydHlOYW1lLCBuZXdWYWx1ZSlcbiAgcmV0dXJuIHByb2plY3RzX2Fycjtcbn1cblxuLy8tLS0tLS1EZWxldGUtLS0tLS1cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdEluZGV4KXtcbiAgcHJvamVjdHNfYXJyLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3RJbmRleCwgdGFza0luZGV4KXtcbiAgcHJvamVjdHNfYXJyW3Byb2plY3RJbmRleF0udGFza3NfYXJyLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICByZXR1cm4gcHJvamVjdHNfYXJyO1xufVxuXG4vLy0tLS0tLU1pc2MtLS0tLS1cbmZ1bmN0aW9uIHByb2plY3RzX2Fyckxlbmd0aCgpe1xuICByZXR1cm4gcHJvamVjdHNfYXJyLmxlbmd0aCA7XG4gfVxuXG4gZnVuY3Rpb24gdGFza3NfYXJyTGVuZ3RoKHByb2plY3RJbmRleCl7XG4gIHJldHVybiBwcm9qZWN0c19hcnJbcHJvamVjdEluZGV4XS50YXNrc19hcnIubGVuZ3RoO1xuIH1cblxuZXhwb3J0IHtcbiAgY3JlYXRlUHJvamVjdCwgY3JlYXRlVGFzaywgXG4gIHJldHJpZXZlQWxsUHJvamVjdCwgcmV0cmlldmVQcm9qZWN0LCByZXRyaWV2ZVByb2plY3RUaXRsZSwgcmV0cmlldmVBbGxUYXNrLCByZXRyaWV2ZVRhc2ssXG4gIHVwZGF0ZVByb2plY3RUaXRsZSwgdXBkYXRlVGFzayxcbiAgZGVsZXRlUHJvamVjdCwgZGVsZXRlVGFzayxcbiAgcHJvamVjdHNfYXJyTGVuZ3RoLCB0YXNrc19hcnJMZW5ndGhcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=