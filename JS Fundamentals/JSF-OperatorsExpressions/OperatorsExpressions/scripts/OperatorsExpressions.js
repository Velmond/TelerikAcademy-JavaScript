/*jslint browser:true */

// 00. Common functions
function getValue(inputID) {
    'use strict';
    return document.getElementById(inputID).value * 1;
}

function displayResult(resultContainer, stringRes) {
    resultContainer.innerHTML = resultContainer.innerHTML + '<br/>' + '<br/>' + stringRes + '.';
    resultContainer.scrollTop = resultContainer.scrollHeight;
}

// 01. Write an expression that checks if given integer is odd or even.
function oddOrEven() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        number = Math.floor(getValue('number')),
        stringRes = '';

    if (!isNaN(number)) {
        if (number % 2) {
            stringRes = number + ' is ODD';
        } else {
            stringRes = number + ' is EVEN';
        }
    } else {
        stringRes = 'The value you inputted is NaN';
    }

    displayResult(resultContainer, stringRes);
}

// 02. Write a boolean expression that checks for given integer if it can be divided (without remainder)
//     by 7 and 5 in the same time.
function isDivisibleBy7And5() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        number = getValue('number'),
        stringRes = '';

    if (!isNaN(number)) {
        if (number % 5 || number % 7) {
            stringRes = number + ' is NOT divisible by 5 and 7 at the same time';
        } else {
            stringRes = number + ' IS divisible by 5 and 7 at the same time';
        }
    } else {
        stringRes = 'The value you inputted is NaN';
    }

    displayResult(resultContainer, stringRes);
}

// 03. Write an expression that calculates rectangle’s area by given width and height.
function rectangleArea() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        width = getValue('width'),
        height = getValue('height'),
        stringRes = '';

    if (!isNaN(width) && !isNaN(height)) {
        if (width <= 0 || height <= 0) {
            stringRes = 'You can\'t have a dimentions equal to or less than zero (it wouldn\'t be a rectangle)';
        } else {
            var area = width * height;
            stringRes = 'The area of the rectangle is: ' + area.toFixed(2);
        }
    } else {
        stringRes = 'One of the values you inputted is NaN (or both)';
    }

    displayResult(resultContainer, stringRes);
}

// 04. Write an expression that checks for given integer if its third digit (right-to-left) is 7. E. g. 1732 => true.
function isThirdDigit7() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        number = getValue('number'),
        stringRes = '';

    if (!isNaN(number)) {
        var thirdDigit = Math.floor(Math.abs(number / 100)) % 10;

        if (thirdDigit !== 7) {
            stringRes = 'The third digit of the number is NOT 7 (it\'s ' + thirdDigit + ')';
        } else {
            stringRes = 'The third digit of the number IS 7';
        }
    } else {
        stringRes = 'The value you inputted is NaN';
    }

    displayResult(resultContainer, stringRes);
}

// 05. Write a boolean expression for finding if the bit 3 (counting from 0) of a given integer is 1 or 0.
function isThirdBit1Or0() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        number = getValue('number'),
        stringRes = '';

    if (!isNaN(number)) {
        var thirdBit = (number & (1 << 3)) >> 3;

        if (thirdBit) {
            if (number > 0) {
                stringRes = 'The third bit of the number is 1 (' + number.toString(2) + ')';
            } else {
                stringRes = 'The third bit of the number is 1';     // The .toString(2) shows the number in binary in a stupid way
            }
        } else {
            if (number > 0) {
                stringRes = 'The third bit of the number is 0 (' + number.toString(2) + ')';
            } else {
                stringRes = 'The third bit of the number is 0';     // The .toString(2) shows the number in binary in a stupid way
            }
        }
    } else {
        stringRes = 'The value you inputted is NaN';
    }

    displayResult(resultContainer, stringRes);
}

// 06. Write an expression that checks if given print (x,  y) is within a circle K(O, 5).
function isInCircle() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        pointX = getValue('pointX'),
        pointY = getValue('pointY'),
        stringRes = '',
        radius = 5;

    if (!isNaN(pointX) && !isNaN(pointY)) {
        var dist = Math.sqrt(pointX * pointX + pointY * pointY);

        if (dist < radius) {
            stringRes = 'The point [' + pointX + ', ' + pointY + '] is within the circle';
        } else if (dist === radius) {
            stringRes = 'The point [' + pointX + ', ' + pointY + '] is on the circle\'s border';
        } else {
            stringRes = 'The point [' + pointX + ', ' + pointY + '] is out of the circle';
        }
    } else {
        stringRes = 'One of the values you inputted is NaN (or both)';
    }

    displayResult(resultContainer, stringRes);
}

// 07. Write an expression that checks if given positive integer number n (n ≤ 100) is prime. E.g. 37 is prime.
function isPrime() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        number = getValue('number'),
        stringRes = '',
        isPrimeVar = true;

    if (!isNaN(number)) {
		if (number !== 0 && number !== 1) {		// 0 and 1 are not prime (http://www.mathsisfun.com/numbers/prime-numbers-to-10k.html)
			for (var i = 2; i <= Math.sqrt(number) ; i++) {
				if (number % i) {
					continue;
				} else {
					isPrimeVar = false;
					break;
				}
			}
		} else {
			isPrimeVar = false;
		}

        if (isPrimeVar) {
            stringRes = 'The number ' + number + ' IS prime';
        } else {
            stringRes = 'The number ' + number + ' is NOT prime';
        }
    } else {
        stringRes = 'The value you inputted is NaN';
    }

    displayResult(resultContainer, stringRes);
}

// 08. Write an expression that calculates trapezoid's area by given sides a and b and height h.
function trapezoidArea() {
    'use strict';

    var resultContainer = document.getElementById('resultContainer'),
        baseA = getValue('baseA'),
        baseB = getValue('baseB'),
        height = getValue('height'),
        stringRes = '';

    if (!isNaN(baseA) && !isNaN(baseB) && !isNaN(height)) {
        if (baseA <= 0 || baseB <= 0 || height <= 0) {
            stringRes = 'You can\'t have a dimentions equal to or less than zero (it wouldn\'t be a trapezoid)';
        } else {
            var area = (baseA + baseB) * height / 2;
            stringRes = 'The area of the rectangle is: ' + area.toFixed(2);
        }
    } else {
        stringRes = 'One of the values you inputted is NaN (or both)';
    }

    displayResult(resultContainer, stringRes);
}

// 09. Write an expression that checks for given point (x, y) if it is within the circle K( (1,1), 3)
//     and out of the rectangle R(top=1, left=-1, width=6, height=2).
function isInCircleOutOfRectangle() {
    'use strict';

    // See the Task08.png file in the folder 'images' to get a better idea of how I understand this task's description.
    var resultContainer = document.getElementById('resultContainer'),
        pointX = getValue('pointX'),
        pointY = getValue('pointY'),
        isInCircle,
        isInRectangle,
        stringRes = '';

    if (!isNaN(pointX) && !isNaN(pointY)) {
        isInCircle = getIsInCircle(pointX, pointY);
        isInRectangle = getIsInRectangle(pointX, pointY);

        stringRes = 'Is the point [' + pointX + ', ' + pointY + '] in the circle and out of the rectangle? ';
        if (isInCircle && !isInRectangle) {
            stringRes += 'YES';
        } else {
            stringRes += 'NO';
        }
    } else {
        stringRes = 'One of the values you inputted is NaN (or both)';
    }

    displayResult(resultContainer, stringRes);
}

function getIsInCircle(pointX, pointY) {
    var radius = 3,
        circleCenterX = 1,
        circleCenterY = 1;

    var distToCenter =
    Math.sqrt((pointX - circleCenterX) * (pointX - circleCenterX) + (pointY - circleCenterY) * (pointY - circleCenterY));

    if (distToCenter <= radius) {
        return true;
    } else {
        return false;
    }
}

function getIsInRectangle(pointX, pointY) {
    var rectangleTopEdge = -1,
        rectangleBottomEdge = -3,
        rectangleLeftEdge = 1,
        rectangleRightEdge = 7;

    if (pointX >= rectangleLeftEdge && pointX <= rectangleRightEdge &&
        pointY >= rectangleBottomEdge && pointY <= rectangleTopEdge) {
        return true;
    } else {
        return false;
    }
}
