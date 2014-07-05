// Task 02 - Joro the Naughty - 100 точки
function solve(args) {
    'use strict';
    function inRange(value, maxValue) {
        return 0 <= value && value < maxValue;
    }

    var dimsAndJumps = args[0].split(' '),
        startPos = args[1].split(' '),
        jumpsStrings = args.splice(2),
        jumps = jumpsStrings.map(function (item) {
            var jumpCoords = item.split(' ');
            return jumpCoords.map(Number);
        }),
        rows = parseInt(dimsAndJumps[0], 10),
        cols = parseInt(dimsAndJumps[1], 10),
        row = parseInt(startPos[0], 10),
        col = parseInt(startPos[1], 10),
        visited = {},
        sum = 0,
        numberOfJumps = 0,
        cellValue,
        jumpIndex,
        jump = {};

    while (true) {
        if (!inRange(row, rows) || !inRange(col, cols)) {
            return 'escaped ' + sum;
        }

        cellValue = (row * cols + col + 1);

        if (visited[cellValue]) {
            return 'caught ' + numberOfJumps;
        }

        visited[cellValue] = true;
        sum += cellValue;

        jumpIndex = numberOfJumps % jumps.length;
        jump = {
            row: jumps[jumpIndex][0],
            col: jumps[jumpIndex][1]
        };

        row += jump.row;
        col += jump.col;

        numberOfJumps += 1;
    }
}
