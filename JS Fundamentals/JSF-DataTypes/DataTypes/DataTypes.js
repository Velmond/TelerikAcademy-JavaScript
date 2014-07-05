/*jslint browser: true, evil: true */

// 01. Assign all the possible JavaScript literals to different variables.
document.write('<h1>Task 01 - Assign all the possible JavaScript literals to different variables.</h1><br/>');
var intNumberVar = 5,
    floatNumberVar = 2.5,
    boolVar = true,
    stringVar = 'qwerty';

document.write('intNumberVar = <span class="log">' + intNumberVar + '</span><br/>');
document.write('floatNumberVar = <span class="log">' + floatNumberVar + '</span><br/>');
document.write('boolVar = <span class="log">' + boolVar + '</span><br/>');
document.write('stringVar = <span class="log">' + stringVar + '</span><br/>');

console.log(intNumberVar);
console.log(floatNumberVar);
console.log(boolVar);
console.log(stringVar);

// 02. Create a string variable with quoted text in it. For example: 'How you doin'?', Joey said.
document.write('<br/>');
document.write('<h1>Task 02 - Create a string variable with quoted text in it. For example: \'How you doin\'?\', Joey said.</h1><br/>');

var firstQuote = '\'How you doin\'?\', Joey said.',
    secondQuote = '"How you doin\'?", Joey said.',
    thirdQuote = "'How you doin'?', Joey said.";

document.write('First option: <span class="log">' + firstQuote + '</span><br/>');
document.write('Second option: <span class="log">' + secondQuote + '</span><br/>');
document.write('Third option: <span class="log">' + thirdQuote + '</span><br/>');

console.log(firstQuote);
console.log(secondQuote);
console.log(thirdQuote);

// 03. Try typeof on all variables you created.
document.write('<br/>');
document.write('<h1>Task 03 - Try typeof on all variables you created.</h1><br/>');

document.write('typeof intNumberVar => <span class="log">' + typeof intNumberVar + '</span><br/>');
document.write('typeof floatNumberVar => <span class="log">' + typeof floatNumberVar + '</span><br/>');
document.write('typeof boolVar => <span class="log">' + typeof boolVar + '</span><br/>');
document.write('typeof stringVar => <span class="log">' + typeof stringVar + '</span><br/>');

console.log(typeof intNumberVar);
console.log(typeof floatNumberVar);
console.log(typeof boolVar);
console.log(typeof stringVar);

// 04. Create null, undefined variables and try typeof on them.
document.write('<br/>');
document.write('<h1>Task 04 - Create null, undefined variables and try typeof on them.</h1><br/>');

var nullVar = null,
    undefVar = undefined;

document.write('nullVar = <span class="log">' + nullVar + '</span><br/>');
document.write('typeof undefVar => <span class="log">' + typeof nullVar + '</span><br/>');

console.log(nullVar);
console.log(typeof nullVar);

document.write('<br/>');

document.write('undefVar = <span class="log">' + undefVar + '</span><br/>');
document.write('typeof undefVar => <span class="log">' + typeof undefVar + '</span><br/>');

console.log(undefVar);
console.log(typeof undefVar);
