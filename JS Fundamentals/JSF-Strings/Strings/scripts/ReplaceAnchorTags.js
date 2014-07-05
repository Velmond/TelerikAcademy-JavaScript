/*jslint browser:true */

// 08. Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="...">...</a> with corresponding tags [URL=...].../URL]. Sample HTML fragment:
//       <p>Please visit <a href="http://academy.telerik. com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>
//       <p>Please visit [URL=http://academy.telerik. com]our site[/URL] to choose a training course. Also visit [URL=www.devbg.org]our forum[/URL] to discuss the courses.</p>
String.prototype.htmlEscape = function () {
    'use strict';
    return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39');//.replace(/ /g, '&nbsp;');
};

function replaceAnchorTags(text) {
    'use strict';
    while (text.indexOf('<a ') !== -1) {
        text = text.replace('<a ', '[URL').replace('href="', '=').replace('">', ']').replace('</a>', '[/URL]');
    }
    return text;
}

function normalize(text) {
    'use strict';
    return text.replace(/\s+/g, ' ').
        replace(/<\s*a\s*/g, '<a ').
        replace(/href\s*=\s*"\s*/g, 'href="').
        replace(/\s*"\s*>\s*/g, '">').
        replace(/\s*<\s*\/\s*a\s*>/g, '</a>');
}

function testReplaceAnchorTags() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        text = getValue('text') || '<p>Please visit <a href="http://academy.telerik. com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>',
        newText = '',
        resultStr = '';

    newText = replaceAnchorTags(normalize(text));
    resultStr = 'Before replacing the tags: ' + text.htmlEscape() +
        '<br/>After replaced the tags:' + newText.htmlEscape();

    displayResult(resultContainer, resultStr);
}
