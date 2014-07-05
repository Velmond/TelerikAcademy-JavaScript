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

function isNumber(number) {
    'use strict';
    if (!isNaN(number * 1) && !isNaN(parseInt(number, 10))) {   // !isNaN(array[entry] * 1) turns ' ' to 0 and 
        return true;                                            // !isNaN(parseInt(array[entry])) turns '2r' to 2
    }                                                           // Together it excludes both cases.
    return false;
}

function UserException(message) {
    'use strict';
    this.message = message;
    this.name = 'UserException';
}

Array.prototype.indexOf = function indexOf(soughtElement) {
    'use strict';
    var index = -1,
        i;
    for (i = 0; i < this.length; i += 1) {
        if (this[i] === soughtElement) {
            return i;
        }
    }
    return index;
};

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

// 02. Write a function that removes all elements with a given value
//     var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
//     arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
//   - Attach it to the array type
//   - Read about prototype and how to attach methods
Array.prototype.remove = function (elementToRemove) {
    'use strict';
    var newArray = [],
        i;

    for (i = 0; i < this.length; i += 1) {
        if (this[i] !== elementToRemove) {
            newArray.push(this[i]);
        }
    }

    return newArray;
};

function testMethodAttaching() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        array = getValue('array').split(','),
        toRemove = getValue('toRemove'),
        resultStr = '';

    resultStr += 'Before removing: ' + array;
    array = array.remove(toRemove);
    resultStr += '<br/>After removing:  ' + array;

    displayResult(resultContainer, resultStr);
}

// 03. Write a function that makes a deep copy of an object
// - The function should work for both primitive and reference types
function cloneObject(source) {
    'use strict';
    var cloned = {},
        property;
    for (property in source) {
        if (source.hasOwnProperty(property)) {
            if (typeof source[property] === "object" && source[property] !== null) {
                cloned[property] = cloneObject(source[property]);
            } else {
                cloned[property] = source[property];
            }
        }
    }
    return cloned;
}

Object.prototype.toString = function objToString(tab) {
    'use strict';
    if (!tab) {
        tab = '&nbsp;&nbsp;&nbsp;&nbsp;';
    }

    var output = '{<br/>',
        property;

    for (property in this) {
        if (this.hasOwnProperty(property)) {
            if (typeof this[property] === "object" && this[property] !== null) {
                output += tab + property + ': ' + this[property].toString(tab + '&nbsp;&nbsp;&nbsp;&nbsp;') + ',<br/>';
            } else {
                output += tab + property + ': ' + this[property] + ',<br/>';
            }
        }
    }

    output += tab.slice(24) + '}';

    return output;
};

function testDeepCopying() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        toBeCloned = {
            name: 'some object',
            rank: 13,
            purpose: {
                canDo: 'nothing',
                cantDo: 'anything'
            },
            loneFunction: function () {
                return -1;
            }
        },
        toCloneTo = {},
        resultStr = '';

    resultStr += 'Before copying: ' + '<br/>Original: <span class="highlight">' +
        toBeCloned.toString() + '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';
    toCloneTo = cloneObject(toBeCloned);
    resultStr += '<br/><br/>After copying: ' + '<br/>Original: <span class="highlight">' +
        toBeCloned.toString() + '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After setting the original\'s name to "initialObject"';
    toBeCloned.name = 'initialObject';
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After setting the clone\'s name to "cloned object"';
    toCloneTo.name = 'cloned object';
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After setting the original\'s rank to 87';
    toBeCloned.rank = 87;
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After changing the "loneFunction" function for the original to return 0 instead of -1';
    toBeCloned.loneFunction = function () {
        return 0;
    };
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After setting the canDo under the original\'s "purpose" property to "nada"';
    toBeCloned.purpose.canDo = 'nada';
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    resultStr += '<br/><br/>After setting the cantDo under the clone\'s "purpose" property to "nada"';
    toCloneTo.purpose.cantDo = 'a single thing';
    resultStr += '<br/>Original: <span class="highlight">' + toBeCloned.toString() +
        '</span><br/>Clone: <span class="highlight">' + toCloneTo.toString() + '</span>';

    displayResult(resultContainer, resultStr);
}

// 04. Write a function that checks if a given object contains a given property
//     var obj = ...;
//     var hasProp = hasProperty(obj, 'length');
function hasProperty(obj, property) {
    'use strict';
    var prop;
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (prop === property) {
                return true;
            }
        }
    }
    return false;
}

function testHasProperty() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        property = getValue('property'),
        person = {
            firstName: 'pesho',
            middleName: 'goshov',
            lastName: 'toshov',
            age: 12,
            homeTown: 'Grigorevo'
        },
        hasProp = hasProperty(person, property),
        resultStr = '';

    if (hasProp) {
        resultStr += 'The object HAS this property ("' + property + '" = "' + person[property] + '")';
    } else {
        resultStr += 'The object does NOT have this property ("' + property + '")';
    }

    displayResult(resultContainer, resultStr);
}

// 05. Write a function that finds the youngest person in a given array of persons and prints his/hers full name
//   - Each person have properties firstname, lastname and age, as shown:
//     var persons = [
//         { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
//         { firstname : 'Bay', lastname: 'Ivan', age: 81},
//         ... 
//     ];
function Person(firstName, lastName, age) {
    'use strict';
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = this.firstName + ' ' + this.lastName;
    this.asString = this.firstName + ' ' + this.lastName + ' (' + this.age + ')';
}

function getYoungest(arrayOfPeople) {
    'use strict';
    var youngest = arrayOfPeople[0],
        i;
    for (i = 1; i < arrayOfPeople.length; i += 1) {
        if (youngest.age > arrayOfPeople[i].age) {
            youngest = arrayOfPeople[i];
        }
    }
    return youngest;
}

function testFindYoungest() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        people = [
            new Person('Pesho', 'Peshov', 23),
            new Person('Gosho', 'Goshov', 31),
            new Person('Tosho', 'Toshov', 26),
            new Person('Sasho', 'Sashov', 17),
            new Person('Brad', 'Pitt', 70)
        ],
        youngest = getYoungest(people),
        resultStr = '',
        i;

    for (i = 0; i < people.length; i += 1) {
        resultStr += people[i].asString + '<br/>';
    }

    resultStr += '<br/>The youngest person is: <span class="highlight">' + youngest.fullName + '</span>';
    displayResult(resultContainer, resultStr);
}

// 06. Write a function that groups an array of persons by age, first or last name.
//     The function must return an associative array, with keys - the groups, and values -arrays with persons in this groups
//   - Use function overloading (i.e. just one function)
//     var persons = {...};
//     var groupedByFname = group(persons, 'firstname');
//     var groupedByAge= group(persons, 'age');
function group(arrayOfPeople, criteria) {
    'use strict';
    var key = criteria || 'age',
        groupsOfPeople = {},
        i;

    for (i = 0; i < arrayOfPeople.length; i += 1) {
        if (!groupsOfPeople[arrayOfPeople[i][key]]) {
            groupsOfPeople[arrayOfPeople[i][key]] = [];
        }

        groupsOfPeople[arrayOfPeople[i][key]].push(arrayOfPeople[i]);
    }

    return groupsOfPeople;
}

function arrayToString(arrayOfPeople) {
    'use strict';
    var resultStr = '',
        i;
    for (i = 0; i < arrayOfPeople.length; i += 1) {
        resultStr += arrayOfPeople[i].asString + '<br/>';
    }
    return resultStr;
}

function groupToString(group) {
    'use strict';
    var resultStr = '',
        subgroupKey,
        member;

    for (subgroupKey in group) {
        if (group.hasOwnProperty(subgroupKey)) {
            resultStr += '<span class="highlight">' + subgroupKey + '</span>:<br/>';

            for (member = 0; member < group[subgroupKey].length; member += 1) {
                resultStr += group[subgroupKey][member].asString + ';<br/>';
            }
        }
    }

    return resultStr;
}

function testGrouping() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        people = [
            new Person('Pesho', 'Peshov', 23),
            new Person('Gosho', 'Goshov', 31),
            new Person('Tosho', 'Toshov', 26),
            new Person('Sasho', 'Sashov', 17),
            new Person('Pesho', 'Goshov', 17),
            new Person('Tosho', 'Sashov', 23),
            new Person('Gosho', 'Peshov', 70),
            new Person('Sasho', 'Toshov', 26),
            new Person('Tosho', 'Peshov', 17),
            new Person('Pesho', 'Sashov', 26),
            new Person('Sasho', 'Goshov', 31),
            new Person('Gosho', 'Toshov', 23),
            new Person('Brad', 'Pitt', 70)
        ],
        groupedByFirstname = group(people, 'firstName'),
        groupedByLastname = group(people, 'lastName'),
        groupedByAge = group(people, 'age'),
        resultStr = '';

    resultStr += '<span class="highlight">Original array</span>:';
    resultStr += '<br/>' + arrayToString(people);
    resultStr += '<br/><span class="highlight">Grouped by first name</span>:';
    resultStr += '<br/>' + groupToString(groupedByFirstname);
    resultStr += '<br/><span class="highlight">Grouped by last name</span>:';
    resultStr += '<br/>' + groupToString(groupedByLastname);
    resultStr += '<br/><span class="highlight">Grouped by age</span>:';
    resultStr += '<br/>' + groupToString(groupedByAge);

    displayResult(resultContainer, resultStr);
}
