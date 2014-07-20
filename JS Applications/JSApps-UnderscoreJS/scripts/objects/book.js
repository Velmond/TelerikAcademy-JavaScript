'use strict';
var Book = (function () {
    function Book(name, author) {
        this.name = name;
        this.author = author;
    }

    Book.prototype.toString = function () {
        return (this.name + ' (' + this.author.toString() + ')');
    };

    return Book;
}());
