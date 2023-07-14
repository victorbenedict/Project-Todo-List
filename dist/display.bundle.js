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
  !*** ./src/display.js ***!
  \************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsTUFBTTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLFVBQVU7QUFDckQsaURBQWlELFVBQVU7QUFDM0QsNkNBQTZDLFVBQVU7QUFDdkQsOENBQThDLFVBQVU7QUFDeEQsZ0RBQWdELFVBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vVGhpcyBtb2R1bGUgaXMgcmVzcG9uc2libGUgZm9yIERPTSBtYW5pcHVsYXRpb24gYW5kIHVwZGF0aW5nIHRoZSBIVE1MIHN0cnVjdHVyZSB0byByZWZsZWN0IGNoYW5nZXMgaW4gdGhlIHJ1bm5pbmcgZGF0YS5cblxuLypcblxucmVuZGVyIHRoZSBjb250YWluZXJzXG5yZW5kZXIgdGhlIGFkZCBwcm9qZWN0L3Rhc2sgYnV0dG9ucyBcbjEgY29sdW1uIGRlc2lnbiBmb3IgZWFzeSBodG1sL2Nzc1xuXG4tLS1Qcm9qZWN0IFRpdGxlLS0tXG4tLS0tVGFzayBUaXRsZS0tLS0tXG4tLS0tRGVzY3JpcHRpb24tLS0tXG4tLS0tRHVlRGF0ZS0tLS0tLS0tXG4tLS0tUHJpb3JpdHktLS0tLS0tXG4tLS0tU3RhdHVzLS0tLS0tLS0tXG5cblxuVXNlIGlucHV0IHRhZyBmb3IgdGl0bGVzIGFuZCBkZXNjcmlwdGlvblxuVGVtcG9yYXJpbHkgdXNlIGlucHV0IHRhZyBmb3IgZHVlRGF0ZVxuVXNlIGRyb3Bkb3duIGZvciBwcmlvcml0eVxuVXNlIGNoZWNrYm94IGlzQ29tcGxldGVcblxuKi9cblxuLy9UZXN0IG91dHB1dCB0byBjb25zb2xlXG5mdW5jdGlvbiByZW5kZXJEb2N1bWVudCgpe1xuICBkb2N1bWVudC5ib2R5Lm9ubG9hZCA9IHJlbmRlclByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnQoKXtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5ld0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnSGVsbG8gRE9NIScpO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3Q29udGVudCk7XG4gIGNvbnN0IGN1cnJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2MScpO1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShuZXdEaXYsIGN1cnJlbnREaXYpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KHRpdGxlKXtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3RpdGxlfWApO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgY29uc3QgY3VycmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcuZGl2MScpO1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShuZXdEaXYsIGN1cnJlbnREaXYpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrKGFycmF5KXtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7YXJyYXlbMF19IHwgYCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7YXJyYXlbMV19IHwgYCk7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHthcnJheVsyXX0gfCBgKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHthcnJheVszXX0gfCBgKTtcbiAgY29uc3QgaXNDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2FycmF5WzRdfSB8IGApO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChpc0NvbXBsZXRlKTtcbiAgY29uc3QgY3VycmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcuZGl2MScpO1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShuZXdEaXYsIGN1cnJlbnREaXYpO1xufVxuXG5leHBvcnR7XG4gIHJlbmRlckRvY3VtZW50LFxuICByZW5kZXJQcm9qZWN0LFxuICByZW5kZXJUYXNrXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9