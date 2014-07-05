// Task 01 - MaxSum - 100 точки
function solve(args) {
    'use strict';
    var numbers = args.slice(1).map(Number),
        bestSum = numbers[0],
        currSum = 0,
        i;

    for (i = 0; i < numbers.length; i += 1) {
        currSum += numbers[i];
        if (currSum > bestSum) {
            bestSum = currSum;
        }
        if (currSum < 0) {
            currSum = 0;
        }
    }

    return bestSum;
}
