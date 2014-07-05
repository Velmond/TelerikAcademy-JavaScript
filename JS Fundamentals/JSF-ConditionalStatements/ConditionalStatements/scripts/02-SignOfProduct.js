/*jslint browser:true */

// 02. Write a script that shows the sign (+ or -) of the product of three real numbers without calculating it.
//     Use a sequence of if statements.

function getSignOfProduct() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        firstValue = getValue('firstValue'),
        secondValue = getValue('secondValue'),
        thirdValue = getValue('thirdValue'),
        stringRes;

    if (!isNaN(firstValue) && !isNaN(secondValue) && !isNaN(thirdValue)) {
        if (firstValue === 0 || secondValue === 0 || thirdValue === 0) {
            stringRes = 'The result is 0.';
        } else if (firstValue > 0 && secondValue > 0 && thirdValue > 0 || firstValue < 0 && secondValue < 0 && thirdValue > 0 ||
                firstValue < 0 && secondValue > 0 && thirdValue < 0 || firstValue > 0 && secondValue < 0 && thirdValue < 0) {
            stringRes = 'The result is positive (+).';
        } else {
            stringRes = 'The result is negative (-).';
        }
    } else {
        stringRes = 'One of the values is NaN (or two... or all of them).';
    }

    displayResult(resultContainer, stringRes);
}
