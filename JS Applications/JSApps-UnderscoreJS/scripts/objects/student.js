'use strict';
var Student = (function () {
    function Student(firstName, lastName, param) {
        this.firstName = firstName;
        this.lastName = lastName;
        if (param) {
            if (param instanceof Array) {
                this.marks = param;
            } else {
                this.marks = [];
                this.age = param;
            }
        } else {
            this.marks = [];
            this.age = 'not defined';
        }
    }

    Student.prototype.toString = function () {
        return (this.firstName + ' ' + this.lastName + ' (age: ' + this.age + ')');
    };

    return Student;
}());
