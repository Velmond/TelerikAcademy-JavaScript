/*jslint browser:true */

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

// 01. Write a script that selects all the div nodes that are directly inside other div elements
//     - Create a function using querySelectorAll()
//     - Create a function using getElementsByTagName()
function process(div) {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        stringToPrint = div.innerHTML.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
    displayResult(resultContainer, stringToPrint);
    console.log(div.innerHTML);
}

function findDivsWithInnerDivsWithQuerySelectorAll() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        nestedDivs = document.querySelectorAll('div > div'),
        stringToPrint,
        i;

    displayResult(resultContainer, '<span class="highlight">EXTRACTED NESTED DIV\'S CONTENT:</span>');

    for (i = 0; i < nestedDivs.length; i += 1) {
        process(nestedDivs[i]);
    }

    stringToPrint = '<span class="highlight">Found ' + nestedDivs.length + ' nested divs directly inside other divs.</span>';
    displayResult(resultContainer, stringToPrint);
}

function findDivsWithInnerDivsWithGetElementsByTagName() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        divsInDocument = document.getElementsByTagName('div'),
        count = 0,
        stringToPrint,
        i;

    displayResult(resultContainer, '<span class="highlight">EXTRACTED NESTED DIV\'S CONTENT:</span>');

    for (i = 0; i < divsInDocument.length; i += 1) {
        if (divsInDocument[i].parentNode.tagName.toLowerCase() === "div") {
            count += 1;
            process(divsInDocument[i]);
        }
    }

    stringToPrint = '<span class="highlight">Found ' + count + ' nested divs directly inside other divs.</span>';
    displayResult(resultContainer, stringToPrint);
}

// 02. Create a function that gets the value of <input type="text"> ands prints its value to the console
function printInputValueOnConsole() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        valueToPrint = getValue('textbox'),
        resultStr = '';

    resultStr += '<span class="highlight">' + valueToPrint + '</span>';

    console.log(valueToPrint);
    displayResult(resultContainer, resultStr);
}

// 03. Crеate a function that gets the value of <input type="color"> and sets the background of the body to this value
function changeBackgrountToInputValue() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        body = document.getElementsByTagName('body')[0],
        color = getValue('colorPicker'),
        indicators = document.getElementsByClassName('highlight'),
        resultStr = 'Body\'s background color changed to - <span class="highlight">' + color + '</span>';

    displayResult(resultContainer, resultStr);

    body.style.backgroundColor = color;

    indicators[indicators.length - 1].style.color = color;
}

// 04. *Write a script that shims querySelector and querySelectorAll in older browsers
window.onload = function () {
    if (!document.querySelector) {
        document.querySelectorAll = function (selector) {
            if (selector[0] === '#') {
                return document.getElementById(selector.substr(1));
            } else if (selector[0] === '.') {
                return document.getElementsByClassName(selector.substr(1));
            } else {
                return document.getElementsByTagName(selector);
            }
        }
    }

    if (!document.querySelectorAll) {
        document.querySelector = function (selector) {
            return document.getElementById(selector.substr(1));
        }
    }
}
