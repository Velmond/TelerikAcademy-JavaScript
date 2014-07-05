/*jslint browser:true */

// THIS IS A SMALLER FILE WITH ONLY THE SOLUTION OF TASK 03. THE PURPOSE OF THIS FILE IS SOLELY TO EASE THE EVALUATION PROCESS.
// I WRITE ME SCRIPTS IN ONE SINGLE FILE ('UsingObjects.js') AND THAT IS WHY ALL *.html-s' SCRIPTS ARE THE SAME.
// I GUESS IT WOULD TAKE TOO MUCH TIME TO EVALUATE THE HOMEWORK USING THAT SINGLE 400+ LINES LONG FILE SO I SEPARATED THE SOLUTIONS.

// 03. Write a function that makes a deep copy of an object
// - The function should work for both primitive and reference types
function cloneObject(source) {
    'use strict';
    var cloned = {},
        property;
    for (property in source) {
        if (source.hasOwnProperty(property)) {
            if (typeof source[property] === "object" && source[property] !== null) {
                cloned[property] = cloneObject(source[property]);
            } else {
                cloned[property] = source[property];
            }
        }
    }
    return cloned;
}

Object.prototype.toString = function objToString(tab) {
    'use strict';
    if (!tab) {
        tab = '&nbsp;&nbsp;&nbsp;&nbsp;';
    }

    var output = '{<br/>',
        property;

    for (property in this) {
        if (this.hasOwnProperty(property)) {
            if (typeof this[property] === "object" && this[property] !== null) {
                output += tab + property + ': ' + this[property].toString(tab + '&nbsp;&nbsp;&nbsp;&nbsp;') + ',<br/>';
            } else {
                output += tab + property + ': ' + this[property] + ',<br/>';
            }
        }
    }

    output += tab.slice(24) + '}';

    return output;
};

function testDeepCopying() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        toBeCloned = {
            name: 'some object',
            rank: 13,
            purpose: {
                canDo: 'nothing',
                cantDo: 'anything'
            },
            loneFunction: function () {
                return -1;
            }
        },
        toCloneTo = {},
        resultStr = '';

    resultStr += 'Before copying: ' + '<br/>Original: <span class="highlight">' +
        toBeCloned.toString() + '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';
    toCloneTo = cloneObject(toBeCloned);
    resultStr += '<br/><br/>After copying: ' + '<br/>Original: <span class="highlight">' +
        toBeCloned.toString() + '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After setting the original\'s name to "initialObject"';
    toBeCloned.name = 'initialObject';
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After setting the clone\'s name to "cloned object"';
    toCloneTo.name = 'cloned object';
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After setting the original\'s rank to 87';
    toBeCloned.rank = 87;
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After changing the "loneFunction" function for the original to return 0 instead of -1';
    toBeCloned.loneFunction = function () {
        return 0;
    };
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After setting the canDo under the original\'s "purpose" property to "nada"';
    toBeCloned.purpose.canDo = 'nada';
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After setting the cantDo under the clone\'s "purpose" property to "nada"';
    toCloneTo.purpose.cantDo = 'a single thing';
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    displayResult(resultContainer, resultStr);
}
