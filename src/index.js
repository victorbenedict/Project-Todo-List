/*
Note:
 Save the data by using a timeout 
  Start the timer when the user start typing or modifies the note 
  Reset the time if the user continues to make changes
  Save upon timeout/inactive state
*/


import { 
  createProject, createTask,
  retrieveAllProject, retrieveProject, retrieveProjectTitle, retrieveAllTask, retrieveTask,
  updateProjectTitle, updateTask,
  deleteProject, deleteTask,
  projects_arrLength, tasks_arrLength
  } from './factory'
import { 
  renderDocument,
  renderProject,
  renderTask
  } from './display';

//IIFE
(function () {
  //Populate the initial Projects and Tasks
  function initData(){
    createProject('Work');
    createTask(0, 'Coding', 'Add new feature', 'July 13, 2023', 'Normal', false);
    createTask(0, 'Report', 'Provide the changelog', 'July 15, 2023', 'High', false);
    createTask(0, 'Debug', 'Fix logic model', 'July 16, 2023', 'High', false);

  
    createProject('Personal');
    createTask(1, 'Car', 'Change oil', 'July 24, 2023', 'None', false);
    createTask(1, 'Baby', 'Buy vitamins', 'Today', 'High', false);

    createProject('Toyota Group');
    createTask(2, 'Badges', 'Follow up designers and print', 'July 20, 2023', 'None', false);
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
  for (let i = 0; i < projects_arrLength(); i++){
    renderProject(retrieveProjectTitle(i));
    showTasks(i);
  }
}

function showTasks(projectIndex){
  for (let i = 0; i < tasks_arrLength(projectIndex); i++){
    const arr = retrieveTask(projectIndex, i);
    renderTask(arr);
  }
}

showProjects();
