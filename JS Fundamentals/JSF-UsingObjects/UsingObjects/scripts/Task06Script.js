/*jslint browser:true */

// THIS IS A SMALLER FILE WITH ONLY THE SOLUTION OF TASK 06. THE PURPOSE OF THIS FILE IS SOLELY TO EASE THE EVALUATION PROCESS.
// I WRITE ME SCRIPTS IN ONE SINGLE FILE ('UsingObjects.js') AND THAT IS WHY ALL *.html-s' SCRIPTS ARE THE SAME.
// I GUESS IT WOULD TAKE TOO MUCH TIME TO EVALUATE THE HOMEWORK USING THAT SINGLE 400+ LINES LONG FILE SO I SEPARATED THE SOLUTIONS.

// 06. Write a function that groups an array of persons by age, first or last name.
//     The function must return an associative array, with keys - the groups, and values -arrays with persons in this groups
//   - Use function overloading (i.e. just one function)
//     var persons = {...};
//     var groupedByFname = group(persons, 'firstname');
//     var groupedByAge= group(persons, 'age');
function Person(firstName, lastName, age) {
    'use strict';
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = this.firstName + ' ' + this.lastName;
    this.asString = this.firstName + ' ' + this.lastName + ' (' + this.age + ')';
}

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
