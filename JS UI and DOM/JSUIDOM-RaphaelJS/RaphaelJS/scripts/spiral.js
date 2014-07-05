// Create a spiral using Raphael
function drawSpiral(paper, centerX, centerY, offsetFromCenter, turnDistance) {
    'use strict';
    var spiralPath = "M" + centerX + ' ' + centerY,
        i,
        angle,
        x,
        y;

    for (i = 0; i < 3600; i += 1) {
        angle = 0.01 * i;
        x = centerX + (offsetFromCenter + turnDistance * angle) * Math.cos(angle);
        y = centerY + (offsetFromCenter + turnDistance * angle) * Math.sin(angle);

        spiralPath += ' L ' + x + ' ' + y;
    }

    paper.path(spiralPath);
}

var paper = Raphael(10, 10, 1000, 500);

drawSpiral(paper, 500, 250, 0, 6);