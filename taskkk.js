
document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
    const totalTasks = document.getElementById("total-tasks");
    const completedTasks = document.getElementById("completed-tasks");

    let tasks = [];

    
    function updateAnalytics() {
        totalTasks.textContent = tasks.length;
        completedTasks.textContent = tasks.filter(task => task.completed).length;
    }


    function renderTasks() {
        taskList.innerHTML = ""; 
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.className = task.completed ? "completed" : "";
            li.innerHTML = `
          <div>
            <strong>${task.title}</strong> - ${task.date} (${task.priority})
            <p>${task.description}</p>
          </div>
          <div>
            <button class="complete-btn" data-index="${index}">${task.completed ? "Undo" : "Complete"}</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
          </div>
        `;
            taskList.appendChild(li);
        });
        updateAnalytics();
    }

    
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("task-title").value;
        const description = document.getElementById("task-desc").value;
        const date = document.getElementById("task-date").value;
        const priority = document.getElementById("task-priority").value;

        const newTask = { title, description, date, priority, completed: false };
        tasks.push(newTask);

        taskForm.reset(); 
        renderTasks();
    });

    
    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const index = e.target.getAttribute("data-index");
            tasks.splice(index, 1); 
            renderTasks();
        } else if (e.target.classList.contains("complete-btn")) {
            const index = e.target.getAttribute("data-index");
            tasks[index].completed = !tasks[index].completed; 
            renderTasks();
        }
    });

    
    renderTasks();
});