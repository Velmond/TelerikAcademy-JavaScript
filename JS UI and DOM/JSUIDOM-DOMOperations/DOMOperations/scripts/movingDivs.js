/*globals window, document, setInterval */

// 02. Write a script that creates 5 div elements and moves them in circular path with interval of 100 milliseconds.

window.onload = (function () {
    'use strict';
    function generateRandomNumber(from, to) {
        if (from > to) {
            to = from + to;
            from = to - from;
            to = to - from;
        }

        var value = from + (Math.random() * ((to + 1) - from));
        return value;
    }

    function generateRandomColor() {
        var red = generateRandomNumber(0, 255) | 0, // '... | 0' to make it an integer
            green = generateRandomNumber(0, 255) | 0,
            blue = generateRandomNumber(0, 255) | 0,
            rgbString = 'rgb(' + red.toString() + ', ' + green.toString() + ', ' + blue.toString() + ')';

        return rgbString;
    }

    function updatePosition(rotationCenterX, rotationCenterY, rotationRadius, element) {
        var angle = parseFloat(element.getAttribute('angle')),
            angleStep = Math.PI / 360,
            x = rotationCenterX + rotationRadius * Math.cos(angle + angleStep),
            y = rotationCenterY + rotationRadius * Math.sin(angle + angleStep),
            elementWidth = element.style.width.substring(0, element.style.width.indexOf('px')) * 1, // '... * 1' to parse it to a number
            elementHeight = element.style.width.substring(0, element.style.width.indexOf('px')) * 1;

        element.setAttribute('angle', angle + angleStep);
        element.style.top = (y - elementWidth / 2) + 'px';
        element.style.left = (x - elementHeight / 2) + 'px';
    }

    var rotationCenterX = 500,
        rotationCenterY = 300,
        rotationRadius = 200,
        startAngle = generateRandomNumber(0, 2 * Math.PI),
        divSize = 100,
        fragment = document.createDocumentFragment(),
        numberOfDivs = 5,
        i,
        div;

    for (i = 0; i < numberOfDivs; i += 1) {
        div = document.createElement('div');

        div.setAttribute('angle', startAngle);
        div.className = 'rotatable';

        div.style.width = divSize + 'px';
        div.style.height = divSize + 'px';
        div.style.position = 'absolute';
        div.style.border = '2px solid ' + generateRandomColor();
        div.style.backgroundColor = generateRandomColor();

        updatePosition(rotationCenterX, rotationCenterY, rotationRadius, div);

        fragment.appendChild(div);

        startAngle += 2 * Math.PI / numberOfDivs;
    }

    document.body.appendChild(fragment);

    function rotate() {
        var divs = document.body.getElementsByClassName('rotatable'),
            length = divs.length;

        for (i = 0; i < length; i += 1) {
            updatePosition(rotationCenterX, rotationCenterY, rotationRadius, divs[i]);
        }
    }

    setInterval(rotate, 100);    // 100 ms
}());
