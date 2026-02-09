function addTask()
{
    let taskInput = document.getElementById("taskInput");
    let taskTest = taskInput.value.trim();   // FIX

    if (taskTest === "")
    {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");   // FIX
    li.className = "list-group-item";

    let span = document.createElement("span");
    span.className = "task-text";             // FIX (matched with CSS)
    span.innerHTML = taskTest;

    let completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-success btn-small";
    completeBtn.innerText = "Done";
    completeBtn.onclick = function(){
        span.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-small";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function(){
        li.remove();                          // FIX
    };

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li); // FIX
    taskInput.value = "";
}