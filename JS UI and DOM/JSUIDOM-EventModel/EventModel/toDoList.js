/*globals document */

// Create a TODO list with the following UI controls:
// - Form input for new Item;
// - Button for adding the new Item;
// - Button for deleting some item;
// - Show and Hide Button;

(function () {
    'use strict';
    var newItem = document.getElementById('newItem'),
        addButton = document.getElementById('add'),
        showButton = document.getElementById('show'),
        hideButton = document.getElementById('hide'),
        taskList = document.getElementById('tasks');

    function onRemoveClick() {
        taskList.removeChild(this.parentNode);
    }

    function onShowClick() {
        taskList.style.display = 'block';
    }

    function onHideClick() {
        taskList.style.display = 'none';
    }

    function onAddClick() {
        if (newItem.value) {
            var entry = document.createElement('p'),
                deleteButton = document.createElement('button');

            entry.style.position = 'relative';
            deleteButton.style.position = 'absolute';
            deleteButton.style.right = '0';
            deleteButton.innerHTML = 'remove';
            deleteButton.class = 'delete';
            deleteButton.addEventListener('click', onRemoveClick);

            entry.innerText = newItem.value;
            entry.appendChild(deleteButton);
            taskList.appendChild(entry);
        }
    }

    addButton.addEventListener('click', onAddClick);
    showButton.addEventListener('click', onShowClick);
    hideButton.addEventListener('click', onHideClick);
}());