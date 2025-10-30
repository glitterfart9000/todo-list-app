console.log("Script started");

function addTask(event) {
    // get user input from text box
    let textbox = document.getElementById("task-input");
    let task = textbox.value;
    console.log(task);

    // create a list item
    // get todo-list container div
    let todoList = document.getElementById("todo-list");

    // create list-item div
    let listDiv = document.createElement("div");
    listDiv.id = "task" + todoList.childElementCount;
    listDiv.classList.add("list-item");

    // create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + todoList.childElementCount;

    // create label
    let label = document.createElement("label");
    label.id = "label" + todoList.childElementCount;
    label.innerText = task;

    // append checkbox to list-item div
    listDiv.appendChild(checkbox);

    // append label to div
    listDiv.appendChild(label);

    // append list-item div to the list
    todoList.appendChild(listDiv);
}