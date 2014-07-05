/*jslint browser:true */

// 03. Write a script that finds the biggest of three integers using nested if statements.

function getTheBiggestNumber() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        firstValue = Math.floor(getValue('firstValue')),
        secondValue = Math.floor(getValue('secondValue')),
        thirdValue = Math.floor(getValue('thirdValue')),
        stringRes;

    if (!isNaN(firstValue) && !isNaN(secondValue) && !isNaN(thirdValue)) {
        if (firstValue > secondValue) {
            if (firstValue > thirdValue) {
                stringRes = 'The FIRST integer is the biggest (' + firstValue + ').';
            } else {
                stringRes = 'The THIRD integer is the biggest (' + thirdValue + ').';
            }
        } else if (secondValue > thirdValue) {
            stringRes = 'The SECOND integer is the biggest (' + secondValue + ').';
        } else {
            stringRes = 'The THIRD integer is the biggest (' + thirdValue + ').';
        }
    } else {
        stringRes = 'One of the values is NaN (or two... or all of them).';
    }

    displayResult(resultContainer, stringRes);
}
