// 02. Using jQuery implement functionality to insert a DOM element before or after another element
(function () {
    'use strict';
    $('<button>').attr('id', 'beforeBtn').text('Insert before').on('click', insertBefore).appendTo('body');
    $('<button>').attr('id', 'afterBtn').text('Insert after').on('click', insertAfter).appendTo('body');

    function insertBefore() {
        $('<div>').text('Inserted before the button (' + ((Math.random() * 100) | 0) + ')').insertBefore('#beforeBtn');
    }

    function insertAfter() {
        $('<div>').text('Inserted after the button (' + ((Math.random() * 100) | 0) + ')').insertAfter('#afterBtn');
    }
}());
