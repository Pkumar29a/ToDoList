function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const newTask = document.createElement("li");
        const checkbox = document.createElement("input");
        const task = document.createElement("span");
        const deleteButton = document.createElement("button");

        checkbox.type = "checkbox";
        task.textContent = taskText;
        deleteButton.textContent = "Delete";

        checkbox.addEventListener("change", function () {
            task.classList.toggle("completed-task");
        });

        deleteButton.addEventListener("click", function () {
            taskList.removeChild(newTask);
            updateTaskCount();
        });

        newTask.appendChild(checkbox);
        newTask.appendChild(task);
        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);
        taskInput.value = "";
        updateTaskCount();
    }
}

function updateTaskCount() {
    const taskCount = document.getElementById("task-count");
    const taskList = document.getElementById("task-list");
    taskCount.textContent = taskList.children.length;
}
