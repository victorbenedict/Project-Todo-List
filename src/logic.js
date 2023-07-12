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

export {
  createProject, createTask, projects_arr
};