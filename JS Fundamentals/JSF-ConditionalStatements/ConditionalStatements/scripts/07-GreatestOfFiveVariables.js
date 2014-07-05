/*jslint browser:true */

// 07. Write a script that finds the greatest of given 5 variables.

function getTheGreatestValue() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        firstValue = getValue('firstValue'),
        secondValue = getValue('secondValue'),
        thirdValue = getValue('thirdValue'),
        forthValue = getValue('forthValue'),
        fifthValue = getValue('fifthValue'),
        stringRes;

    if (!isNaN(firstValue) && !isNaN(secondValue) && !isNaN(thirdValue) && !isNaN(forthValue) && !isNaN(fifthValue)) {
        if (firstValue >= secondValue && firstValue >= thirdValue && firstValue >= forthValue && firstValue >= fifthValue) {
            stringRes = 'The FIRST value is the greatest one (' + firstValue + ').';
        } else if (secondValue >= thirdValue && secondValue >= forthValue && secondValue >= fifthValue) {
            stringRes = 'The SECOND value is the greatest one (' + secondValue + ').';
        } else if (thirdValue >= forthValue && thirdValue >= fifthValue) {
            stringRes = 'The THIRD value is the greatest one (' + thirdValue + ').';
        } else if (forthValue >= fifthValue) {
            stringRes = 'The FORTH value is the greatest one (' + forthValue + ').';
        } else {
            stringRes = 'The FIFTH value is the greatest one (' + fifthValue + ').';
        }
    } else {
        stringRes = 'One of the values is NaN (or two... or all of them).';
    }

    displayResult(resultContainer, stringRes);
}
