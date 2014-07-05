// Task 02 - Labyrinth Escape - 100 точки
function solve(args) {
    'use strict';
    function inRange(value, border) {
        return 0 <= value && value < border;
    }

    var sizes = args[0].split(' '),
        startPos = args[1].split(' '),
        rows = parseInt(sizes[0], 10),
        cols = parseInt(sizes[1], 10),
        row = parseInt(startPos[0], 10),
        col = parseInt(startPos[1], 10),
        field = args.slice(2),
        visited = {},
        sum = 0,
        count = 0,
        cellValue,
        dir,
        directions = {
            u: {
                row: -1,
                col: 0
            },
            r: {
                row: 0,
                col: 1
            },
            d: {
                row: 1,
                col: 0
            },
            l: {
                row: 0,
                col: -1
            }
        };

    while (true) {
        if (!inRange(row, rows) || !inRange(col, cols)) {
            return 'out ' + sum;
        }

        cellValue = row * cols + col + 1;

        if (visited[cellValue]) {
            return 'lost ' + count;
        }

        visited[cellValue] = true;
        sum += cellValue;
        count += 1;

        dir = field[row][col];
        row += directions[dir].row;
        col += directions[dir].col;
    }
}
