document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('task-input');
    const toast = document.querySelector('.toast');
  
    taskForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const task = taskInput.value.trim();
  
      if(task === '') {
        showToast('Add a valid task.');
        return;
      }
  
      addTask(task);
      taskInput.value = '';
      saveTasks();
    });
  
    taskList.addEventListener('click', function(e) {
      if(e.target.classList.contains('delete-task')) {
        deleteTask(e.target.parentElement);
      } else {
        toggleComplete(e.target);
      }
      saveTasks();
    });
  
    function addTask(task) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = task;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-task btn btn-danger btn-sm float-right';
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      showToast('Task added.', 'success');
    }
  
    function deleteTask(taskItem) {
      taskList.removeChild(taskItem);
      showToast('Task deleted.', 'danger');
    }
  
    function toggleComplete(taskItem) {
      taskItem.classList.toggle('is-complete');
      showToast('Task updated.', 'success');
    }
  
    function showToast(message, type = 'warning') {
      const toastContainer = document.querySelector('.toast');
      toastContainer.textContent = message;
      toastContainer.classList.add(`toast-${type}`);
      toastContainer.classList.add('show');
    
      setTimeout(() => {
        toastContainer.classList.remove('show');
      }, 3000);
    }
  
    function saveTasks() {
      const tasks = [];
      taskList.querySelectorAll('.list-group-item').forEach(function(taskItem) {
        tasks.push({ task: taskItem.textContent, completed: taskItem.classList.contains('is-complete') });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(function(task) {
        addTask(task.task);
        if(task.completed) {
          const taskItem = taskList.querySelector(`li:contains('${task.task}')`);
          taskItem.classList.add('is-complete');
        }
      });
    }
  
    loadTasks();
  });
  