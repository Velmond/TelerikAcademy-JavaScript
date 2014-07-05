/*jslint browser:true */

// 02. Write a JavaScript function to check if in a given expression the brackets are put correctly.
//     Example of correct expression: ((a+b)/5-d).
//     Example of incorrect expression: )(a+b)).
function isCorrectExpression(expression) {
    'use strict';
    var bracketsCount = 0,
        openingBracket = '(',
        closingBracket = ')',
        i;

    for (i = 0; i < expression.length; i += 1) {
        if (expression[i] === openingBracket) {
            bracketsCount += 1;
        } else if (expression[i] === closingBracket) {
            bracketsCount -= 1;
        }

        if (bracketsCount < 0) {
            return false;
        }
    }

    return true;
}

function testIsExpressionCorrect() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        expression = getValue('expression') || ')(a+b))',
        isCorrect = isCorrectExpression(expression),
        resultStr = '';

    if (isCorrect) {
        resultStr += 'The expression ' + expression + ' IS a correct expression';
    } else {
        resultStr += 'The expression ' + expression + ' is NOT a correct expression';
    }

    displayResult(resultContainer, resultStr);
}
