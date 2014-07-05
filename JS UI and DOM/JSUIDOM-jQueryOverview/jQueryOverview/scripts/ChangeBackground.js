// 04. Implement functionality to change the background color of a web page
//   - i.e. select a color from a color picker and set this color as the background color of the page
(function () {
    'use strict';
    $('<input>').attr('type', 'color').attr('id', 'colorPicker').appendTo('body');

    $('#colorPicker').on('change', function () {
        $('body').css('background', this.value);
    });
}());
