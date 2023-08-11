
let planArray = [];

// Constructor functions
function Plan(name) {
  this.name = name;
  this.task_array = [];
}

function Task(name, notes, dueDate, priority) {
  this.name = name;
  this.notes = notes;
  this.dueDate = dueDate;
  this.priority = priority;
}

// Add to planArray
function addPlan(name) {
  planArray.push(new Plan(name));
}

function addTask(planIndex, name, notes, dueDate, priority) {
  planArray[planIndex].task_array.push(new Task(name, notes, dueDate, priority))
}

// edit
function editTaskName(planIndex, taskIndex, newTaskName) {
  planArray[planIndex].task_array[taskIndex].name = newTaskName
}

function editNotes(planIndex, taskIndex, newNotes) {
  planArray[planIndex].task_array[taskIndex].notes = newNotes
}

function editDuedate(planIndex, taskIndex, newDuedate) {
  planArray[planIndex].task_array[taskIndex].dueDate = newDuedate
}

function editPriority(planIndex, taskIndex, newPriority) {
  planArray[planIndex].task_array[taskIndex].priority = newPriority
}

// delete
function deletePlan(planIndex) {
  planArray.splice(planIndex, 1)
}

function deleteTask(planIndex, taskIndex) {
  planArray[planIndex].task_array.splice(taskIndex, 1)
}

// Premade data
function premadeData() {
  addPlan('Plan A')
  addPlan('Plan B')
  addPlan('Plan C')
  addTask(0, 'Task1', 'Sunt deserunt minim pariatur cillum esse quis incididunt adipisicing consectetur aliqua.', '2023-08-11', 'High')
  addTask(0, 'Task2', 'Commodo exercitation est sunt adipisicing occaecat excepteur eu pariatur nisi cupidatat.', '2023-08-12', 'Medium')
  addTask(1, 'Task1000', 'Lorem sit ullamco et ea consectetur ut velit ea id velit adipisicing dolore ad.', '2023-08-13', 'Low')
}

// local data
function setData() {
  localStorage.setItem("plan", JSON.stringify(planArray))
}

function getData() {
  return JSON.parse(localStorage.getItem("plan"))
}

function initalizeData() {
  const a = JSON.parse(localStorage.getItem("plan"))
  // check if there is an array or the array is empty
  if (!a || a.length == 0) {
    // if nothing, fill with premade data
    premadeData()
  } else {
    // get local data
    planArray = getData()
  }
}