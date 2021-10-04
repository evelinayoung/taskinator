var formEL = document.querySelector("#task-form");
var tasksTODoEl = document.querySelector("#task-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "this is a new task.";
    taskToDoEl.appendChild(listItemEl);
};

formEL.addEventListener("submit" , createTaskHandler);