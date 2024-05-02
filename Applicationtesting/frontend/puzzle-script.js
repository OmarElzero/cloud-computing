// JavaScript code for the Simple To-Do App
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var taskText = taskInput.value;
    var li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
