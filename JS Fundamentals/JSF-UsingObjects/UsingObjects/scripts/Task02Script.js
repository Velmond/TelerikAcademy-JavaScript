/*jslint browser:true */

// THIS IS A SMALLER FILE WITH ONLY THE SOLUTION OF TASK 02. THE PURPOSE OF THIS FILE IS SOLELY TO EASE THE EVALUATION PROCESS.
// I WRITE ME SCRIPTS IN ONE SINGLE FILE ('UsingObjects.js') AND THAT IS WHY ALL *.html-s' SCRIPTS ARE THE SAME.
// I GUESS IT WOULD TAKE TOO MUCH TIME TO EVALUATE THE HOMEWORK USING THAT SINGLE 400+ LINES LONG FILE SO I SEPARATED THE SOLUTIONS.

// 02. Write a function that removes all elements with a given value
//     var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
//     arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
//   - Attach it to the array type
//   - Read about prototype and how to attach methods
Array.prototype.remove = function (elementToRemove) {
    'use strict';
    var newArray = [],
        i;

    for (i = 0; i < this.length; i += 1) {
        if (this[i] !== elementToRemove) {
            newArray.push(this[i]);
        }
    }

    return newArray;
};

function testMethodAttaching() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array = getValue('array').split(','),
        toRemove = getValue('toRemove'),
        resultStr = '';

    resultStr += 'Before removing: ' + array;
    array = array.remove(toRemove);
    resultStr += '<br/>After removing:  ' + array;

    displayResult(resultContainer, resultStr);
}
