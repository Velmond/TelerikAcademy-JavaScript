/*jslint browser:true */

// 11. Write a function that formats a string using placeholders:
//         var str = stringFormat("Hello {0}!","Peter");
//         //str = "Hello Peter!";
//     The function should work with up to 30 placeholders and all types
//         var format = "{0}, {1}, {0} text {2}";
//         var str = stringFormat(format,1,"Pesho","Gosho");
//         //str = "1, Pesho, 1 text Gosho"
var tests = [
    ["Hello {0}!", "Peter"],
    ["{0}, {1}, {0} text {2}", 1, "Pesho", "Gosho"],
    ["This {0} has {1} {2} {3} than there are {4}", "test", 3, "more", "arguments", "placeholders", "one", "two", "three"],
    ["{0} one has {1} arguments {2} there are {3}", "This", "less", "than"],
    ["{0}{1}{2}{3}{4}{5}{6}{7}{8}{9}{10}{11}{12}{13}{14}{15}{16}{17}{18}{19}{20}{21}{22}{23}{24}{25}", "A", "b", "C", "d", "E", "f", "G", "h", "I", "J", "k", "L", "m", "N", "o", "P", "q", "R", "s", "T", "u", "V", "w", "X", "y", "Z"],
    ["{0} {1} {2} {3} {4}, {5} {6} {7}, {8} {9} {10} {11} {12} {13} {14} {15} dolore magna aliqua. Ut enim ad minim veniam, quis nostrud {16} ullamco laboris nisi {13} {17} ex ea {18} consequat. Duis aute irure {2} {26} reprehenderit {26} voluptate velite esse cillum dolore eu fugiat nulla pariatur. {19} {20} {21} {22} {23} {24}, {25} {26} {27} {28} {29} {30} {31} {32} {33} {34} {35}.", "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "exercitation", "aliquip", "commodo", "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"]
];

function stringFormat(args) {
    'use strict';
    var result = args[0],
        fillers = args,
        placeholder,
        i;

    for (i = 1; i < fillers.length; i += 1) {
        placeholder = '{' + (i - 1) + '}';

        while (result.indexOf(placeholder) !== -1) {
            result = result.replace(placeholder, fillers[i]);
        }
    }

    return result;
}

function testStringFormat() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        resultStr = '',
        i;

    for (i = 0; i < tests.length; i += 1) {
        resultStr += '<span class="highlight"><strong>Test ' + i + ':</strong></span><br/>';
        resultStr += '<strong>Result: <span class="highlight">' + stringFormat(tests[i]) + '</span></strong><br/>';
        resultStr += '<strong>Format:</strong> ' + tests[i][0] + '<br/>';
        resultStr += '<strong>Arguments:</strong> <span class="highlight">' + tests[i].slice(1).join(", ") + '</span>';
        if (i < tests.length - 1) {
            resultStr += '<br/>';
            resultStr += '------------------------------------------------------------------------------------------';
            resultStr += '<br/>';
        }
    }

    displayResult(resultContainer, resultStr);
}
