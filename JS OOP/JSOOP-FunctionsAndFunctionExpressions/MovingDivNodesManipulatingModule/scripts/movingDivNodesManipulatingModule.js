// 02. Create a module that works with moving div nodes.
//     Implement functionality for:
//     - Add new moving div element to the DOM;
//     - The module should generate random background, font and border colors for the div element;
//     - All the div elements are with the same width and height;
//     - The movements of the div nodes can be either circular or rectangular;
//     - The elements should be moving all the time;
//
//     var movingShapes = ...
//     //add element with rectangular movement
//     movingShapes.add("rect");
//     //add element with ellipse movement
//     movingShapes.add("ellipse");


// !!!
// I use ' *1 ' and ' | 0 ' to parse a string to a number and a floating point number to an integer because
// parseInt() and parseFloat() make the execution a LOT slower when there are a lot of divs moving around
// !!!
var movingShapes = (function () {
    'use strict';
    var DIV_WIDTH = 25,
        DIV_HEIGHT = 25,
        TRAJECTORY_MIN = 100,
        TRAJECTORY_MAX = 500,
        TRAJECTORY_RADIUS = (TRAJECTORY_MAX - TRAJECTORY_MIN) / 2,
        TRAJECTORY_CENTER_X = TRAJECTORY_MAX - TRAJECTORY_RADIUS,
        TRAJECTORY_CENTER_Y = TRAJECTORY_MAX - TRAJECTORY_RADIUS,
        DISTANCE_SPEED = 1,
        ANGLE_SPEED = 0.3 * Math.PI / 180,
        trajectoryOptions = ['rect', 'ellipse'],
        divCount = 1;

    setInterval(calculateNewPositions, 20);

    function getRandomColor() {
        var red = (Math.random() * 255) | 0,
            green = (Math.random() * 255) | 0,
            blue = (Math.random() * 255) | 0;
        return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    Array.prototype.contains = function (element) {
        for (var i = 0, length = this.length; i < length; i += 1) {
            if (this[i] === element) {
                return true;
            }
        }

        return false;
    };

    function getNewRectPositions(element) {
        var elementX = element.getAttribute('position-x') * 1,
            elementY = element.getAttribute('position-y') * 1;

        if (elementX <= TRAJECTORY_MIN && elementY <= TRAJECTORY_MIN) {
            element.setAttribute('direction-x', '0');
            element.setAttribute('direction-y', DISTANCE_SPEED.toString());
        } else if (elementX <= TRAJECTORY_MIN && elementY >= TRAJECTORY_MAX) {
            element.setAttribute('direction-x', DISTANCE_SPEED.toString());
            element.setAttribute('direction-y', '0');
        } else if (elementX >= TRAJECTORY_MAX && elementY >= TRAJECTORY_MAX) {
            element.setAttribute('direction-x', '0');
            element.setAttribute('direction-y', (-DISTANCE_SPEED).toString());
        } else if (elementX >= TRAJECTORY_MAX && elementY <= TRAJECTORY_MIN) {
            element.setAttribute('direction-x', (-DISTANCE_SPEED).toString());
            element.setAttribute('direction-y', '0');
        }

        elementX += (element.getAttribute('direction-x') * 1) | 0;
        elementY += (element.getAttribute('direction-y') * 1) | 0;

        return {
            x: elementX,
            y: elementY
        }
    }

    function getNewEllipsePositions(element) {
        var elementX,
            elementY,
            angle = element.getAttribute('angle') * 1;

        elementX = (TRAJECTORY_CENTER_X + TRAJECTORY_RADIUS * Math.cos(angle)) | 0;
        elementY = (TRAJECTORY_CENTER_Y + TRAJECTORY_RADIUS * Math.sin(angle)) | 0;
        angle = (angle + ANGLE_SPEED) % 360;

        element.setAttribute('angle', angle.toString());

        return {
            x: elementX,
            y: elementY
        }
    }

    function calculateNewPositions() {
        var movingDivs = document.getElementsByClassName('moving-div'),
            i, length;

        for (i = 0, length = movingDivs.length; i < length; i++) {
            var element = movingDivs[i],
                elementCoordinates = {};

            if (element.classList.contains('rect-trajectory')) {
                elementCoordinates = getNewRectPositions(element);
            } else if (element.classList.contains('ellipse-trajectory')) {
                elementCoordinates = getNewEllipsePositions(element);
            }

            setTopLeftPosition(element, elementCoordinates);
        }
    }

    function setTopLeftPosition(element, elementCoordinates) {
        element.setAttribute('position-x', elementCoordinates.x.toString());
        element.setAttribute('position-y', elementCoordinates.y.toString());

        element.style.left = elementCoordinates.x + 'px';
        element.style.top = elementCoordinates.y + 'px';
    }

    function add(trajectory) {
        if (!trajectoryOptions.contains(trajectory)) {
            console.error('Unsupported trajectory.');
            return;
        }

        var divToAdd = document.createElement('div');
        divToAdd.style.width = DIV_WIDTH + 'px';
        divToAdd.style.height = DIV_HEIGHT + 'px';
        divToAdd.style.position = 'absolute';
        divToAdd.style.background = getRandomColor();
        divToAdd.style.border = '1px solid ' + getRandomColor();
        divToAdd.style.color = getRandomColor();
        divToAdd.style.textAlign = 'center';
        divToAdd.style.verticalAlign = 'middle';
        divToAdd.style.lineHeight = DIV_HEIGHT + 'px';

        divToAdd.innerText = divCount;
        divToAdd.classList.add('moving-div');

        if (trajectory === 'rect') {
            divToAdd.classList.add('rect-trajectory');
            divToAdd.setAttribute('position-x', TRAJECTORY_MIN.toString());
            divToAdd.setAttribute('position-y', TRAJECTORY_MIN.toString());
            divToAdd.setAttribute('direction-x', '0');
            divToAdd.setAttribute('direction-y', '1');
        } else if (trajectory === 'ellipse') {
            divToAdd.classList.add('ellipse-trajectory');
            divToAdd.setAttribute('position-x', TRAJECTORY_CENTER_X.toString());
            divToAdd.setAttribute('position-y', (TRAJECTORY_CENTER_Y - TRAJECTORY_RADIUS).toString());
            divToAdd.setAttribute('angle', (3 * Math.PI / 2).toString());
        }

        var elementCoordinates = {
            x: divToAdd.getAttribute('position-x') * 1,
            y: divToAdd.getAttribute('position-y') * 1
        };

        setTopLeftPosition(divToAdd, elementCoordinates);

        document.body.appendChild(divToAdd);

        divCount += 1;
    }

    return {
        add: add
    }
}());
