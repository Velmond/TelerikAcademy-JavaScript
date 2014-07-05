// Create YouTube's logos using Raphael
function drawYouTubeLogo(paper) {
    'use strict';

    var rect = paper.rect(400, 145, 220, 105, 25),
        youText = paper.text(320, 200, 'You'),
        tubeText = paper.text(510, 200, 'Tube');

    rect.attr({
        fill: '#EC2828',
        stroke: 'none'
    });

    youText.attr({
        'font-size': 100,
        'font-family': 'Trade Gothic Bold Condensed, Franklin Gothic Medium Cond, Arial Narrow, Impact',
        'font-weight': 'normal',
        fill: '#4B4B4B'
    });

    tubeText.attr({
        'font-size': 100,
        'font-family': 'Franklin Gothic Medium Cond, Arial Narrow, Impact',
        'font-weight': 'normal',
        fill: 'white'
    });
}

var paper = Raphael(10, 10, 1000, 500);

drawYouTubeLogo(paper);
