/*jslint browser:true */

// 06. Write a function that extracts the content of a html page given as text. The function should return anything that is in a tag, without the tags:
//         <html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>
//     result:
//         Sample sitetextmore textand more...in body
function getTextOutsideTags(text) {
    'use strict';
    var result = '',
        currIndex = 0,
        currChar;

    while (currChar = text[currIndex]) {    // if the char at index currIndex is undefined (we've reached the end of the
        if (currChar !== '<') {             // ... text) the while will loop will stop. (undefined == false)
            result += currChar;
        } else {
            currIndex = text.indexOf('>', currIndex);
        }
        currIndex += 1;
    }

    return result;
}

function testGettingTextWithoutTags() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        text = getValue('text') || '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>',
        newText = getTextOutsideTags(text),
        resultStr = 'Extracted text: ' + newText;

    displayResult(resultContainer, resultStr);
}

// rexEx = /(<([^>]+)>)/gi;
