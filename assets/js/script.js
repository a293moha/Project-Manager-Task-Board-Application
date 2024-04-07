// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")); || [];
let nextId = JSON.parse(localStorage.getItem("nextId")); || 1; 

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let id = nextId;
    nextId++;
    localStorage.setItem("nextId", JSON.stringify(nextId));
    return id;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
   const card = document.createElement("div");
   card.className = "taskCard";
   card.id = `task${task.id}`;
   card.draggable = true;
   return card;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $(function () {
        $('#draggable').draggable();
      });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
    const title = $('#task-title').val().trim;
    const description = $('#task-description').val().trim();
    const dueDate = dayjs($('task-due-date').val()).format(YYYY-MM-DD);
    
    const taskId = generateTaskId();
    const task = {id: taskId, title, description, dueDate};
    taskList.push(task);
    localStorage.setItem("task", JSON.stringify(taskList));
    renderTaskList();
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    taskList = taskList.filter(task => task.id === id);
    localStorage.setItem("taks", JSON.stringify(taskList));
    renderTaskList;
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
//use droppable from jquery
$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
