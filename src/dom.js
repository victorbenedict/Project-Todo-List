import {
  planArray,
  addPlan,
  addTask,
  editTaskName,
  editNotes,
  editDuedate,
  editPriority,
  deletePlan,
  deleteTask,
  setData,
} from './dataFactory';


// DOM
const planList = document.getElementById('plan');
const taskSection = document.getElementById('task');
const detailSection = document.getElementById('detail')
const btn_newPlan = document.getElementById('btn_newPlan')

// render plans
function renderPlans(){
  planList.innerHTML = ""
  taskSection.innerHTML = ""
  detailSection.innerHTML = ""
  planArray.forEach((plan, planIndex) => {
    
    const planListItem = document.createElement('li');
    const btn_delete = document.createElement('button')
    planListItem.textContent = plan.name;
    planListItem.onclick = () => {
      renderTaskSection(planIndex)
    };
    btn_delete.textContent = 'delete'
    btn_delete.onclick = () => {
      deletePlan(planIndex)
      renderPlans()
    }
    planList.appendChild(planListItem);
    planList.appendChild(btn_delete)
  });
}

 // render tasks and delete task button
function renderTaskSection(planIndex) {
  taskSection.innerHTML = ""
  detailSection.innerHTML = ""
  const taskArr = planArray[planIndex].task_array
  const btn_newTask = document.createElement('button')
  btn_newTask.textContent = 'New Task'
  btn_newTask.onclick = () => {
    newTask(planIndex)
  }
  taskSection.appendChild(btn_newTask)
  taskArr.forEach((task, taskIndex) => {
    const taskInput = document.createElement('input')
    const btn_delete = document.createElement('button')

    taskInput.type = Text
    taskInput.value = task.name
    taskInput.readOnly = true
    taskInput.onclick = () => {
      renderDetails(planIndex, taskIndex)
    }
    taskInput.ondblclick = () => {
      taskInput.readOnly = false
    }
    taskInput.onblur = () => {
      taskInput.readOnly = true
    }
    taskInput.oninput = () => {
      editTaskName(planIndex, taskIndex, taskInput.value)
    }
    btn_delete.textContent = 'delete'
    btn_delete.onclick = () => {
      deleteTask(planIndex, taskIndex)
      renderTaskSection(planIndex)
    }
    taskSection.appendChild(taskInput)
    taskSection.appendChild(btn_delete)
  })
}

// render task details
function renderDetails(planIndex, taskIndex) {
  detailSection.innerHTML = ""
  const taskItem = planArray[planIndex].task_array[taskIndex]
  const notesLabel = document.createElement('label')
  const notes = document.createElement('input')
  const dueDateLabel = document.createElement('label')
  const dueDate = document.createElement('input')
  const priorityLabel = document.createElement('label')
  const priority = document.createElement('select')
  const priorityOptionValues = ['None', 'Low', 'Medium', 'High'];
  notesLabel.textContent = 'Notes'
  notes.type = Text
  notes.value = taskItem.notes
  notes.oninput = () => {
    editNotes(planIndex, taskIndex, notes.value)
  }
  dueDateLabel.textContent = 'Due Date'
  dueDate.type = 'date'
  dueDate.value = taskItem.dueDate
  dueDate.onchange = () => {
    editDuedate(planIndex, taskIndex, dueDate.value)
  }
  priorityLabel.textContent = 'Priority'
  for (const value of priorityOptionValues){
    const option = document.createElement('option');
    option.value = value;
    option.text = value;
    priority.appendChild(option);
  }
  priority.value = taskItem.priority
  priority.onchange = () => {
    editPriority(planIndex, taskIndex, priority.value)
  }
  detailSection.appendChild(notesLabel)
  detailSection.appendChild(notes)
  detailSection.appendChild(dueDateLabel)
  detailSection.appendChild(dueDate)
  detailSection.appendChild(priorityLabel)
  detailSection.appendChild(priority)
}

// New plan button
btn_newPlan.addEventListener('click', () => {
  const userInput = window.prompt("New Plan:");
  if (userInput !== null) {
    if (userInput.trim() !== "") {
      addPlan(userInput);
      renderPlans();
    } else {
      window.alert("No input provided.");
    }
  }
});

// new task button
function newTask(planIndex) {
  const userInput = window.prompt("New Task:");
  if (userInput !== null){
    if (userInput.trim() !== "") {
      addTask(planIndex, userInput, '')
      renderTaskSection(planIndex)
    } else {
      window.alert("No input provided.");
    }
  }
}

// populate the local data when closing/refreshing the document


// export to index.js
export function initializeDOM(){
  renderPlans();
  window.addEventListener('beforeunload', function (event) {
  setData();
  });
};

export function testDom() {
}
