/*jslint browser: true */

// 02. Draw a circle that flies inside a box
//     - When it reaches an edge, it should bounce that edge

function Ball(x, y, radius) {
    'use strict';
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function bouncingBall() {
    'use strict';
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.attributes.width.value,
        height = canvas.attributes.height.value,
        ball = new Ball(0, 0, 5),
        speed = {
            x: 5,
            y: 5
        };

    function frame() {
        ctx.clearRect(0, 0, width, height);
        //ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        ctx.fill();

        if ((speed.x > 0 && (ball.x + speed.x) > width) || (speed.x < 0 && (ball.x + speed.x) < 0)) {
            speed.x *= -1;
        }

        if ((speed.y > 0 && (ball.y + speed.y) > height) || (speed.y < 0 && (ball.y + speed.y) < 0)) {
            speed.y *= -1;
        }

        ball.x += speed.x;
        ball.y += speed.y;

        requestAnimationFrame(frame);
    }

    frame();
}

bouncingBall();
