/*jslint browser:true */

// 05. Write script that asks for a digit and depending on the input shows the name of that digit (in English) using a switch statement.

function nameTheDigit() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        digit = getValue('inputValue'),
        stringRes,
        digitAsString;

    if (!isNaN(digit)) {
        switch (digit % 10) {
            case 0:
                digitAsString = "ZERO";
                break;
            case 1:
                digitAsString = "ONE";
                break;
            case 2:
                digitAsString = "TWO";
                break;
            case 3:
                digitAsString = "THREE";
                break;
            case 4:
                digitAsString = "FOUR";
                break;
            case 5:
                digitAsString = "FIVE";
                break;
            case 6:
                digitAsString = "SIX";
                break;
            case 7:
                digitAsString = "SEVEN";
                break;
            case 8:
                digitAsString = "EIGHT";
                break;
            case 9:
                digitAsString = "NINE";
                break;
            default:
                digitAsString = "invalid";
                break;
        }

        stringRes = 'The digit you inputed is ' + digitAsString + '.';
    } else {
        stringRes = 'The value you have inputed is NaN (not a number).';
    }

    displayResult(resultContainer, stringRes);
}
