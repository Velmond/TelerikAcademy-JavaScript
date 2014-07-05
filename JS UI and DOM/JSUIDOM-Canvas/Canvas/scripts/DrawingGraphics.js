/*jslint browser: true */

// 01. Draw the following graphics using canvas:

function drawEllipse(ctx, centerX, centerY, width, height) {
    'use strict';
    ctx.beginPath();

    ctx.moveTo(centerX, centerY - height / 2);

    ctx.bezierCurveTo(
        centerX + width / 2,
        centerY - height / 2,
        centerX + width / 2,
        centerY + height / 2,
        centerX,
        centerY + height / 2
    );

    ctx.bezierCurveTo(
        centerX - width / 2,
        centerY + height / 2,
        centerX - width / 2,
        centerY - height / 2,
        centerX,
        centerY - height / 2
    );

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawHead(ctx) {
    'use strict';
    ctx.fillStyle = 'lightblue';
    ctx.strokeStyle = 'black';

    ctx.beginPath();    // Head
    ctx.arc(300, 300, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    drawEllipse(ctx, 235, 275, 40, 20); // Eyes
    drawEllipse(ctx, 315, 275, 40, 20);
    ctx.fillStyle = 'darkblue';
    ctx.strokeStyle = 'black';
    drawEllipse(ctx, 230, 275, 10, 15);
    drawEllipse(ctx, 310, 275, 10, 15);

    ctx.beginPath();    // Nose
    ctx.moveTo(275, 275);
    ctx.lineTo(250, 325);
    ctx.lineTo(275, 325);
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = 'lightblue';
    ctx.strokeStyle = 'black';
    ctx.save();
    ctx.rotate(0.3);
    drawEllipse(ctx, 350, 260, 100, 25);    // Mouth
    ctx.restore();

    ctx.fillStyle = 'darkblue';
    ctx.strokeStyle = 'black';

    ctx.beginPath();    // Base of hat
    ctx.moveTo(200, 225);
    ctx.bezierCurveTo(200, 190, 400, 190, 400, 225);
    ctx.bezierCurveTo(400, 260, 200, 260, 200, 225);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();    // Body of hat
    ctx.moveTo(250, 100);
    ctx.lineTo(250, 225);
    ctx.bezierCurveTo(250, 250, 350, 250, 350, 225);
    ctx.lineTo(350, 100);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();    // Top of hat
    ctx.moveTo(250, 100);
    ctx.bezierCurveTo(250, 75, 350, 75, 350, 100);
    ctx.bezierCurveTo(350, 125, 250, 125, 250, 100);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawBike(ctx) {
    'use strict';
    ctx.fillStyle = 'lightblue';
    ctx.strokeStyle = 'black';

    ctx.beginPath();    // Back wheel
    ctx.arc(500, 400, 75, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();    // Front wheel
    ctx.arc(800, 400, 75, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();    // Frame
    ctx.moveTo(500, 400);
    ctx.lineTo(625, 400);
    ctx.lineTo(784, 300);
    ctx.lineTo(600, 300);
    ctx.lineTo(500, 400);
    ctx.moveTo(625, 400);
    ctx.lineTo(600, 300);
    ctx.lineTo(594, 276);
    ctx.moveTo(565, 276);
    ctx.lineTo(625, 276);
    ctx.moveTo(800, 400);   // Steering starts here
    ctx.lineTo(776, 250);
    ctx.lineTo(816, 210);
    ctx.moveTo(776, 250);
    ctx.lineTo(726, 270);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();    // Pedals
    ctx.arc(625, 400, 25, 0, 2 * Math.PI);
    ctx.moveTo(607, 382);
    ctx.lineTo(590, 365);
    ctx.moveTo(643, 418);
    ctx.lineTo(660, 435);
    ctx.stroke();
    ctx.closePath();
}

function drawHouse(ctx) {
    'use strict';
    ctx.fillStyle = 'purple';
    ctx.strokeStyle = 'black';

    ctx.beginPath();    // Roof
    ctx.moveTo(300, 750);
    ctx.lineTo(700, 750);
    ctx.lineTo(500, 550);
    ctx.lineTo(300, 750);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();    // Chimney
    ctx.moveTo(585, 700);
    ctx.lineTo(585, 600);
    ctx.lineTo(615, 600);
    ctx.lineTo(615, 700);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    drawEllipse(ctx, 600, 600, 40, 10);

    ctx.beginPath();    // Building
    ctx.moveTo(300, 750);
    ctx.lineTo(300, 1000);
    ctx.lineTo(700, 1000);
    ctx.lineTo(700, 750);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();    // Top left window
    ctx.strokeStyle = 'purple';
    ctx.fillStyle = 'black';
    ctx.fillRect(325, 775, 150, 75);
    ctx.moveTo(400, 775);
    ctx.lineTo(400, 850);
    ctx.moveTo(325, 813);
    ctx.lineTo(475, 813);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();    // Top right window
    ctx.fillRect(525, 775, 150, 75);
    ctx.moveTo(600, 775);
    ctx.lineTo(600, 850);
    ctx.moveTo(525, 813);
    ctx.lineTo(675, 813);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();    // Bottom window
    ctx.fillRect(525, 900, 150, 75);
    ctx.moveTo(600, 900);
    ctx.lineTo(600, 975);
    ctx.moveTo(525, 938);
    ctx.lineTo(675, 938);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();    // Door
    ctx.strokeStyle = 'black';
    ctx.moveTo(325, 1000);
    ctx.lineTo(325, 900);
    ctx.bezierCurveTo(325, 850, 475, 850, 475, 900);
    ctx.lineTo(475, 1000);
    ctx.moveTo(400, 1000);
    ctx.lineTo(400, 863);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();    // Door knobs
    ctx.arc(385, 950, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(415, 950, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function drawGraphics() {
    'use strict';
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    drawHead(ctx);
    drawBike(ctx);
    drawHouse(ctx);
}

drawGraphics();
