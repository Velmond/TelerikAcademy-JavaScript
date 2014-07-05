/*jslint browser:true */

// 04. You are given a text. Write a function that changes the text in all regions:
//     <upcase>text</upcase> to uppercase.
//     <lowcase>text</lowcase> to lowercase
//     <mixcase>text</mixcase> to mix casing(random)
//         We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.
//     The expected result:
//         We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.
//     Regions can be nested.
String.prototype.toMixedCase = function () {
    'use strict';
    var resultStr = '',
        random,
        i;
    for (i = 0; i < this.length; i += 1) {
        random = Math.floor(Math.random() * 100);   // Case mixing should be random acording to the task description
        if (random % 2) {
            resultStr += this[i].toLowerCase();
        } else {
            resultStr += this[i].toUpperCase();
        }
    }
    return resultStr;
};

function processCurrentTag(text, toReplace, caseToDo) {
    'use strict';
    var toRemove;

    switch (caseToDo) {
    case 'u':   // [u]pcase
        toRemove = '<upcase>' + toReplace + '</upcase>';
        toReplace = toReplace.toUpperCase();
        break;
    case 'l':   // [l]owcase
        toRemove = '<lowcase>' + toReplace + '</lowcase>';
        toReplace = toReplace.toLowerCase();
        break;
    case 'm':   // [m]ixcase
        toRemove = '<mixcase>' + toReplace + '</mixcase>';
        toReplace = toReplace.toMixedCase();
        break;
    default:
        break;
    }

    text = text.replace(toRemove, toReplace);
    return text;
}

function applyUpLowAndMixCase() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        text = getValue('text') || 'Normal text <mixcase>mix case text <upcase>upper case text in mix case tag <lowcase>nested low text case </lowcase> some more upper text case in mix case tag</upcase> second part of mixed text case</mixcase> some normal text again <upcase>upper text case</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.',
        startIndex,
        lastIndex = text.indexOf('</'),
        caseToDo,
        toReplace;

    while (lastIndex !== -1) {
        startIndex = text.substring(0, lastIndex).lastIndexOf('>');
        toReplace = text.substring(startIndex + 1, lastIndex);
        caseToDo = text[lastIndex + 2];
        text = processCurrentTag(text, toReplace, caseToDo);
        lastIndex = text.indexOf('</');
    }

    displayResult(resultContainer, text);
}

//function applyUpLowAndMixCase() {
//    'use strict';
//    var resultContainer = document.getElementById('resultContainer'),
//        result = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.',
//        upcaseRexEx = /<upcase>(.*?)<\/upcase>/gi,
//        lowcaseRexEx = /<lowcase>(.*?)<\/lowcase>/gi,
//        mixcaseRexEx = /<mixcase>(.*?)<\/mixcase>/gi,
//        resultStr = '';
//    result = result.replace(upcaseRexEx, function (matchingString) {
//        return matchingString.toUpperCase();
//    });
//    result = result.replace(lowcaseRexEx, function (matchingString) {
//        return matchingString.toLowerCase();
//    });
//    result = result.replace(mixcaseRexEx, function (matchingString) {
//        return matchingString.toMixedCase();
//    });
//    resultStr += result;
//    displayResult(resultContainer, resultStr);
//}
