// 03. Using the REST API at 'localhost:3000/students' create a web application for managing students
//   - The REST API provides methods as follows:
//     = POST creates a new student
//     = GET returns all students
//     = DELETE deletes a student by Id
//   - You may extend the demo for jQuery.ajax()

(function () {
    'use strict';
    $('#success').hide();
    $('#error').hide();

    require(['requestModule'], function (requestModule) {
        var url = 'http://localhost:3000/students/';

        function loadAllStudents() {
            $('#students-table')
                .find('tr:not(:first-of-type)')
                .remove();

           var options = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            requestModule
                .getJSON(url, options)
                .then(function (data) {
                    data = JSON.parse(data);
                    displayStudentsTable(data.students);
                }, function (error) {
                    $('#error').html(error.responseText);
                });
        }

        function displayStudentsTable(students) {
            var i, len;
            for (i = 0, len = students.length; i < len; i += 1) {
                displayStudentRow(students[i]);
            }
        }

        function displayStudentRow(student) {
            var $tr = $('<tr/>'),
                $td = $('<td/>');
            $td.clone().addClass('id').html(student.id).appendTo($tr);
            $td.clone().addClass('name').html(student.name).appendTo($tr);
            $td.clone().addClass('grade').html(student.grade).appendTo($tr);

            $('#students-table').append($tr);
        }

        function addStudent() {
            var name = $('#name-input').val(),
                grade = $('#grade-input').val(),
                student = {
                    name: name,
                    grade: grade
                },
                options = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                };

            requestModule.postJSON(url, student, options)
                .then(function () {
                    $('#success')
                        .html('Student added: ' + student.name)
                        .show()
                        .delay(2000)
                        .fadeOut(2000);
                    loadAllStudents();
                }, function (error) {
                    $('#error')
                        .html('An error occurred. Student was not added.')
                        .show()
                        .delay(2000)
                        .fadeOut(2000);
                });
        }

        function deleteStudent() {
            var id = $('#id-input').val();

            if(!idExists(id)) {
                $('#error')
                    .html('Id ' + id + ' does not exist.')
                    .show()
                    .delay(2000)
                    .fadeOut(2000);
            } else {
                requestModule.postJSON(url + id)
                    .then(function () {
                        $('#success')
                            .html('Student with id ' + id + ' successfully deleted.')
                            .show()
                            .delay(2000)
                            .fadeOut(2000);
                        loadAllStudents();
                    }, function (error) {
                        $('#error')
                            .html('Student was not deleted due to error.')
                            .show()
                            .delay(2000)
                            .fadeOut(2000);
                    });
            }
        }

        function idExists(id){
            var rows = $('#students-table').find('.id');

            for (var i = 0, len = rows.length; i < len; i += 1) {
                if(rows[i].textContent === id){
                    return true;
                }
            }

            return false;
        }

        loadAllStudents();

        $('#add-student-btn').click(function () {
            addStudent();
        });
        $('#remove-student-btn').click(function () {
            deleteStudent();
        });

        $('#show-students-btn').on('click', function () {
            loadAllStudents();
        });
    });
}());
