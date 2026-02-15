// JavaScript functionality for the Todo List Application

// Selectors
const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-todo');
const todoList = document.querySelector('#todo-list');

// Event Listeners
addButton.addEventListener('click', addTodo);

// Functions
function addTodo() {
    const todoText = todoInput.value;
    if (todoText === '') return; // Prevent adding empty todos

    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        todoItem.remove();
    });

    // Append delete button to the todo item
    todoItem.appendChild(deleteButton);
    // Append todo item to the list
    todoList.appendChild(todoItem);

    // Clear the input
    todoInput.value = '';
}