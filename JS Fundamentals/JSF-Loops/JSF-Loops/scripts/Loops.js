/*jslint browser:true */

// 00. Common functions
function getValue(inputID) {
    'use strict';
    return document.getElementById(inputID).value * 1;
}

function displayResult(resultContainer, resultStr) {
    resultContainer.innerHTML = resultContainer.innerHTML + '<br/>' + '<br/>' + resultStr;
    resultContainer.scrollTop = resultContainer.scrollHeight;
}

// 01. Write a script that prints all the numbers from 1 to N
function oneToN() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        n = getValue('number'),
        resultStr = '';

    if (!isNaN(n)) {
        for (var i = 1; i <= n; i++) {
            if (i > 1) {
                resultStr += '<br/>' + i;
            } else {
                resultStr += i;
            }
        }
    } else {
        resultStr = 'The value of your input is NaN';
    }

    displayResult(resultContainer, resultStr);
}

// 02. Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
function divisibleBy3And7() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        n = getValue('number'),
        resultStr = '';

    if (!isNaN(n)) {
        for (var i = 1; i <= n; i++) {
            if (i > 1) {
                if (i % 3 !== 0 || i % 7 !== 0) {
                    resultStr += '<br/>' + i;
                }
            } else {
                resultStr += i;
            }
        }
    } else {
        resultStr = 'The value of your input is NaN';
    }

    displayResult(resultContainer, resultStr);
}

// 03. Write a script that finds the max and min number from a sequence of numbers
var numbersArr = [];    //  A global array outside the function to keep it from resetting to an empty array
//                          after calling the function another time

function maxAndMin() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        number = getValue('number'),
        resultStr = '';

    if (!isNaN(number)) {
        numbersArr.push(number);
        var minValue = Number.MAX_VALUE,
            maxValue = -Number.MAX_VALUE;

        for (var i = 0; i < numbersArr.length; i++) {
            if (numbersArr[i] < minValue) {
                minValue = numbersArr[i];
            }
            if (numbersArr[i] > maxValue) {
                maxValue = numbersArr[i];
            }
        }

        resultStr = 'Sequence: ';
        for (i = 0; i < numbersArr.length; i++) {
            if (i === numbersArr.length - 1) {
                resultStr += numbersArr[i] + '<br/>';
            } else {
                resultStr += numbersArr[i] + ', ';
            }
        }
        resultStr += 'Min Value = ' + minValue + '<br/>Max Value = ' + maxValue;
    } else {
        resultStr = 'The value of your input is NaN';
    }

    displayResult(resultContainer, resultStr);
}

// 04. Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects
function lexiCompProps() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        //object = (new DOMParser).parseFromString(document.getElementById('object').value, 'text/html');
        objArr = [document, window, navigator];     // DOMParser() didn't work out the way I planed...

    for (var i = 0; i < objArr.length; i++) {
        var propArr = [];

        for (var property in objArr[i]) {
            propArr.push(property);
        }

        propArr.sort();

        var resultStr = 'Object: ' + objArr[i] + '<br/>Smallest property: ' + propArr[0] + '<br/>Largest property: ' + propArr[propArr.length - 1];
        displayResult(resultContainer, resultStr);
    }
}
