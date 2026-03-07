// Références aux éléments
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");
var taskCounter = document.getElementById("taskCounter");
var clearBtn = document.getElementById("clearBtn")
var todos = document(localStorage.getItem("todos")) || [];

// Fonction pour afficher les tâches
function displayTasks() {
    // Supprimer toutes les tâches existantes
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
        
    }

    todos.forEach(function(task) {
        var li = document.createElement("li");
        li.textContent = task.value + " (créé le " + task.date + ")";

        if (task.completed) {
            li.classList.add("completed");
        }

        // Clic pour marquer comme completed
        li.addEventListener("click", function() {
            task.completed = !task.completed;
            saveTasks();
            displayTasks();
        });

        // Bouton supprimer
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        deleteBtn.className = "deleteBtn";
        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation(); // éviter toggle completed
            todos = todos.filter(function(t) {
                return t.id !== task.id;
            });
            saveTasks();
            displayTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Ajouter une tâche
addBtn.addEventListener("click", function() {
    var taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("Veuillez entrer une tâche !");
        return;
    }

    var task = {
        id: Date.now(),
        value: taskValue,
        date: new Date().toLocaleDateString(),
        completed: false
    };

    todos.push(task);
    saveTasks();
    displayTasks();
    taskInput.value = "";
});

// Sauvegarder dans localStorage
function saveTasks() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Afficher les tâches au chargement
displayTasks();

function displayTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    todos.forEach(function(task) {
        var li = document.createElement("li");
        li.textContent = task.value + " (créé le " + task.date + ")";

        if (task.completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", function() {
            task.completed = !task.completed;
            saveTasks();
            displayTasks();
        });

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        deleteBtn.className = "deleteBtn";
        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            todos = todos.filter(function(t) {
                return t.id !== task.id;
            });
            saveTasks();
            displayTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    updateCounter(); // mettre à jour le compteur
}
clearBtn.addEventListener("click", function() {
    if (todos.length === 0) return; // rien à faire si liste vide

    if (confirm("Voulez-vous vraiment supprimer toutes les tâches ?")) {
        todos = [];           
        saveTasks();          
        displayTasks();       
    }
});
function displayTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    todos.forEach(function(task) {
        var li = document.createElement("li");
        li.textContent = task.value + " (créé le " + task.date + ")";

        if (task.completed) {
            li.classList.add("completed");
        }
        li.addEventListener("click", function() {
            task.completed = !task.completed;
            saveTasks();
            displayTasks();
        });

        
        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", function(e) {
            e.stopPropagation(); 

            
            var input = document.createElement("input");
            input.type = "text";
            input.value = task.value;

            li.textContent = ""; // vider le li
            li.appendChild(input);

           
            var saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.addEventListener("click", function() {
                if (input.value.trim() !== "") {
                    task.value = input.value.trim();
                    saveTasks();
                    displayTasks();
                } else {
                    alert("La tâche ne peut pas être vide !");
                }
            });

            li.appendChild(saveBtn);
        });

        // Bouton Supprimer
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            todos = todos.filter(function(t) {
                return t.id !== task.id;
            });
            saveTasks();
            displayTasks();
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    taskCounter.textContent = "Tasks: " + todos.length;
}
var sortBtn = document.getElementById("sortBtn");

sortBtn.addEventListener("click", function() {
    todos.sort(function(a, b) {
        return b.id - a.id;
    });
    displayTasks(); 
});
function saveTasks() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Affichage initial
displayTasks();