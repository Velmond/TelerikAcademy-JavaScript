/*jslint browser:true */
function getValue(inputID) {
    'use strict';
    return document.getElementById(inputID).value * 1;
}

function displayResult(resultContainer, stringRes) {
    resultContainer.innerHTML = resultContainer.innerHTML + '<br/>' + '<br/>' + stringRes;
    resultContainer.scrollTop = resultContainer.scrollHeight;
}
