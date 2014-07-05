// 03. By given an array of students, generate a table that represents these students
//   - Each student has first name,last name and grade
//   - Use jQuery
(function () {
    'use strict';
    var students = [{
        firstName: 'Pesho',
        lastName: 'Peshov',
        grade: 4.5
    }, {
        firstName: 'Gosho',
        lastName: 'Goshov',
        grade: 3.6
    }, {
        firstName: 'Tosho',
        lastName: 'Toshov',
        grade: 5.2
    }, {
        firstName: 'Sasho',
        lastName: 'Sashov',
        grade: 2.0
    }, {
        firstName: 'Pippi',
        lastName: 'Longstocking',
        grade: 6.0
    }];

    var $table = $('<table>').appendTo('body').css({
        'border-collapse': 'collapse',
        'text-align': 'center'
    }),
        $thead = $('<thead>').appendTo($table),
        $tr = $('<tr>').appendTo($thead),
        i,
        length;

    $('<th>').text('First name').appendTo($tr);
    $('<th>').text('Last name').appendTo($tr);
    $('<th>').text('Grade').appendTo($tr);

    for (i = 0, length = students.length; i < length; i++) {
        generateStudentRow(students[i]);
    }

    $('td, th').css('border', '1px solid black');

    function generateStudentRow(student) {
        var $tr = $('<tr>');

        $('<td>').text(student.firstName).appendTo($tr);
        $('<td>').text(student.lastName).appendTo($tr);
        $('<td>').text(student.grade).appendTo($tr);

        $tr.appendTo($table);
    }
}());