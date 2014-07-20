// 07. By an array of people find the most common first and last name. Use underscore.

;(function () {
    'use strict';
    function findMostCommonOfProperty(collection, property) {
        return _.chain(collection)
            .groupBy(property)
            .max(function (item) {
                return _.values(item).length;
            })
            .value()[0][property];
    }

    var people,
        mostCommonFirstName,
        mostCommonLastName;

    people = [
        new Person('Petar', 'Petrov'),
        new Person('Aleksandar', 'Georgiev'),
        new Person('Petar', 'Ivanov'),
        new Person('Maria', 'Antoanetova'),
        new Person('Petar', 'Bonapart'),
        new Person('Joro', 'Petrov'),
        new Person('Maria', 'Otvarachkova'),
        new Person('Homer', 'Petrov'),
        new Person('Alfred', 'Ivanov')
    ];

    mostCommonFirstName = findMostCommonOfProperty(people, 'firstName');
    mostCommonLastName = findMostCommonOfProperty(people, 'lastName');

    console.log('===================');
    console.log('= ALL the people: =');
    console.log('===================');
    _.each(people, function (person) {
        console.log(person.toString());
    });

    console.log('======================');
    console.log('= Most common names: =');
    console.log('======================');
    console.log('Most common first name: ' + mostCommonFirstName);
    console.log('Most common last name: ' + mostCommonLastName);
}());
