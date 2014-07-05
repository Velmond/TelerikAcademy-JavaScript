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

function parseToIntArray(array) {
    'use strict';
    var intArray = [];
    for (var entry in array) {
        if (isNumber(array[entry])) {
            intArray.push(array[entry] * 1);
        }
    }
    return intArray;
}

function isNumber(number) {
    'use strict';
    if (!isNaN(number * 1) && !isNaN(parseInt(number))) {   // !isNaN(array[entry] * 1) turns ' ' to 0 and 
        return true;                                        // !isNaN(parseInt(array[entry])) turns '2r' to 2
    } else {                                                // Together it excludes both cases.
        return false;
    }
}

// 01. Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
//     Print the obtained array on the console.
function initArrayWith20Values() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array1 = new Array(20),
        array2 = new Array(),
        array3 = [20],
        array4 = [];

    for (var i = 0; i < 20; i++) {
        array1[i] = i * 5;
        array2[i] = i * 5;
        array3[i] = i * 5;
        array4[i] = i * 5;
    }

    displayResult(resultContainer, 'new Array(20) - ' + array1);
    displayResult(resultContainer, 'new Array() - ' + array2);
    displayResult(resultContainer, '[20] - ' + array3);
    displayResult(resultContainer, '[] - ' + array4);
	console.log(array1.toString());
	console.log(array2.toString());
	console.log(array3.toString());
	console.log(array4.toString());
}

// 02. Write a script that compares two char arrays lexicographically (letter by letter).
function lexCompareArrays() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        firstArr = getValue('firstArr').split(''),
        secondArr = getValue('secondArr').split(''),
        length = ((firstArr.length >= secondArr.length) ? secondArr.length : firstArr.length),
        resultStr;

    if (length !== 0) {
        for (var i = 0; i < length; i++) {
            if (firstArr[i] !== secondArr[i] && i < length - 1) {
                resultStr = compareSymbol(firstArr, secondArr, i);
                break;
            } else if (i === length - 1) {
                if (firstArr[i] !== secondArr[i]) {
                    resultStr = compareSymbol(firstArr, secondArr, i);
                } else {
                    resultStr = firstArr.length !== secondArr.length ?
                                firstArr.length > secondArr.length ? firstArr + ' > ' + secondArr : firstArr + ' < ' + secondArr :
                                firstArr + ' = ' + secondArr;
                }
            }
        }
    } else {
        resultStr = 'One of the input fields is empty (or both).';
    }

    displayResult(resultContainer, resultStr);
}

function compareSymbol(firstArr, secondArr, i) {
    if (firstArr[i] < secondArr[i]) {
        return (firstArr + ' < ' + secondArr);
    } else {
        return (firstArr + ' > ' + secondArr);
    }
}

// 03. Write a script that finds the maximal sequence of equal elements in an array.
//     Example: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1} => {2, 2, 2}.
function maxSequenceOfEqualElements() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array = getValue('array').split(','),
        intArray = parseToIntArray(array),
        resultStr;

    if (intArray.length !== 0) {
        var currSequence = 1,
            maxSequence = currSequence,
            currRepeated = intArray[0],
            mostRepeated = currRepeated;

        for (var i = 1; i < intArray.length; i++) {
            if (intArray[i] === intArray[i - 1]) {
                currSequence++;

                if (currSequence > maxSequence) {
                    maxSequence = currSequence;
                    mostRepeated = currRepeated;
                }
            } else {
                currRepeated = intArray[i];
                currSequence = 1;
            }
        }

        resultStr = 'Array: ' + intArray +
            '<br/>Longest sequence of equal elements is: ' + maxSequence + ' times (' + mostRepeated + ')';
    } else {
        resultStr = 'The input field is empty.';
    }

    displayResult(resultContainer, resultStr);
}

// 04. Write a script that finds the maximal increasing sequence in an array.
//     Example: {3, 2, 3, 4, 2, 2, 4} => {2, 3, 4}.
function maxIncreasingSequence() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array = getValue('array').split(','),
        intArray = parseToIntArray(array),
        resultStr;

    if (intArray.length !== 0) {
        var currSequence = 1,
            maxSequence = currSequence,
            startIndex = 0;

        for (var i = 1; i < intArray.length; i++) {
            if (intArray[i] >= intArray[i - 1]) {
                currSequence++;

                if (currSequence > maxSequence) {
                    maxSequence = currSequence;
                    startIndex = i - maxSequence;
                }
            } else {
                currSequence = 1;
            }
        }

        resultStr = 'Array: ' + intArray + '<br/>Longest increasing sequence\'s length is: ' + maxSequence + '  ( ';
        for (i = startIndex + 1; i <= (startIndex + maxSequence) ; i++) {
            resultStr += intArray[i] + ' ';
        }
        resultStr += ')';
    } else {
        resultStr = 'The input field is empty.';
    }

    displayResult(resultContainer, resultStr);
}

// 05. Sorting an array means to arrange its elements in increasing order. Write a script to sort an array.
//     Use the "selection sort" algorithm: Find the smallest element, move it at the first position, find the
//     smallest from the rest, move it at the second position, etc. Hint: Use a second array
function sortWithSelectionSort() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array = getValue('array').split(','),
        intArray = parseToIntArray(array),
        resultStr;

    if (intArray.length !== 0) {
        resultStr = 'Array before sorting: ' + intArray;

        for (var i = 0; i < intArray.length; i++) {
            var smallestIndex = findAndReplace(i, intArray),
                bufferValue = intArray[i];
            intArray[i] = intArray[smallestIndex];
            intArray[smallestIndex] = bufferValue;
        }

        resultStr += '<br/>Array after sorting:  ' + intArray;
    } else {
        resultStr = 'The input field is empty (or is full of NaNs)';
    }

    displayResult(resultContainer, resultStr);
}

function findAndReplace(index, array) {
    'use strict';
    var smallestIndex = index;
    for (var i = index; i < array.length; i++) {
        if (array[i] < array[smallestIndex]) {
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

// 06. Write a program that finds the most frequent number in an array.
//     Example: {4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3} => 4 (5 times)
function mostFrequentElementInArray() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array = getValue('array').split(','),
        intArray = parseToIntArray(array),
        dictionary = {  // Sorry. I'm too lazy (and not good enough at JS yet) to do a proper dictionary. This does the job though.
            key: [],
            value: [],
        },
        resultStr;

    if (intArray.length !== 0) {
        for (var i = 0; i < intArray.length; i++) {
            var indexInDictionary = dictionary.key.indexOf(intArray[i]);

            if (indexInDictionary === -1) {
                dictionary.key.push(intArray[i]);
                dictionary.value.push(1);
            } else {
                dictionary.value[indexInDictionary] += 1;
            }
        }

        var mostCommon = dictionary.key[0];

        for (i = 1; i < dictionary.key.length; i++) {
            if (dictionary.value[i] > dictionary.value[dictionary.key.indexOf(mostCommon)]) {
                mostCommon = dictionary.key[i];
            }
        }

        resultStr = 'Most common element: ' + mostCommon + ' (' + dictionary.value[dictionary.key.indexOf(mostCommon)] + ' times)';
    } else {
        resultStr = 'The input field is empty (or is full of NaNs)';
    }

    displayResult(resultContainer, resultStr);
}

// 07. Write a program that finds the index of given element in a sorted array of integers by using the binary
//     search algorithm (find it in Wikipedia).
function findIndexWithBinarySearch() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array = getValue('array').split(','),
        soughtElement = getValue('element') * 1,
        intArray = parseToIntArray(array),
        resultStr;

    if (intArray.length !== 0) {
        intArray = intArray.sort(function (a, b) { return a - b; });
        var soughtIndex = binarySearch(soughtElement, intArray, 0);
        resultStr = 'Array: ' + intArray + '<br/>Element: ' + soughtElement + '<br/>Index: ' + soughtIndex;
    } else {
        resultStr = 'The input field is empty.';
    }

    displayResult(resultContainer, resultStr);
}

function binarySearch(soughtElement, array, carryOver) {
    var currentIndex = Math.floor(array.length / 2);

    if (array[currentIndex] !== soughtElement && array.length > 1) {
        if (array[currentIndex] < soughtElement) {
            return binarySearch(soughtElement, array.slice(currentIndex + 1, array.length + 1), carryOver + currentIndex + 1);
        } else {
            return binarySearch(soughtElement, array.slice(0, currentIndex), carryOver);
        }
    } else if (array[currentIndex] === soughtElement) {
        return currentIndex + carryOver;
    } else {
        return -1;
    }
}
