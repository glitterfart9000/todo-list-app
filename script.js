console.log("Script started");

function addTask(event) {
    // get user input from text box
    let textbox = document.getElementById("task-input");
    let task = textbox.value;

    createTaskDiv(task);

    // save task to local storage
    localStorage.setItem(taskDiv.id, task);

}

function createTaskDiv(task) {
    // create a list item
    // get todo-list container div
    let todoList = document.getElementById("todo-list");

    // create list-item div
    let taskDiv = document.createElement("div");
    taskDiv.id = "task" + todoList.childElementCount;
    taskDiv.classList.add("list-item");

    // create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + todoList.childElementCount;
    checkbox.addEventListener("change", removeTask);

    // create label
    let label = document.createElement("label");
    label.id = "label" + todoList.childElementCount;
    label.innerText = task;

    // append checkbox to list-item div
    taskDiv.appendChild(checkbox);

    // append label to div
    taskDiv.appendChild(label);

    // append list-item div to the list
    todoList.appendChild(taskDiv);
}

function removeTask(event) {
    // get id of checkbox
    let checkboxId = event.target.id; // e.g. checkbox10

    // get id number from checkbox id
    let idNum = checkboxId.substring(8);

    // get task div by id
    let taskDiv = document.getElementById("task" + idNum);

    // apply animation
    taskDiv.classList.add("remove-task");

    // remove the task div from layout
    setTimeout(function() {
        taskDiv.remove();
    }, 1000);
}

function loadTasks() {
    console.log("Loading tasks");
    // get each task from local storage
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let task = localStorage.getItem(key);
        console.log(task);
    }

    // create task divs for each task
}

loadTasks();