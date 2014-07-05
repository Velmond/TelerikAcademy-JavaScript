/*globals window, document */

// 05. *Create a TreeView component.
//   - Initially only the top items must be visible;
//   - On item click:
//     = If its children are hidden (collapsed), they must be made visible (expanded);
//     = If its children are visible (expanded), they must be made hidden (collapsed);
//   - Research about events;

(function () {
    'use strict';
    function addListItems(depth, parent, text) {
        var listItem,
            listItemText,
            list,
            i;

        for (i = 0; i < 3; i += 1) {
            listItem = document.createElement('li');
            list = document.createElement('ul');

            listItemText = text + (i + 1);
            listItem.innerHTML = listItemText;

            if (depth < 3) {
                addListItems(depth + 1, list, listItemText + '.');
            }

            listItem.appendChild(list);
            parent.appendChild(listItem);
        }
    }

    function onListItemClick(e) {
        e.stopPropagation();    // To apply the function only on the clicked element and not on its parent
        var child = this.firstElementChild;

        while (child) {
            child.style.display = (child.style.display === 'none' ? 'block' : 'none');
            child = child.nextElementSibling;
        }
    }

    function collapseNestedLists() {
        var list = document.getElementsByTagName("li"),
            child,
            i,
            length = list.length;

        for (i = 0; i < length; i += 1) {
            list[i].addEventListener('click', onListItemClick, false);
            child = list[i].firstElementChild;

            while (child) {
                child.style.display = "none";
                child = child.nextElementSibling;
            }
        }
    }

    var ul = document.createElement('ul');

    document.body.appendChild(ul);

    addListItems(0, ul, 'List Item ');

    collapseNestedLists();
}());
