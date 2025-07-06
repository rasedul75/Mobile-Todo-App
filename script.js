document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const list = document.getElementById("todo-list");

  addBtn.addEventListener("click", addTask);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const taskText = input.value.trim();
    if (!taskText) return;

    const li = document.createElement("li");
    li.className = "list-group-item";

    const span = document.createElement("span");
    span.textContent = taskText;
    span.style.flex = "1";

    const btnGroup = document.createElement("div");
    btnGroup.className = "todo-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✅";
    completeBtn.title = "Mark complete";
    completeBtn.onclick = () => {
      li.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.title = "Delete task";
    deleteBtn.onclick = () => {
      list.removeChild(li);
    };

    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    list.appendChild(li);

    input.value = "";
  }
});
