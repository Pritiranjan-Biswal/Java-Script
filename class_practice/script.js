const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Completed";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Not Completed";


    completeBtn.addEventListener('click', function () {
        li.remove();
    });

    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    const div = document.createElement('div');
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(div);

    taskList.appendChild(li);

    input.value = "";
}