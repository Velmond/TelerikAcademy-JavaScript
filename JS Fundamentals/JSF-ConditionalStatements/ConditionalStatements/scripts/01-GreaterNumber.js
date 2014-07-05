/*jslint browser:true */

// 01. Write an if statement that examines two integer variables and exchanges
//     their values if the first one is greater than the second one.

function getGreaterValue() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        firstValue = Math.floor(getValue('firstValue')),
        secondValue = Math.floor(getValue('secondValue')),
        stringRes = 'The second number is greater. Their values will NOT be swiched.';

    if (!isNaN(firstValue) && !isNaN(secondValue)) {
        if (firstValue > secondValue) {
            var bufferValue = firstValue;
            firstValue = secondValue;
            secondValue = bufferValue;
            stringRes = 'The first number is greater. Their values will be swiched.';
        }
    } else {
        stringRes = 'One of the values is NaN (or both).';
    }

    stringRes += '<br/>First number (final): ' + firstValue + '<br/>Second number (final): ' + secondValue;
    displayResult(resultContainer, stringRes);
}
