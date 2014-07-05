/*jslint browser: true */

// 03. *Create the famous game "Snake"
//     - The snake is a sequence of rectangles/ellipses
//     - The snake can move left, right, up or down
//     - The snake dies if it reaches any of the edges or when it tries to eat itself
//     - A food should be generated
//     - When the snake eats the food, it grows and new food is generated at random position
//     - Implement a high-score board, kept in localStorage

// I didn't have time for the high-score board. Everything else is done and works fairly well with no major side effects
// as far as I can tell.

function Segment(x, y) {
    'use strict';
    this.x = x;
    this.y = y;
}

function Snake(x, y) {
    'use strict';
    this.segmentSize = 5;
    this.body = [
        new Segment(x, y),
        new Segment(x - 2 * this.segmentSize, y),
        new Segment(x - 4 * this.segmentSize, y),
        new Segment(x - 6 * this.segmentSize, y)
    ];
    this.head = this.body[0];
}

function Bonus(x, y) {
    'use strict';
    this.x = x;
    this.y = y;
}

function generateRandomValue(max) {
    'use strict';
    return ((Math.random() * max / 10) | 0) * 10;   // Get a random value divisible by 10
}

function snakeGame() {
    'use strict';
    var scoreDisplay = document.getElementById('score'),
        canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.attributes.width.value,
        height = canvas.attributes.height.value,
        snake = new Snake(200, 200),
        bonus = new Bonus(550, 200),
        step = snake.segmentSize * 2,
        direction = {
            x: 1,
            y: 0
        },
        i,
        segment,
        score = 0;

    window.onkeypress = function (keyPressed) {
        if (keyPressed.charCode === 119 && direction.y !== 1) {
            direction.x = 0;
            direction.y = -1;
        } else if (keyPressed.charCode === 115 && direction.y !== -1) {
            direction.x = 0;
            direction.y = 1;
        } else if (keyPressed.charCode === 100 && direction.x !== -1) {
            direction.x = 1;
            direction.y = 0;
        } else if (keyPressed.charCode === 97 && direction.x !== 1) {
            direction.x = -1;
            direction.y = 0;
        }
    };

    function draw() {
        ctx.clearRect(0, 0, width, height);
        scoreDisplay.innerHTML = 'Score: ' + score;

        if (bonus.x - step < snake.head.x && snake.head.x < bonus.x + step &&
                bonus.y - step < snake.head.y && snake.head.y < bonus.y + step) {
            snake.body.splice(1, 0, new Segment(snake.head.x, snake.head.y));
            score += 1;

            for (i = 0; i < snake.body.length; i += 1) {
                segment = snake.body[i];

                if (i === 0) {
                    segment.x += direction.x * step;
                    segment.y += direction.y * step;
                }

                ctx.beginPath();
                ctx.arc(segment.x, segment.y, snake.segmentSize, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            }

            bonus = new Bonus(generateRandomValue(width), generateRandomValue(height));
        } else {
            for (i = snake.body.length - 1; i >= 0; i -= 1) {
                segment = snake.body[i];

                if (i !== 0) {
                    segment.x = snake.body[i - 1].x;
                    segment.y = snake.body[i - 1].y;
                } else {
                    segment.x += direction.x * step;
                    segment.y += direction.y * step;
                }

                ctx.beginPath();
                ctx.arc(segment.x, segment.y, snake.segmentSize, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            }
        }

        ctx.beginPath();
        ctx.arc(bonus.x, bonus.y, snake.segmentSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        if (snake.head.x < 0 || snake.head.x > width || snake.head.y < 0 || snake.head.y > height) {
            alert("GAME OVER!");
            location.reload();
        }

        for (i = 1; i < snake.body.length; i += 1) {
            if (snake.head.x === snake.body[i].x && snake.head.y === snake.body[i].y) {
                alert("GAME OVER!");
                location.reload();
            }
        }
    }

    setInterval(draw, 100);
}

snakeGame();
