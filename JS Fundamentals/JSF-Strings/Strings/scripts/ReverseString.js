/*jslint browser:true */

// 01. Write a JavaScript function reverses string and returns it.
//     Example: "sample" -> "elpmas".
function reverse(string) {
    'use strict';
    var reversed = '',
        i;

    for (i = string.length - 1; i >= 0; i -= 1) {
        reversed += string[i];
    }

    return reversed;
}

function testReverse() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        string = getValue('string') || 'sample',
        reversed = reverse(string),
        resultStr = '';

    resultStr += 'Original: ' + string + '<br/>Reversed: ' + reversed;

    displayResult(resultContainer, resultStr);
}