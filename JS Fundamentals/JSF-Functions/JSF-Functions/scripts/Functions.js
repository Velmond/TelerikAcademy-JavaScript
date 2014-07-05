/*jslint browser:true */

// 00. Common functions
function getValue(inputID) {
    'use strict';
    return document.getElementById(inputID).value;
}

function getRadioButtonValue(inputName) {
    'use strict';
    var radio = document.getElementsByName(inputName), i;
    for (i = 0; i < radio.length; i += 1) {
        if (radio[i].checked === true) {
            return radio[i].value;
        }
    }
}

function displayResult(resultContainer, resultStr) {
    'use strict';
    resultContainer.innerHTML = resultContainer.innerHTML + '<br/>' + '<br/>' + resultStr;
    resultContainer.scrollTop = resultContainer.scrollHeight;
}

function isNumber(number) {
    'use strict';
    if (!isNaN(number * 1) && !isNaN(parseInt(number, 10))) {   // !isNaN(array[entry] * 1) turns ' ' to 0 and 
        return true;                                        // !isNaN(parseInt(array[entry])) turns '2r' to 2
    }                                                       // Together it excludes both cases.
    return false;
}

function parseToIntArray(array) {
    'use strict';
    var intArray = [],
        entry;
    for (entry in array) {
        if (isNumber(array[entry])) {
            intArray.push(array[entry] * 1);
        }
    }
    return intArray;
}

// 01. Write a function that returns the last digit of given integer as an English word.
//     Examples: 512 => "two", 1024 => "four", 12309 => "nine"
function getLastDigit(number) {
    'use strict';
    switch (number % 10) {
    case 0:
        return 'zero';
    case 1:
        return 'one';
    case 2:
        return 'two';
    case 3:
        return 'three';
    case 4:
        return 'four';
    case 5:
        return 'five';
    case 6:
        return 'six';
    case 7:
        return 'seven';
    case 8:
        return 'eight';
    case 9:
        return 'nine';
    default:
        return '[invalid input]';
    }
}

function lastDigit() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        number = Math.floor(getValue('number')),
        lastDigitAsString,
        resultStr = '';

    if (!isNaN(number)) {
        lastDigitAsString = getLastDigit(number);
        resultStr = 'Number: ' + number + '<br/>Number\'s last digit: ' + lastDigitAsString;
    } else {
        resultStr = 'Inputted value is NaN.';
    }

    displayResult(resultContainer, resultStr);
}

// 02. Write a function that reverses the digits of given decimal number.
//     Example: 256 => 652
function reverseDigits(number) {
    'use strict';
    var reversedNumberAsStr = '',
        i;

    for (i = number.toString().length - 1; i >= 0; i -= 1) {
        reversedNumberAsStr += number.toString()[i];
    }

    return Math.floor(reversedNumberAsStr);
}

function reverseDigitsTask() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        number = Math.floor(getValue('number')),
        reversedNumber,
        resultStr = '';

    if (!isNaN(number)) {
        reversedNumber = reverseDigits(number);
        resultStr = 'Number: ' + number + '<br/> Reversed: ' + reversedNumber;
    } else {
        resultStr = 'Inputted value is NaN.';
    }

    displayResult(resultContainer, resultStr);
}

// 03. Write a function that finds all the occurrences of word in a text
//     - The search can be case sensitive or case insensitive
//     - Use function overloading
function countWordOccurrances(text, word, caseSensitive) {  // Couldn't figure out how to do it with overloading
    'use strict';
    var wordPattern = '\\b' + word + '\\b',
        regExp = new RegExp(wordPattern, caseSensitive);
    if (text.match(regExp) === null) {
        return 0;
    }
    return text.match(regExp).length;
}

function flagWordInText(text, word, caseSensitive) {
    'use strict';
    var pattern = '\\b' + word + '\\b',
        regExp = new RegExp(pattern, caseSensitive);
    return text.replace(regExp, '<span class="red">' + word.toUpperCase() + '</span>');
}

function findWordCountInText() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        text = getValue('text'),
        word = getValue('word'),
        caseSensitive = getRadioButtonValue('caseSensitive'),
        wordCount = 0,
        resultStr = '',
        coloredText;

    if (caseSensitive === '1') {
        wordCount = countWordOccurrances(text, word, 'g');
        coloredText = flagWordInText(text, word, 'g');
    } else {
        wordCount = countWordOccurrances(text, word, 'gi');
        coloredText = flagWordInText(text, word, 'gi');
    }

    resultStr = 'The word "' + word + '" is used ' + wordCount + ' times in the following text:<br/><br/>' +
        text + '<br/>' + '<br/>' + coloredText;

    resultContainer.innerHTML = resultStr;
}

// 04. Write a function to count the number of divs on the web page
function countHtmlElements(element) {
    'use strict';
    return document.getElementsByTagName(element).length;
}

function getElementsCount() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        elementToCount = getValue('element'),
        elementCount = 0,
        resultStr = '';

    elementCount = countHtmlElements(elementToCount);
    resultStr = 'There are ' + elementCount + ' &lt;' + elementToCount + '&gt;-s on this html page.';

    displayResult(resultContainer, resultStr);
}

// 05. Write a function that counts how many times given number appears in given array.
function countElements(array, numberToCount) {
    'use strict';
    var count = 0,
        i;

    for (i = 0; i < array.length; i += 1) {
        if (array[i] === numberToCount) {
            count += 1;
        }
    }

    return count;
}

function countNumberInArray() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array = getValue('array').split(','),
        intArray = parseToIntArray(array),
        number = getValue('number') * 1,
        count,
        resultStr = '';

    if (!isNaN(number)) {
        count = countElements(intArray, number);
        resultStr = 'Array: ' + intArray.join(', ') +
            '<br/>The number ' + number + ' appears ' + count + ' time(s) in the array.';
    } else {
        resultStr = 'Value for number that you inputted is NaN.';
    }

    displayResult(resultContainer, resultStr);
}

// 05.02. Write a test function to check if the function is working correctly.
function testCountElements() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array = [1, -1, 1, 2, 3, -1, 0, 12, 7, -2, 7, 11, 7, -12, 12, 7, 4, 6, -1, 0, 2, 5, 10, -12, 5, 5, 3],
        dictionary = { key: [], value: [] },
        isWorkingCorrectly = true,
        resultStr = '',
        i,
        j,
        count;

    for (i = Math.min.apply(Math, array); i <= Math.max.apply(Math, array); i += 1) {
        count = 0;
        for (j = 0; j < array.length; j += 1) {
            if (array[j] === i) {
                count += 1;
            }
        }
        dictionary.key.push(i);
        dictionary.value.push(count);
    }

    resultStr = 'Testing array: ' + array + '<br/>Sorted array: ' + array.sort(function (a, b) {
        return a - b;
    });
    resultStr += '<br/>Expexted result:';

    for (i = 0; i < dictionary.key.length; i += 1) {
        resultStr += '<br/>' + dictionary.key[i] + ' (' + dictionary.value[i] + ' times)';
    }

    for (i = Math.min.apply(Math, array); i <= Math.max.apply(Math, array); i += 1) {    // -12 -11 -10 ... 10 11 12
        isWorkingCorrectly = isWorkingCorrectly &&
            (countElements(array, i) === dictionary.value[dictionary.key.indexOf(i)]);
    }

    if (isWorkingCorrectly) {
        resultStr += '<br/>The function works as expexted.';
    } else {
        resultStr += '<br/>The function does not work as expexted.';
    }

    displayResult(resultContainer, resultStr);
}

// 06. Write a function that checks if the element at given position in given array of integers is bigger than
//     its two neighbors (when such exist).
function isBiggerThanNeighbours(array, index) {
    'use strict';
    if (array[index] > array[index - 1] && array[index] > array[index + 1]) {
        return true;
    }
    return false;
}

function getIsBiggerThanNeighbours() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array = getValue('array').split(','),
        intArray = parseToIntArray(array),
        index = getValue('index') * 1,
        isBigger,
        resultStr = '';

    if (!isNaN(index)) {
        isBigger = isBiggerThanNeighbours(intArray, index);
    } else {
        resultStr = 'Element does not have two neighbours.<br/>';
        isBigger = false;
    }

    if (isBigger && (index > 0 && index < intArray.length - 1)) {
        resultStr += intArray[index] + ' IS bigger than its neighbours (' + intArray[index - 1] +
            ' and ' + intArray[index + 1] + ')';
    } else if (index > 0 && index < intArray.length - 1) {
        resultStr += intArray[index] + ' is NOT bigger than its neighbours (' + intArray[index - 1] +
            ' and ' + intArray[index + 1] + ')';
    }

    displayResult(resultContainer, resultStr);
}

// 07. Write a function that returns the index of the first element in array that is bigger than its neighbors,
//     or -1, if there’s no such element.
//     - Use the function from the previous exercise.
function indexOfFirstBiggerElement(array) {
    'use strict';
    var i;
    for (i = 1; i < array.length - 1; i += 1) {
        if (isBiggerThanNeighbours(array, i)) {
            return i;
        }
    }
    return -1;
}

function getIndexOfFirstElementBiggerThanNeighbours() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array = getValue('array').split(','),
        intArray = parseToIntArray(array),
        indexOfFirstBigger = indexOfFirstBiggerElement(intArray),
        resultStr = '';

    if (indexOfFirstBigger !== -1) {
        resultStr = 'The index of the first item bigger than its neighbours is: ' + indexOfFirstBigger +
            ' (' + intArray[indexOfFirstBigger] + ' > ' + intArray[indexOfFirstBigger - 1] + ', ' +
            intArray[indexOfFirstBigger + 1] + ')';
    } else {
        resultStr = 'There is no element bigger than both its neighbours (' + indexOfFirstBigger + ').';
    }

    displayResult(resultContainer, resultStr);
}
