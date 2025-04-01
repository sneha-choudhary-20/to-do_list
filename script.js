document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Theme Toggle Functionality
document.querySelector(".toggle-switch").addEventListener("click", function() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Load Theme on Refresh
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    let taskHeading = document.getElementById("taskHeading");

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    // Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.onclick = function() {
        if (checkbox.checked) {
            taskSpan.classList.add("completed");
        } else {
            taskSpan.classList.remove("completed");
        }
    };

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.className = "task-text";  // Added class for alignment

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = function() {
        li.remove();
        checkTaskList();
    };

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);

    // Show the "Your Tasks" heading only if tasks exist
    taskHeading.classList.remove("hidden");

    taskInput.value = "";
}

function checkTaskList() {
    let taskList = document.getElementById("taskList");
    let taskHeading = document.getElementById("taskHeading");

    // If no tasks are left, hide the heading
    if (taskList.children.length === 0) {
        taskHeading.classList.add("hidden");
    }
}
