// Task 01 - Sequences - 100 точки
function solve(args) {
    'use strict';
    var numbers = args.slice(1).map(Number),    // no need to keep the first value
        sequenceCount = 1,
        i;

    for (i = 1; i < numbers.length; i += 1) {
        if (numbers[i] < numbers[i - 1]) {
            sequenceCount += 1;
        }
    }

    return sequenceCount;
}
