// 02. Write function that finds the first name and last name of all students with age between 18 and 24.
//     Use Underscore.js

;(function () {
    'use strict';
    function isAgeInRange(student, minAge, maxAge) {
        return minAge <= student.age && student.age <= maxAge;
    }

    var MIN_AGE = 18,
        MAX_AGE = 24,
        students,
        filteredStudents;

    students = [
        new Student('Andrey', 'Petrov', 22), // yes
        new Student('Aleksandar', 'Georgiev', 18), // yes
        new Student('Petar', 'Ivanov', 25), // no
        new Student('Maria', 'Antoanetova', 24), // yes
        new Student('Napoleon', 'Bonapart', 21), // yes
        new Student('Joro', 'Bekamov',33), // no
        new Student('Mara', 'Otvarachkova', 17), // no
        new Student('Homer', 'Simpson', 20), // yes
        new Student('Alfred', 'Melmakov', 23) // yes
    ];

    filteredStudents = _.filter(students, function (student) {
        return isAgeInRange(student, MIN_AGE, MAX_AGE);
    });

    console.log('=================');
    console.log('= ALL students: =');
    console.log('=================');
    _.each(students, function (student) {
        console.log(student.toString());
    });

    console.log('========================================');
    console.log('= Students with age between 18 and 24: =');
    console.log('========================================');
    _.each(filteredStudents, function (student) {
        console.log(student.toString());
    });
}());
