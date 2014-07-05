/*jslint browser:true */

// 09. Write a function for extracting all email addresses from given text.
//     All substrings that match the format <identifier>@<host>...<domain> should be recognized as emails.
//     Return the emails as array of strings.
var validChars = '_.-abcdefghijklmnopqestuvwxyzABCDEFGHIJKLMNOPQRSTUVWHYZ1234567890';

function isEmail(string) {
    'use strict';
    var passedAt = false,   // to avoid two '@'-s
        i;

    if ((string.indexOf('@') >= 3 && string.indexOf('@') <= 20) &&
            (string.lastIndexOf('.') > string.length - 5 && string.lastIndexOf('.') <= string.length - 2)) {
        for (i = 0; i < string.length; i += 1) {
            if ((!validChars.contains(string[i]) && string[i] !== '@') || (string[i] === '@' && passedAt)) {
                return false;
            }
            if (!passedAt && string[i] === '@') {
                passedAt = true;
            }
        }

        return true;
    }

    return false;
}

function convertToEmail(emailStr) {
    'use strict';
    var identifierEnd = emailStr.indexOf('@'),
        identifier = emailStr.substring(0, identifierEnd),
        hostEnd = emailStr.lastIndexOf('.'),
        host = emailStr.substring(identifierEnd + 1, hostEnd),
        domain = emailStr.substring(hostEnd + 1),
        email = {
            email: identifier + '@' + host + '.' + domain,
            identifier: identifier,
            host: host,
            domain: domain
        };

    return email;
}

function extractEmails(text) {
    'use strict';
    var words = text.split(' '),
        emails = [],
        email,
        i;

    for (i = 0; i < words.length; i += 1) {
        if (!validChars.substring(3).contains(words[i][words[i].length - 1])) {
            words[i] = words[i].substring(0, words[i].length - 1);  // remove '.'s, ','s, '!'s, '?'s, etc.
        }

        if (isEmail(words[i])) {
            email = convertToEmail(words[i]);
            emails.push(email);
        }
    }

    return emails;
}

function testExtractingEmails() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        text = getValue('text') || 'Some text some text pesho.peshov@gmail.com. More text more text gosho_goshov@abv.bg, also tosho-toshev@yahoo.com. And don\'t forget sasho123@hotmail.co.uk. This is not email: test@test. This also: @telerik.com. Neither this: a@a.b. gledamisexmendaysoffuturepastnakinoisitursiakompania@kinoman.info',
        emails = extractEmails(text),
        resultStr = 'Original text: <span class="highlight">' + text + '</span><br/>',
        i;

    if (emails.length >= 1) {
        for (i = 0; i < emails.length; i += 1) {
            resultStr += 'Email: <span class="highlight">' + emails[i].email +
                '</span><br/>Identifier: <span class="highlight">' + emails[i].identifier +
                '</span> Host: <span class="highlight">' + emails[i].host +
                '</span> Domain: <span class="highlight">' + emails[i].domain + '</span>';
            if (i < emails.length - 1) {
                resultStr += '<br/>';
            }
        }
    } else {
        resultStr += 'No emails found in the inputted text';
    }

    displayResult(resultContainer, resultStr);
}
