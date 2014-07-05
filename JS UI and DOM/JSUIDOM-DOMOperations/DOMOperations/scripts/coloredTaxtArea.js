/*globals document */
// 03. Create a text area and two inputs with type="color".
//   - Make the font color of the text area as the value of the first color input;
//   - Make the background color of the text area as the value of the second input;

function changeColors() {
    'use strict';
    var textArea = document.getElementById("textArea");

    textArea.style.backgroundColor = document.getElementById("bgColor").value;
    textArea.style.color = document.getElementById("fontColor").value;
}
