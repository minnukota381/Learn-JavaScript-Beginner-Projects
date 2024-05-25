function displayTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `
        ${task.text} <span class="badge badge-secondary">${task.time}</span>
        <button class="btn btn-danger btn-sm float-right delete-btn">Delete</button>
      `;
      todoList.appendChild(li);
    });
  }

  // Function to add a new task
  function addTask(text) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const time = new Date().toLocaleString();
    tasks.push({ text, time });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }

  // Function to delete a task
  function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }

  // Event listener for form submission
  document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const text = todoInput.value.trim();
    if (text !== '') {
      addTask(text);
      todoInput.value = '';
    }
  });

  // Event delegation for delete button click
  document.getElementById('todo-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
      deleteTask(index);
    }
  });

  // Initial display of tasks when page loads
  displayTasks();