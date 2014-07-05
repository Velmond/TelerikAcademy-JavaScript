/*jslint browser:true */

// THIS IS A SMALLER FILE WITH ONLY THE SOLUTION OF TASK 04. THE PURPOSE OF THIS FILE IS SOLELY TO EASE THE EVALUATION PROCESS.
// I WRITE ME SCRIPTS IN ONE SINGLE FILE ('UsingObjects.js') AND THAT IS WHY ALL *.html-s' SCRIPTS ARE THE SAME.
// I GUESS IT WOULD TAKE TOO MUCH TIME TO EVALUATE THE HOMEWORK USING THAT SINGLE 400+ LINES LONG FILE SO I SEPARATED THE SOLUTIONS.

// 04. Write a function that checks if a given object contains a given property
//     var obj = ...;
//     var hasProp = hasProperty(obj, 'length');
function hasProperty(obj, property) {
    'use strict';
    var prop;
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (prop === property) {
                return true;
            }
        }
    }
    return false;
}

function testHasProperty() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        property = getValue('property'),
        person = {
            firstName: 'pesho',
            middleName: 'goshov',
            lastName: 'toshov',
            age: 12,
            homeTown: 'Grigorevo'
        },
        hasProp = hasProperty(person, property),
        resultStr = '';

    if (hasProp) {
        resultStr += 'The object HAS this property ("' + property + '" = "' + person[property] + '")';
    } else {
        resultStr += 'The object does NOT have this property ("' + property + '")';
    }

    displayResult(resultContainer, resultStr);
}
