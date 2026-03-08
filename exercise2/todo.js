

var input = document.createElement("input");
input.placeholder = "Nouvelle tâche";
input.type = "text";


var addBtn = document.createElement("button");
addBtn.textContent = "Add";


var taskCounter = document.createElement("p");
taskCounter.id = "task-counter";
taskCounter.textContent = "Tasks: 0";


var taskList = document.createElement("ul");
taskList.id = "task-list";

document.body.appendChild(input);
document.body.appendChild(addBtn);
document.body.appendChild(taskCounter);
document.body.appendChild(taskList);


var todos = [];


function updateCounter() {
    taskCounter.textContent = "Tasks: " + todos.length;
}


addBtn.addEventListener("click", function() {
    var taskText = input.value.trim();
    if (taskText === "") return; 

  
    var task = {
        id: todos.length + 1,
        value: taskText,
        date: new Date().toISOString().split("T")[0],
        completed: false
    };

    todos.push(task);

    
    var li = document.createElement("li");
    li.textContent = task.value + " - " + task.date;

    
    var completeBtn = document.createElement("button");
    completeBtn.textContent = "completed";
    completeBtn.addEventListener("click", function() {
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.6";
        task.completed = true;
        ;
    });

    li.appendChild(completeBtn);
    taskList.appendChild(li);

  
    input.value = "";

   
    updateCounter();
});


var clearBtn = document.createElement("button");
clearBtn.textContent = "Clear All";
document.body.appendChild(clearBtn);


clearBtn.addEventListener("click", function() {
   
    var taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; 

   
    todos = [];

  
    var taskCounter = document.getElementById("task-counter");
    taskCounter.textContent = "Tasks: 0";
});

var li = document.createElement("li");
li.textContent = "Apprendre JS";

var editBtn = document.createElement("button");
editBtn.textContent = "Edit";

editBtn.addEventListener("click", function() {
   
    li.textContent = "Apprendre JS";
});

editBtn.addEventListener("click", function() {
    var input = document.createElement("input");
    input.value = li.textContent;
    li.textContent = ""; 
    li.appendChild(input);
    
});

var tasks=["apprendrehtml","apprendrecss","apprendrejs"]

localStorage.setItem("tasks",JSON.stringify("tasks"))
JSON.parse(localStorage.getItem("tasks"))
console.log(tasks)