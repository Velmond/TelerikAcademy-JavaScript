// 01. Write a method that from a given array of students finds all students whose first name
//     is before its last name alphabetically. Print the students in descending order by full name.
//     Use Underscore.js

;(function () {
    'use strict';
    function isFirstNameBeforeLastName(student) {
        return student.firstName.toLowerCase() < student.lastName.toLowerCase();
    }

    var students,
        filteredStudents;

    students = [
        new Student('Andrey', 'Petrov'), // yes
        new Student('Aleksandar', 'Georgiev'), // yes
        new Student('Petar', 'Ivanov'), // no
        new Student('Maria', 'Antoanetova'), // no
        new Student('Napoleon', 'Bonapart'), // no
        new Student('Joro', 'Bekamov'), // no
        new Student('Mara', 'Otvarachkova'), // yes
        new Student('Homer', 'Simpson'), // yes
        new Student('Alfred', 'Melmakov') // yes
    ];

    filteredStudents = _.filter(students, isFirstNameBeforeLastName);

    console.log('=================');
    console.log('= ALL students: =');
    console.log('=================');
    _.each(students, function (student) {
        console.log(student.toString());
    });

    console.log('=====================================================================');
    console.log('= Students with first name before their last name (alphabetically): =');
    console.log('=====================================================================');
    _.each(filteredStudents, function (student) {
        console.log(student.toString());
    });
}());
