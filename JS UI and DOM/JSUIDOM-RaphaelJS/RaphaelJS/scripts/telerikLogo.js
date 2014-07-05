// Create Telerik's logos using Raphael
function drawTelerikLogo(paper) {
    'use strict';

    var logo = paper.path('M60 120 90 90 162 162 126 198 90 162 162 90 192 120'),
        name = paper.text(430, 155, 'Telerik'),
        copirightText = paper.text(655, 153, 'R'),
        copirightCircle = paper.circle(655, 153, 11),
        slogan = paper.text(512, 240, 'Develop experiences');

    logo.attr({
        stroke: '#5CE600',
        'stroke-width': 17
    });

    name.attr({
        'font-family': 'Segoe UI Semibold',
        'font-size': 140,
        'font-weight': 'bold'
    });

    copirightText.attr({
        'font-family': 'Arial',
        'font-size': 18,
        'font-weight': 'bold'
    });

    copirightCircle.attr({
        'stroke-width': 2
    });

    slogan.attr({
        'font-family': 'Segoe UI',
        'font-size': 60
    });
}

var paper = Raphael(10, 10, 1000, 500);

drawTelerikLogo(paper);
