// Task 03 - Listy - 58 точки
function solve(args) {
    'use strict';
    function parseOperationStart(operationStart) {
        var indexOfWhiteSpace = operationStart.trim().indexOf(' '),
            name,
            func;

        if (indexOfWhiteSpace === -1) {
            name = operationStart;
            func = '';
        } else {
            name = operationStart.substring(0, indexOfWhiteSpace);
            func = operationStart.substring(indexOfWhiteSpace);
        }

        return {
            name: name.trim(),
            func: func.trim()
        };
    }

    function parseValue(valueString) {
        valueString = valueString.trim();
        valueString = valueString.substring(0, valueString.length - 1);

        var parts = valueString.split(',').map(function (item) {
            item = item.trim();
            if (isFinite(item)) {
                return parseInt(item, 10);
            }
            return item.trim();
        });

        return parts;
    }

    function parseOperations(lines) {
        var operations = [],
            i,
            line,
            parts,
            operation,
            value;

        for (i = 0; i < lines.length; i += 1) {
            line = lines[i];
            parts = line.split('[');
            operation = parseOperationStart(parts[0]);
            value = parseValue(parts[1]);

            operation.value = value;
            operations.push(operation);
        }

        return operations;
    }

    function evaluateOperation(name, scope) {
        var operation = scope[name],
            newValues = [],
            item,
            variableValue,
            result = 0,
            i;

        for (i = 0; i < operation.value.length; i += 1) {
            item = operation.value[i];
            if (!isFinite(item) && item !== '') {
                variableValue = scope[item].value;
                if (variableValue instanceof Array) {
                    Array.prototype.push.apply(newValues, variableValue);
                } else {
                    newValues.push(variableValue);
                }
            } else {
                newValues.push(item);
            }
        }

        if (operation.func === 'sum') {
            for (i = 0; i < newValues.length; i += 1) {
                result += newValues[i];
            }
            newValues = result;
        } else if (operation.func === 'min') {
            newValues = Math.min.apply(null, newValues);
        } else if (operation.func === 'max') {
            newValues = Math.max.apply(null, newValues);
        } else if (operation.func === 'avg') {
            for (i = 0; i < newValues.length; i += 1) {
                result += newValues[i];
            }
            newValues = result / newValues.length;
        }

        scope[name].value = newValues;
    }

    var lines = args.map(function (item) {
        item = item.trim();
        if (item.indexOf('def ') !== 0) {
            return item;
        }
        item = item.substr('def '.length).trim();
        return item;
    }),
        operations = parseOperations(lines),
        scope = {},
        i,
        operation,
        result = 0;

    for (i = 0; i < operations.length; i += 1) {
        operation = operations[i];
        scope[operation.name] = operation;
        evaluateOperation(operation.name, scope);

        if (i === operations.length - 1) {
            if (operation.name === '' && operation.func === '') {
                return operation.value[0];
            }

            if (operation.name === 'sum') {
                for (i = 0; i < operation.value.length; i += 1) {
                    result += operation.value[i];
                }
            } else if (operation.name === 'min') {
                result = Math.min.apply(null, operation.value);
            } else if (operation.name === 'max') {
                result = Math.max.apply(null, operation.value);
            } else if (operation.name === 'avg') {
                for (i = 0; i < operation.value.length; i += 1) {
                    result += operation.value[i];
                }
                result = result / operation.value.length;
            }
            return result;
        }
    }
}

var test1 = [
    "def func sum[5, 3, 7, 2, 6, 3]",
    "def func2 [5, 3, 7, 2, 6, 3]",
    "def func3 min[func2]",
    "def func4 max[5, 3, 7, 2, 6, 3]",
    "def func5 avg[5, 3, 7, 2, 6, 3]",
    "def func6 sum[func2, func3, func4 ]",
    "sum[func6, func4]"
];                                          // 42
console.log('Expected: ' + 42);
console.log('Actual: ' + solve(test1));

var test2 = [
    "def func sum[1, 2, 3, -6]",
    "def newList [func, 10, 1]",
    "def newFunc sum[func, 100, newList]",
    "[newFunc]"
];                                          // 111
console.log('Expected: ' + 111);
console.log('Actual: ' + solve(test2));
