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

export {
  createProject, createTask, 
  retrieveAllProject, retrieveProject, retrieveAllTask, retrieveTask,
  updateProjectTitle, updateTask,
  deleteProject, deleteTask
}