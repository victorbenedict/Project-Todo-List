import { 
  createProject, createTask,
  retrieveAllProject, retrieveProject, retrieveAllTask, retrieveTask,
  updateProjectTitle, updateTask,
  deleteProject, deleteTask
  } from './logic'
import { consoleLog } from './display';

//IIFE
(function () {
  //Populate the initial Projects and Tasks
  function initData(){
    createProject('Work');
    createTask(0, 'Coding', 'Add new feature', 'July 13, 2023', 'Normal', false);
    createTask(0, 'Report', 'Provide the changelog', 'July 15, 2023', 'High', false);
  
    createProject('Personal');
    createTask(1, 'Car', 'Change oil', 'July 24, 2023', 'None', false);
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
