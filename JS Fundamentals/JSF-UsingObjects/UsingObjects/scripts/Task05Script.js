/*jslint browser:true */

// THIS IS A SMALLER FILE WITH ONLY THE SOLUTION OF TASK 05. THE PURPOSE OF THIS FILE IS SOLELY TO EASE THE EVALUATION PROCESS.
// I WRITE ME SCRIPTS IN ONE SINGLE FILE ('UsingObjects.js') AND THAT IS WHY ALL *.html-s' SCRIPTS ARE THE SAME.
// I GUESS IT WOULD TAKE TOO MUCH TIME TO EVALUATE THE HOMEWORK USING THAT SINGLE 400+ LINES LONG FILE SO I SEPARATED THE SOLUTIONS.

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
