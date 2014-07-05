// Task 03 - Clojure Parser - 100 точки
function solve(commands) {
    'use strict';
    function evaluateFunction(argsStr, functions, isFunction) {   // (+ a, b, c)
        var parameters = isFunction     // Remove parentisies if there are such
                ? argsStr.substring(1, argsStr.length - 1).split(' ')   // + a b c
                : argsStr.split(' '),
            operation = parameters[0],  // +, -, * or /      ==>    // +
            values = parameters.slice(1),   // get the parameters that are sumed or divided or whatever... ==> // a, b, c
            result = isFinite(values[0]) ? Number(values[0]) : functions[values[0]],    // assign the value of the first element to the result
            i;

        if (parameters.length === 1) {  // if the parameter is only one, it's a name of the function
            return functions[operation];
        }

        if (operation === '+') {
            for (i = 1; i < values.length; i += 1) {
                result += isFinite(values[i]) ? Number(values[i]) : functions[values[i]];
            }
        } else if (operation === '-') {
            for (i = 1; i < values.length; i += 1) {
                result -= isFinite(values[i]) ? Number(values[i]) : functions[values[i]];
            }
        } else if (operation === '*') {
            for (i = 1; i < values.length; i += 1) {
                result *= isFinite(values[i]) ? Number(values[i]) : functions[values[i]];
            }
        } else if (operation === '/') {
            for (i = 1; i < values.length; i += 1) {
                if ((isFinite(values[i]) && Number(values[i]) === 0) || functions[values[i]] === 0) {
                    divisionByZero = true;
                    return NaN;
                }
                result /= isFinite(values[i]) ? Number(values[i]) : functions[values[i]];
                result = parseInt(result, 10);  // Judging by the description the division should return an integer
            }
        }
        return result;
    }

    var command,
        functions = [], // each function will be kept here to be used when its value is needed
        name,
        nameStart = 4,  // index where the name of the function starts
        nameEnd,    // index where the name of the function ends
        value,  // the value of the function
        divisionByZero = false,
        commandIndex = 0,   // line of the input that is executed
        isFunction;

    while (commands[commandIndex]) {
        command = String(commands[commandIndex]).substring(1, commands[commandIndex].length - 1).trim(); // Remove the parentisies

        while (command.indexOf('  ') !== -1) {
            command = command.replace('  ', ' ');   // No regular expressions are allowed so... 
        }

        if (command.indexOf('def') === 0) {
            isFunction = true;
            nameEnd = command.indexOf(' ', nameStart);
            name = command.substring(nameStart, nameEnd);
            value = command.substring(nameEnd + 1);
            functions[name] = isFinite(value)   // if value is a number
                ? Number(value)
                : value.indexOf('(') !== 0  // if it's not a number check if it's another function or just the name of another function
                    ? Number(functions[value])  // if it's the name of another function
                    : evaluateFunction(value, functions, isFunction);   // if it's an actual function (+ a 3 12 pesho)

            if (divisionByZero) {
                return 'Division by zero! At Line:' + (commandIndex + 1);
            }
        } else {
            isFunction = false;
            return evaluateFunction(command, functions, isFunction);
        }

        commandIndex += 1;
    }
}

var zeroTestArr = ['(def func 10)',
                    '(def newFunc (+  func 2))',
                    '(def sumFunc (+ func func newFunc 0 0 0))',
                    '(* sumFunc 2)'];

console.log('Expected: ' + 64);
console.log('Actual: ' + solve(zeroTestArr));

var zeroTestArr2 = ['(def func (+ 5 2))',
                '(def func2 (/  func 5 2 1 0))',
                '(def func3 (/ func 2))',
                '(+ func3 func)'];

console.log('Expected: Division by zero! At Line:2');
console.log('Actual: ' + solve(zeroTestArr2));
