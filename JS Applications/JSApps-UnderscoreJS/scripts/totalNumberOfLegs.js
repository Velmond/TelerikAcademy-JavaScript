// 05. By a given array of animals, find the total number of legs
//   - Each animal can have 2, 4, 6, 8 or 100 legs

;(function () {
    'use strict';
    var animals,
        totalLegsCount;

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

    totalLegsCount = _.reduce(animals, function (memo, animal) {
        return (memo + animal.legsCount);
    }, 0);

    console.log('===================');
    console.log('= ALL the people: =');
    console.log('===================');
    _.each(animals, function (animal) {
        console.log(animal.toString());
    });

    console.log('=========================');
    console.log('= Total number of legs: =');
    console.log('=========================');
    console.log(totalLegsCount);
}());
