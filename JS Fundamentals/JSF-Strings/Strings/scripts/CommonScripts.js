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

function normalizeText(text) {
    'use strict';
    return text.replace(/\s+/g, ' ').
        replace(/\s*[.]\s*/, '. ').
        replace(/\s*[,]\s*/, ', ').
        replace(/\s*[!]\s*/, '! ').
        replace(/\s*[?]\s*/, '? ');
}

String.prototype.contains = function (searchPattern) {
    'use strict';
    var patternLen = searchPattern.length,
        length,
        isMatch,
        i,
        j;

    for (i = 0, length = this.length - patternLen; i <= length; i += 1) {
        isMatch = true;

        for (j = 0; j < patternLen; j += 1) {
            if (searchPattern[j] !== this[i + j]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            return true;
        }
    }
};
