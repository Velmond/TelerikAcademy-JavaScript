/*jslint browser:true */

// 06. Write a script that enters the coefficients a, b and c of a quadratic equation a*x2 + b*x + c = 0
//     and calculates and prints its real roots. Note that quadratic equations may have 0, 1 or 2 real roots.

function solveQuadraticEquation() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        coeffA = getValue('coeffA'),
        coeffB = getValue('coeffB'),
        coeffC = getValue('coeffC'),
        stringRes = '';

    if (!isNaN(coeffA) && !isNaN(coeffB) && !isNaN(coeffC)) {
        if (coeffA !== 0) {
            var discriminant = Math.pow(coeffB, 2) - 4 * coeffA * coeffC;

            if (discriminant < 0) {
                stringRes = 'The equation has no real roots.';
            } else if (discriminant === 0) {
                var root = -coeffB / (2 * coeffA);
                stringRes = 'The equation has one real root: ' + root.toFixed(2) + '.';
            } else {
                var rootX1 = (-coeffB + Math.sqrt(discriminant)) / (2 * coeffA),
                    rootX2 = (-coeffB - Math.sqrt(discriminant)) / (2 * coeffA);
                stringRes = 'The equation has two real roots: ' + rootX1.toFixed(2) + ' and ' + rootX2.toFixed(2) + '.';
            }
        } else {
            stringRes = 'If coefficient \'a\' is zero the equation is not quadratic.';
            if (coeffB !== 0) {
                stringRes +=  ' X = ' + (-coeffC / coeffB);
            } 
        }
    } else {
        stringRes = 'One of the values is not a number (or two... or all of them).';
    }

    displayResult(resultContainer, stringRes);
}
