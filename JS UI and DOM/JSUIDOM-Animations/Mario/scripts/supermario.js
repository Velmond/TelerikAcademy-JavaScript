/*globals window, Raphael, Kinetic, Image */

// 01. Create a walking Super Mario
//     - Super Mario must be walking indefinitely from left to right on the screen
//     - The background must be created using SVG
//     - Additional requirements:
//           = You can use sprites from this link - http://bit.ly/1pTl5L6
//           = Use Canvas for Super Mario
//           = Use SVG for the background
//           = You can use Raphael and/or KineticJS, or native Canvas/SVG APIs

window.onload = function () {
    "use strict";
    var paper = new Raphael(0, 0, 300, 169),
        stage = new Kinetic.Stage({
            container: 'container',
            width: 300,
            height: 169
        }),
        layer = new Kinetic.Layer(),
        imageObj = new Image();

    paper.image("../imgs/overworld_bg.png", 0, 0, 300, 169);

    imageObj.onload = function () {
        var frameCount = 0,
            superMario = new Kinetic.Sprite({
                x: 100,
                y: 111,
                image: imageObj,
                animation: 'idleRight',
                animations: {
                    idleRight: [
                        /*x, y, width, height*/
                        48, 548, 16, 32
                    ],
                    idleLeft: [
                        48, 628, 16, 32
                    ],
                    moveRight: [
                        115, 548, 16, 32,
                        95, 548, 16, 32,
                        140, 548, 16, 32
                    ],
                    moveLeft: [
                        49, 588, 16, 32,
                        70, 589, 16, 32,
                        24, 589, 16, 32
                    ]
                },
                frameRate: 12
            });

        layer.add(superMario);
        stage.add(layer);
        superMario.start();

        superMario.on('frameIndexChange', function () {
            frameCount += 1;
            if (superMario.animation() !== 'idleLeft' && superMario.animation() !== 'idleRight' && frameCount > 3) {
                frameCount = 0;
                if (superMario.animation() === 'moveLeft') {
                    superMario.animation('idleLeft');
                } else {
                    superMario.animation('idleRight');
                }
            }
        });

        function onKeyDown(e) {
            if (e.keyCode === 37) {
                superMario.attrs.animation = "moveLeft";
                superMario.setX(superMario.attrs.x - 2);
            } else if (e.keyCode === 39) {
                superMario.attrs.animation = "moveRight";
                superMario.setX(superMario.attrs.x + 2);
            }
        }

        window.addEventListener('keydown', onKeyDown);
    };

    imageObj.src = "../imgs/mario.gif";
};
