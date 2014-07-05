/*jslint browser:true */

// 10. Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
var validChars = 'abcdefghijklmnopqestuvwxyzABCDEFGHIJKLMNOPQRSTUVWHYZ1234567890';

function isPalindrome(string) {
    'use strict';
    var i;

    for (i = 0; i < string.length / 2; i += 1) {
        if (string[i] !== string[(string.length - 1) - i]) {
            return false;
        }
    }

    return true;
}

function extractPalindromes(text) {
    'use strict';
    var words = text.split(' '),
        palindromes = [],
        i;

    for (i = 0; i < words.length; i += 1) {
        if (!validChars.contains(words[i][words[i].length - 1])) {
            words[i] = words[i].substring(0, words[i].length - 1);  // remove '.'s, ','s, '!'s, '?'s, etc.
        }

        if (isPalindrome(words[i])) {
            palindromes.push(words[i]);
        }
    }

    return palindromes;
}

function testExtractPalindromes() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        text = getValue('text') || 'Some text ABBA! More text lamal, also exe? And don\'t forget racecar.',
        palindromes = extractPalindromes(text),
        resultStr = 'Original text: <span class="highlight">' + text + '</span><br/>',
        i;

    if (palindromes.length > 0) {
        for (i = 0; i < palindromes.length; i += 1) {
            resultStr += 'Palindrome ' + (i + 1) + ': <span class="highlight">' + palindromes[i] + '</span>';
            if (i < palindromes.length - 1) {
                resultStr += '<br/>';
            }
        }
    } else {
        resultStr += 'No palindromes were found.';
    }

    displayResult(resultContainer, resultStr);
}
