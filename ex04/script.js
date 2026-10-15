const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");
const taskCountDisplay = document.getElementById("task-count");

let taskCount = 0;

function updateTaskCount() {
    taskCountDisplay.textContent = taskCount;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("li");
    const taskLabel = document.createElement("span");
    const deleteButton = document.createElement("button");

    taskLabel.textContent = taskText;
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    taskLabel.addEventListener("click", function () {
        taskLabel.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        taskItem.remove();
        taskCount = taskCount - 1;
        updateTaskCount();
    });

    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskCount = taskCount + 1;
    updateTaskCount();

    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});