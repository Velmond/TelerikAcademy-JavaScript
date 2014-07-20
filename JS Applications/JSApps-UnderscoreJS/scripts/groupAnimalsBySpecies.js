// 04. Write a function that by a given array of animals, groups them by species and sorts them by number of legs

;(function () {
    'use strict';
    var animals,
        animalGroups;

    animals = [
        new Animal('Andrey', 'dog', 3),
        new Animal('Aleksandar', 'cat', 4),
        new Animal('Petar', 'hamster', 4),
        new Animal('Maria', 'snake', 0),
        new Animal('Napoleon', 'dog', 4),
        new Animal('Joro', 'cat', 4),
        new Animal('Mara', 'hamster', 3),
        new Animal('Homer', 'fish', 0),
        new Animal('Alfred', 'dog', 4),
        new Animal('Harry', 'centipede', 100),
        new Animal('Fukoshima', 'fish', 1)
    ];

    animalGroups = _.groupBy(animals, 'species');

    console.log('===================');
    console.log('= ALL the people: =');
    console.log('===================');
    _.each(animals, function (animal) {
        console.log(animal.toString());
    });

    console.log('=======================');
    console.log('= Grouped and sorted: =');
    console.log('=======================');
    _.each(animalGroups, function(group) {
        console.log('===== GROUP: ' + _.first(group).species + ' =====');
        _.chain(group)
            .sortBy('legsCount')
            .reverse()
            .each(function(animal) {
                console.log(animal.toString());
            });
    });
}());
