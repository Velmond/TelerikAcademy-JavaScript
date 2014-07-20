// 06. By a given collection of books, find the most popular author (the author with the highest number of books)

;(function () {
    'use strict';
    var books,
        andrey = new Person('Andrey', 'Petrov'),
        petar = new Person('Petar', 'Ivanov'),
        maria = new Person('Maria', 'Antoanetova'),
        mostPopular,
        authoredByMostPopular;

    books = [
        new Book('asd1', andrey),
        new Book('qwe1', petar),
        new Book('asd2', andrey),
        new Book('zxc1', maria),
        new Book('asd3', andrey),
        new Book('qwe2', petar),
        new Book('zxc2', maria),
        new Book('asd4', andrey),
        new Book('qwe3', petar),
        new Book('zxc3', maria),
        new Book('asd5', andrey),
        new Book('zxc4', maria)
    ];

    mostPopular = _.chain(books)
        .groupBy('author')
        .max(function (author) {
            return _.values(author).length;
        })
        .value()[0]['author'];

    authoredByMostPopular = _.filter(books, function (book) {
        return book.author === mostPopular;
    });

    console.log(mostPopular.toString());

    _.each(authoredByMostPopular, function (book) {
        console.log(book.toString());
    });
}());
