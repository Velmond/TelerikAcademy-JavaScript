/*jslint browser:true */

// THIS IS A SMALLER FILE WITH ONLY THE COOMON FUNCTIONS THAT I'VE USED IN ONE OR MORE OF THE TASKS.
// THE PURPOSE OF THIS FILE IS SOLELY TO EASE THE EVALUATION PROCESS.
// I WRITE ME SCRIPTS IN ONE SINGLE FILE ('UsingObjects.js') AND THAT IS WHY ALL *.html-s' SCRIPTS ARE THE SAME.
// I GUESS IT WOULD TAKE TOO MUCH TIME TO EVALUATE THE HOMEWORK USING THAT SINGLE 400+ LINES LONG FILE SO I SEPARATED THE SOLUTIONS.

// 00. Common functions
function getValue(inputID) {
    'use strict';
    return document.getElementById(inputID).value;
}

function displayResult(resultContainer, resultStr) {
    'use strict';
    resultContainer.innerHTML = resultContainer.innerHTML + '<br/>' + '<br/>' + resultStr;
    resultContainer.scrollTop = resultContainer.scrollHeight;
}

function isNumber(number) {
    'use strict';
    if (!isNaN(number * 1) && !isNaN(parseInt(number, 10))) {   // !isNaN(array[entry] * 1) turns ' ' to 0 and 
        return true;                                            // !isNaN(parseInt(array[entry])) turns '2r' to 2
    }                                                           // Together it excludes both cases.
    return false;
}

function UserException(message) {
    'use strict';
    this.message = message;
    this.name = 'UserException';
}

Array.prototype.indexOf = function indexOf(soughtElement) {
    'use strict';
    var index = -1,
        i;
    for (i = 0; i < this.length; i += 1) {
        if (this[i] === soughtElement) {
            return i;
        }
    }
    return index;
};
