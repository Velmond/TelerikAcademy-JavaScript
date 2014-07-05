// 03. Create a module to work with the console object.
//     Implement functionality for:
//     - Writing a line to the console;
//     - Writing a line to the console using a format;
//     - Writing to the console should call toString() to each element;
//     - Writing errors and warnings to the console with and without format;
//
//     var specialConsole = …
//     specialConsole.writeLine("Message: hello");
//     //logs to the console "Message: hello"
//     specialConsole.writeLine("Message: {0}", "hello");
//     //logs to the console "Message: hello"
//     specialConsole.writeError("Error: {0}", "Something happened");
//     specialConsole.writeWarning("Warning: {0}", "A warning");

var specialConsole = (function () {
    'use strict';
    function formatString(template, fillers) {
        var fillerIndex = 0,
            placeholder = '{' + fillerIndex + '}';

        // Repeat while no 'placeholder' exists in the template
        while (template.indexOf(placeholder) != -1) {
            var filler = fillers[fillerIndex];

            // If a filler for some placeholder doesn't exist (it is 'undefined') there are no
            // more fillers. Exit out of the loop and leave the template as it currently is
            // Example: specialConsole.writeLine("{0} {1} {2} {3} {4} {5}", "a", "b", "c");
            //          logs: "a b c {3} {4} {5}"
            //          instead of: "a b c undefined undefined undefined"
            if (!filler) {
                break;
            }

            // Repeat replacing while the same 'placeholder' exists in the template
            // Example: specialConsole.writeLine("{0} {1} {0} {2} {0} {1}", "a", "b", "c");
            //          logs: "a b a c a b"
            while (template.indexOf(placeholder) != -1) {
                template = template.replace(placeholder, filler);
            }

            fillerIndex += 1;
            placeholder = '{' + fillerIndex + '}';
        }

        return template;
    }

    function getResultString(args) {
        if (args.length == 0) {
            console.error('Invalid arguments input!');
            return;
        }

        var resultString = args[0].toString();

        // If there are no more arguments, the string does not need filling in placeholders
        if (args.length > 1) {
            var fillers = []; // var fillers = Array.prototype.slice.call(args, 1); /*

            for (var i = 1; i < args.length; i += 1) {
                fillers.push(args[i].toString());
            } // */

            resultString = formatString(resultString, fillers);
        }

        return resultString;
    }

    function writeLine() {
        var resultString = getResultString(arguments);
        console.log(resultString);
    }

    function writeWarning() {
        var resultString = getResultString(arguments);
        console.warn(resultString);
    }

    function writeError() {
        var resultString = getResultString(arguments);
        console.error(resultString);
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning
    }
}());
