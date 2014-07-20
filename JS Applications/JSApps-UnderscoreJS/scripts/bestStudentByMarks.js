// 03. Write a function that by a given array of students finds the student with highest marks

;(function () {
    'use strict';
    var students,
        bestStudent;

    students = [
        new Student('Andrey', 'Petrov', [6, 4, 5, 6]),
        new Student('Aleksandar', 'Georgiev', [4, 4, 6, 4]),
        new Student('Petar', 'Ivanov', [4, 4, 6, 5]),
        new Student('Maria', 'Antoanetova', [4, 4, 5, 3]),
        new Student('Napoleon', 'Bonapart', [3, 6, 4, 5]),
        new Student('Joro', 'Bekamov',[3, 4, 3, 5]),
        new Student('Mara', 'Otvarachkova', [4, 6, 3, 3]),
        new Student('Homer', 'Simpson', [5, 4, 6, 3]),
        new Student('Alfred', 'Melmakov', [3, 5, 4, 3])
    ];

    bestStudent = _.max(students, function (student) {
        return _.reduce(student.marks, function (memo, mark) {
            return memo + mark;
        }, 0);
    });

    console.log('=================');
    console.log('= ALL students: =');
    console.log('=================');
    _.each(students, function (student) {
        console.log(student.toString() + '; Total of marks: ' + student.marks.join(', '));
    });

    console.log('============================');
    console.log('= Student with best marks: =');
    console.log('============================');
    console.log(bestStudent.toString() + '; Total of marks: ' + bestStudent.marks.join(', '));
}());
