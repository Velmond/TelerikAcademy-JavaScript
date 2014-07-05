/*jslint browser:true */

// 03. Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
//     Example: 
//         The target substring is "in". The text is as follows:
//         We are living in an yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.
//         The result is: 9.
function substringCount(text, subString) {
    'use strict';
    var pattern = subString,
        count = text.match(new RegExp(pattern, 'gi')).length;

    return count;
}

function testSubstringCounter() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        text = getValue('text') || 'We are living in an yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.',
        substring = getValue('substring') || 'in',
        count = substringCount(text, substring),
        resultStr = 'The substring ' + substring + ' is met ' + count + ' times in the text<br/>' + text.replace(new RegExp(substring, 'gi'), '<span class="highlight">' + substring + '</span>');

    displayResult(resultContainer, resultStr);
}
