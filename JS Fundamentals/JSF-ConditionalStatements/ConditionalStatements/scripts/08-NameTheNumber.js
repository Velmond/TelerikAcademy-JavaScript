/*jslint browser:true */

// 08. Write a script that converts a number in the range [0...999] to a text corresponding to its English pronunciation. Examples:
//     0 => 'Zero'
//     273 => 'Two hundred seventy three'
//     400 => 'Four hundred'
//     501 => 'Five hundred and one'
//     711 => 'Seven hundred and eleven'

function nameTheNumber() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        number = Math.floor(getValue('inputValue')),
        stringRes = '';

    if (!isNaN(number)) {
        if (number > 999 || number < -999) {
            stringRes += 'The value is out of range!';
        } else if (number === 0) {
            stringRes += 'Zero';
        } else {
            if (number < 0) {
                stringRes += 'minus ';
                number *= -1;
            }

            var singles = number % 10,
                tens = Math.floor(number / 10) % 10,
                hundreds = Math.floor(number / 100) % 10;

            switch (hundreds) {
                case 1:
                    stringRes += 'one hundred';
                    break;
                case 2:
                    stringRes += 'two hundred';
                    break;
                case 3:
                    stringRes += 'three hundred';
                    break;
                case 4:
                    stringRes += 'four hundred';
                    break;
                case 5:
                    stringRes += 'five hundred';
                    break;
                case 6:
                    stringRes += 'six hundred';
                    break;
                case 7:
                    stringRes += 'seven hundred';
                    break;
                case 8:
                    stringRes += 'eight hundred';
                    break;
                case 9:
                    stringRes += 'nine hundred';
                    break;
                default:
                    stringRes += '';
                    break;
            }

            if (hundreds !== 0 && ((tens === 0 && singles !== 0) || tens === 1)) {
                stringRes += ' and ';           //      101-119 / 201-219 / 301-319 / ... / 901-919
            } else if (hundreds !== 0 && (singles !== 0 || tens !== 0)) {
                stringRes += ' ';               //      120-199 / 220-299 / 320-399 / ... / 920-999
            }

            switch (tens) {
                case 2:
                    stringRes += 'twenty';
                    break;
                case 3:
                    stringRes += 'thirty';
                    break;
                case 4:
                    stringRes += 'forty';
                    break;
                case 5:
                    stringRes += 'fifty';
                    break;
                case 6:
                    stringRes += 'sixty';
                    break;
                case 7:
                    stringRes += 'seventy';
                    break;
                case 8:
                    stringRes += 'eighty';
                    break;
                case 9:
                    stringRes += 'ninety';
                    break;
                default:
                    break;
            }

            if (tens > 1 && singles !== 0) {
                stringRes += '-';               //      x21-x29 / x31-x39 / x41-x49 / ... / x91-x99
            }

            if (tens === 1) {
                switch (singles) {
                    case 0:
                        stringRes += 'ten';
                        break;
                    case 1:
                        stringRes += 'eleven';
                        break;
                    case 2:
                        stringRes += 'twelve';
                        break;
                    case 3:
                        stringRes += 'thirteen';
                        break;
                    case 4:
                        stringRes += 'fourteen';
                        break;
                    case 5:
                        stringRes += 'fifteen';
                        break;
                    case 6:
                        stringRes += 'sixteen';
                        break;
                    case 7:
                        stringRes += 'seventeen';
                        break;
                    case 8:
                        stringRes += 'eighteen';
                        break;
                    case 9:
                        stringRes += 'nineteen';
                        break;
                }
            }
            else {
                switch (singles) {
                    case 1:
                        stringRes += 'one';
                        break;
                    case 2:
                        stringRes += 'two';
                        break;
                    case 3:
                        stringRes += 'three';
                        break;
                    case 4:
                        stringRes += 'four';
                        break;
                    case 5:
                        stringRes += 'five';
                        break;
                    case 6:
                        stringRes += 'six';
                        break;
                    case 7:
                        stringRes += 'seven';
                        break;
                    case 8:
                        stringRes += 'eight';
                        break;
                    case 9:
                        stringRes += 'nine';
                        break;
                    default:
                        break;
                }
            }
        }
    } else {
        stringRes = 'The value you inputted is NaN.';
    }

    if (stringRes.indexOf('minus') !== 0) {
        stringRes = number + ': ' + stringRes.charAt(0).toUpperCase() + stringRes.slice(1);
    } else {
        stringRes = '-' + number + ': ' + stringRes.charAt(0).toUpperCase() + stringRes.slice(1);
    }

    displayResult(resultContainer, stringRes);
}
