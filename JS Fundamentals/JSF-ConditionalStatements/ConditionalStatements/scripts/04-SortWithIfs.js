/*jslint browser:true */

// 04. Sort 3 real values in descending order using nested if statements.

function sort() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        firstValue = getValue('firstValue'),
        secondValue = getValue('secondValue'),
        thirdValue = getValue('thirdValue'),
        stringRes,
        bufferValue;

    if (!isNaN(firstValue) && !isNaN(secondValue) && !isNaN(thirdValue)) {
        if (firstValue > secondValue) {
            if (firstValue > thirdValue) {
                if (secondValue < thirdValue) {
                    bufferValue = secondValue;
                    secondValue = thirdValue;
                    thirdValue = bufferValue;
                }
            } else if (secondValue < thirdValue) {
                bufferValue = firstValue;
                firstValue = thirdValue;
                thirdValue = secondValue;
                secondValue = bufferValue;
            }
        } else {
            if (firstValue > thirdValue) {
                bufferValue = firstValue;
                firstValue = secondValue;
                secondValue = bufferValue;
            } else {
                if (thirdValue < secondValue) {
                    bufferValue = firstValue;
                    firstValue = secondValue;
                    secondValue = thirdValue;
                    thirdValue = bufferValue;
                } else {
                    bufferValue = firstValue;
                    firstValue = thirdValue;
                    thirdValue = bufferValue;
                }
            }
        }

        stringRes = 'First value: ' + firstValue + '<br/>' + 'Second value: ' + secondValue + '<br/>' + 'Third value: ' + thirdValue;
    } else {
        stringRes = 'One of the values is NaN (or two... or all of them).';
    }

    displayResult(resultContainer, stringRes);
}
