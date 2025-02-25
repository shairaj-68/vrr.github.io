document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const apiUrl = "https://example.com/api/add-task"; 
    addTaskButton.addEventListener("click", function () {
        const task = taskInput.value.trim();
        if (task) {
            const taskItem = document.createElement("li");
            taskItem.textContent = task;
            taskList.appendChild(taskItem);
            sendTaskToWebsite(task);
            taskInput.value = "";
        } else {
            alert("Please enter a task before adding.");
        }
    });
    async function sendTaskToWebsite(task) {
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ task: task }),
            });

            if (response.ok) {
                alert("Task successfully sent to the other website!");
            } else {
                alert("Failed to send task. Please try again.");
            }
        } catch (error) {
            console.error("Error sending task:", error);
            alert("An error occurred while sending the task.");
        }
    }
});
