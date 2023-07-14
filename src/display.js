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

export{
  renderDocument,
  renderProject,
  renderTask
}