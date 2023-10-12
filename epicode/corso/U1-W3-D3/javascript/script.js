document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task-button");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText !== "") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      li.appendChild(p);
      p.textContent = taskText;
      li.addEventListener("click", function () {
        p.classList.toggle("line-through");
        li.classList.toggle("checked");
      });

      const deleteButton = document.createElement("i");
      deleteButton.classList.add("fas", "fa-times");
      deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
      });

      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = "";
    }
  });
});
