/*globals document, window */

// 01. Write a script that creates a number of div elements. Each div element must have the following:
//   - Random width and height between 20px and 100px;
//   - Random background color;
//   - Random font color;
//   - Random position on the screen (position:absolute);
//   - A strong element with text "div" inside the div;
//   - Random border radius;
//   - Random border color;
//   - Random border width between 1px and 20px;

function generateRandomNumber(from, to) {
    'use strict';
    if (from > to) {
        to = from + to;
        from = to - from;
        to = to - from;
    }

    var value = (from + (Math.random() * ((to + 1) - from))) | 0;
    return value;
}

// Random width and height between 20px and 100px;
function generateRandomDimentions() {
    'use strict';
    var width = generateRandomNumber(20, 100),
        height = generateRandomNumber(20, 100);

    return {
        width: width,
        height: height
    };
}

// Random background color;
// Random font color;
function generateRandomColor() {
    'use strict';
    var red = generateRandomNumber(0, 255),
        green = generateRandomNumber(0, 255),
        blue = generateRandomNumber(0, 255),
        rgbString = 'rgb(' + red.toString() + ', ' + green.toString() + ', ' + blue.toString() + ')';

    return rgbString;
}

// Random position on the screen (position:absolute);
function generateRandomPosition(maxScreenWidth, maxScreenHeight) {
    'use strict';
    var top = generateRandomNumber(0, maxScreenHeight),
        left = generateRandomNumber(0, maxScreenWidth);

    return {
        top: top,
        left: left
    };
}

// Random border radius;
// Random border color;
// Random border width between 1px and 20px;
function generateRandomBorder(elementWidth, elementHeight) {
    'use strict';
    var smallerElementSize = Math.min(elementWidth, elementHeight),
        radius = generateRandomNumber(0, smallerElementSize / 2),
        color = generateRandomColor(),
        width = generateRandomNumber(1, 20);

    return {
        radius: radius,
        color: color,
        width: width
    };
}

function generateDivs() {
    'use strict';
    var container = document.getElementById('container'),
        numberOfDivs = document.getElementById('numberOfDivs').value * 1,
        fragment = document.createDocumentFragment(),
        i,
        div,
        innerStrongElement,
        dimentions,
        border,
        position;

    for (i = 0; i < numberOfDivs; i += 1) {
        div = document.createElement('div');
        innerStrongElement = document.createElement('strong');
        dimentions = generateRandomDimentions();
        border = generateRandomBorder(dimentions.width, dimentions.height);
        position = generateRandomPosition(
            window.innerWidth - (dimentions.width + 2 * border.width),
            window.innerHeight - (dimentions.height + 2 * border.width)
        );

        innerStrongElement.innerText = 'div';

        div.style.width = dimentions.width + 'px';
        div.style.height = dimentions.height + 'px';
        div.style.backgroundColor = generateRandomColor();
        div.style.color = generateRandomColor();
        div.style.position = 'absolute';
        div.style.top = position.top + 'px';
        div.style.left = position.left + 'px';
        div.style.borderRadius = border.radius + 'px';
        div.style.border = border.width + 'px solid ' + border.color;
        div.style.textAlign = 'center';

        div.appendChild(innerStrongElement);
        fragment.appendChild(div);
    }

    container.appendChild(fragment);
}

function clearScreen() {
    'use strict';
    var container = document.getElementById('container');
    container.innerHTML = '';
}
