/*jslint browser:true */

// THIS IS A SMALLER FILE WITH ONLY THE SOLUTION OF TASK 01. THE PURPOSE OF THIS FILE IS SOLELY TO EASE THE EVALUATION PROCESS.
// I WRITE ME SCRIPTS IN ONE SINGLE FILE ('UsingObjects.js') AND THAT IS WHY ALL *.html-s' SCRIPTS ARE THE SAME.
// I GUESS IT WOULD TAKE TOO MUCH TIME TO EVALUATE THE HOMEWORK USING THAT SINGLE 400+ LINES LONG FILE SO I SEPARATED THE SOLUTIONS.

// 01. Write functions for working with shapes in standard Planar coordinate system
// - Points are represented by coordinates P(X, Y)
// - Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
// - Calculate the distance between two points
// - Check if three segment lines can form a triangle
function Point(x, y) {
    'use strict';
    this.x = x;
    this.y = y;

    this.distanceTo = function (secondPoint) {
        return Math.sqrt(Math.pow((this.x - secondPoint.x), 2) + Math.pow((this.y - secondPoint.y), 2));
    };
}

function Line(startingPoint, endingPoint) {
    'use strict';
    this.start = startingPoint;
    this.end = endingPoint;

    this.length = this.start.distanceTo(this.end);
}

function canFormTriangle(firstLine, secondLine, thirdLine) {
    'use strict';
    if (firstLine.length + secondLine.length > thirdLine.length &&
            firstLine.length + thirdLine.length > secondLine.length &&
            secondLine.length + thirdLine.length > firstLine.length) {
        return true;
    }

    return false;
}

function parsePoint(coordsString) {
    'use strict';
    var coords = coordsString.split(',');
    if (coords.length !== 2 || !isNumber(coords[0]) || !isNumber(coords[1])) {
        throw new UserException('Point coordinates were inputted in incorrect format');
    }

    return new Point(parseFloat(coords[0]), parseFloat(coords[1]));
}

var arrayOfLines = [];  // Global array for keeping all lines that are inputed

function testPointsAndLines() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        resultStr = '';

    try {
        var startPoint = parsePoint(getValue('start')), // This is where an exception would be thrown if the input is invalid.
            endPoint = parsePoint(getValue('end')),
            line = new Line(startPoint, endPoint),
            lastIndex;

        arrayOfLines.push(line);
        lastIndex = arrayOfLines.length - 1;
        resultStr += 'Line length: <span class="highlight">' + line.length.toFixed(2) + '</span>';

        if (arrayOfLines.length >= 3) {
            resultStr += '<br/><br/>The lines with length: ' + arrayOfLines[lastIndex - 2].length.toFixed(2) + ', ' +
                arrayOfLines[lastIndex - 1].length.toFixed(2) + ' and ' + arrayOfLines[lastIndex].length.toFixed(2);

            if (canFormTriangle(arrayOfLines[lastIndex - 2], arrayOfLines[lastIndex - 1], arrayOfLines[lastIndex])) {
                resultStr += ' <span class="highlight">CAN</span> form a triangle';
            } else {
                resultStr += ' <span class="highlight">CANNOT</span> form a triangle';
            }
        }
    } catch (RangeException) {
        resultStr += 'One or both points are inputted incorrectly (it should be formatted like this -> "coordX,coordY")';
    }

    displayResult(resultContainer, resultStr);
}
