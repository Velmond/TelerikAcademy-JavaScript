/*jslint browser:true */

// 12. Write a function that creates a HTML UL using a template for every HTML LI. The source of the list should an array of elements. Replace all placeholders marked with -{...}- with the value of the corresponding property of the object. Example: 
//         <div data-type="template" id="list-item">
//          <strong>-{name}-</strong> <span>-{age}-</span>
//         </div>
//         var people = [{name: "Peter", age: 14},...];
//         var tmpl = document.getElementById("list-item").innerHtml;
//         var peopleList = generateList(people,template);
//         //peopleList = "<ul><li><strong>Peter</strong> <span>14</span></li><li>...</li>...</ul>"
function Person(firstName, lastName, age) {
    'use strict';
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = this.firstName + ' ' + this.lastName;
    this.asString = this.firstName + ' ' + this.lastName + ' (' + this.age + ')';
}

function testListTemplating() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        template = getValue('template') || document.getElementById('list-item').innerHTML,
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
        peopleList = generateList(people, template);

    displayResult(resultContainer, peopleList);
}

function generateList(array, template) {
    'use strict';
    var result = '',
        bufferStr,
        propStart,
        propEnd,
        prop,
        i;

    result = '<ul>';
    for (i = 0; i < array.length; i += 1) {
        result += '<li>';
        bufferStr = template;

        while (bufferStr.indexOf('-{') !== -1) {
            propStart = bufferStr.indexOf('-{');
            propEnd = bufferStr.indexOf('}-');
            prop = bufferStr.substring(propStart + 2, propEnd);
            bufferStr = bufferStr.replace('-{' + prop + '}-', array[i][prop]);
        }

        result += bufferStr;
        result += '</li>';
    }

    result += '<ul>';

    return result;
}