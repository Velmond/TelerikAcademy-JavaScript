/*jslint browser:true */

// 05. Write a function that replaces non breaking white-spaces in a text with &nbsp;
function replaceSpaceWithNbsp(text) {
    'use strict';
    var resulrStr = text.replace(new RegExp(' ', 'g'), '&nbsp;');
    return resulrStr;
}

function testWhiteSpaceReplacer() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        text = getValue('text') || 'Write a function that replaces non breaking white-spaces in a text with &amp;nbsp;',
        newText = replaceSpaceWithNbsp(text),
        htmlEscapedText = newText.replace(new RegExp('&nbsp;', 'g'), '<span class="highlight">&amp;nbsp;</span>'),
        resultStr = newText + '<br/>- With escaped &amp;nbsp;:<br/>' + htmlEscapedText;

    displayResult(resultContainer, resultStr);
}