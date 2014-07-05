// 01. Create a module for drawing shapes using Canvas.
//     Implement the following shapes:
//     - Rect, by given position (X, Y) and size (Width, Height);
//     - Circle, by given center position (X, Y) and radius (R);
//     - Line, by given from (X1, Y1) and to (X2, Y2) positions;

var Rect = (function () {
    'use strict';
    function Rect(top, left, width, height) {
        /// <summary>
        /// Creates a rectangle.
        /// </summary>
        /// <param name="top" type="Number" optional="false">Distance from the top border of the containing element.</param>
        /// <param name="left" type="Number" optional="false">Distance from the left border of the containing element.</param>
        /// <param name="width" type="Number" optional="false">Width of the created rectangle.</param>
        /// <param name="height" type="Number" optional="false">Height of the created rectangle.</param>
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }

    Rect.prototype.draw = function (context, lineWidth, strokeColor, fillColor) {
        /// <summary>
        /// Draws the rectangle in the specified context.
        /// </summary>
        /// <param name="context" type="Object" optional="false">The context in which the line will be drawn.</param>
        /// <param name="lineWidth" type="Number" optional="true">Width of the rectangle defining line.</param>
        /// <param name="strokeColor" type="String" optional="true">Color of the rectangle defining line.</param>
        /// <param name="fillColor" type="String" optional="true">Color of the rectangle.</param>

        // If line width is not given in the constructor, but stroke color is
        if (typeof lineWidth === 'string' || lineWidth instanceof String) {
            fillColor = strokeColor;    // becomes 'undefined' if lineWidth was not given
            strokeColor = lineWidth;
            lineWidth = undefined;
        }

        context.lineWidth = lineWidth || 1;
        context.strokeStyle = strokeColor || 'black';

        context.beginPath();
        context.rect(this.left, this.top, this.width, this.height);

        if (fillColor) {
            context.fillStyle = fillColor;
            context.fill();
        }

        context.stroke();
        context.closePath();

        return this;
    };

    return Rect;
}());

var Circle = (function () {
    'use strict';
    function Circle(centerTop, centerLeft, radius) {
        /// <summary>
        /// Creates a circle.
        /// </summary>
        /// <param name="centerTop" type="Number" optional="false">Distance from the top border of the containing element to the center of the circle.</param>
        /// <param name="centerLeft" type="Number" optional="false">Distance from the left border of the containing element to the center of the circle.</param>
        /// <param name="radius" type="Number" optional="false">Radius of the created circle.</param>
        this.centerTop = centerTop;
        this.centerLeft = centerLeft;
        this.radius = radius;
    }

    Circle.prototype.draw = function (context, lineWidth, strokeColor, fillColor) {
        /// <summary>
        /// Draws the circle in the specified context.
        /// </summary>
        /// <param name="context" type="Object" optional="false">The context in which the line will be drawn.</param>
        /// <param name="lineWidth" type="Number" optional="true">Width of the circle defining line.</param>
        /// <param name="strokeColor" type="String" optional="true">Color of the circle defining line.</param>
        /// <param name="fillColor" type="String" optional="true">Color of the circle.</param>

        // If line width is not given in the constructor, but stroke color is
        if (typeof lineWidth === 'string' || lineWidth instanceof String) {
            fillColor = strokeColor;    // becomes 'undefined' if lineWidth was not given
            strokeColor = lineWidth;
            lineWidth = undefined;
        }

        context.lineWidth = lineWidth || 1;
        context.strokeStyle = strokeColor || 'black';

        context.beginPath();
        context.arc(this.centerLeft, this.centerTop, this.radius, 0, Math.PI * 2);

        if (fillColor) {
            context.fillStyle = fillColor;
            context.fill();
        }

        context.stroke();
        context.closePath();

        return this;
    };

    return Circle;
}());

var Line = (function () {
    'use strict';
    function Line(startX, startY, endX, endY) {
        /// <summary>
        /// Draws a line.
        /// </summary>
        /// <param name="startX" type="Number" optional="false">Starting coordinate X of the line.</param>
        /// <param name="startY" type="Number" optional="false">Starting coordinate Y of the line.</param>
        /// <param name="endX" type="Number" optional="false">Ending coordinate X of the line.</param>
        /// <param name="endY" type="Number" optional="false">Starting coordinate Y of the line.</param>
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    }

    Line.prototype.draw = function (context, lineWidth, strokeColor) {
        /// <summary>
        /// Draws the line in the specified context.
        /// </summary>
        /// <param name="context" type="Object" optional="false">The context in which the line will be drawn.</param>
        /// <param name="lineWidth" type="Number" optional="true">Width of the circle defining line.</param>
        /// <param name="strokeColor" type="String" optional="true">Color of the circle defining line.</param>

        // If line width is not given in the constructor but stroke color is
        if (typeof lineWidth === 'string' || lineWidth instanceof String) {
            strokeColor = lineWidth;
            lineWidth = undefined;
        }

        context.lineWidth = lineWidth || 1;
        context.strokeStyle = strokeColor || 'black';

        context.beginPath();
        context.moveTo(this.startX, this.startY);
        context.lineTo(this.endX, this.endY);
        context.closePath();
        context.stroke();

        return this;
    };

    return Line;
}());

var DrawModule = function (selector) {
    /// <summary>
    /// Creates a draw module that can draw different shapes in the selected canvas.
    /// </summary>
    /// <param name="selector" type="Object" optional="false">Selector for the canvas in which the draw module will draw shapes.</param>
    'use strict';
    var canvas = document.querySelector(selector),
        ctx = canvas.getContext('2d');

    function rectangle(top, left, width, height, lineWidth, strokeColor, fillColor) {
        /// <summary>
        /// Draws a rectangle with the specified coordinates, dimensions and properties.
        /// </summary>
        /// <param name="top" type="Number" optional="false">Distance from the top border of the canvas.</param>
        /// <param name="left" type="Number" optional="false">Distance from the left border of the canvas.</param>
        /// <param name="width" type="Number" optional="false">Width of the created rectangle.</param>
        /// <param name="height" type="Number" optional="false">Height of the created rectangle.</param>
        /// <param name="lineWidth" type="Number" optional="true">Width of the rectangle defining line.</param>
        /// <param name="strokeColor" type="String" optional="true">Color of the rectangle defining line.</param>
        /// <param name="fillColor" type="String" optional="true">Color of the rectangle.</param>
        new Rect(top, left, width, height).draw(ctx, lineWidth, strokeColor, fillColor);
    }

    function circle(centerTop, centerLeft, radius, lineWidth, strokeColor, fillColor) {
        /// <summary>
        /// Draws a circle with the specified coordinates, radius and properties.
        /// </summary>
        /// <param name="centerTop" type="Number" optional="false">Distance from the top border of the canvas to the center of the circle.</param>
        /// <param name="centerLeft" type="Number" optional="false">Distance from the left border of the canvas to the center of the circle.</param>
        /// <param name="radius" type="Number" optional="false">Radius of the created circle.</param>
        /// <param name="lineWidth" type="Number" optional="true">Width of the circle defining line.</param>
        /// <param name="strokeColor" type="String" optional="true">Color of the circle defining line.</param>
        /// <param name="fillColor" type="String" optional="true">Color of the circle.</param>
        new Circle(centerTop, centerLeft, radius).draw(ctx, lineWidth, strokeColor, fillColor);
    }

    function line(startX, startY, endX, endY, lineWidth, strokeColor) {
        /// <summary>
        /// Draws a line with the specified coordinates and properties.
        /// </summary>
        /// <param name="startX" type="Number" optional="false">Starting coordinate X of the line.</param>
        /// <param name="startY" type="Number" optional="false">Starting coordinate Y of the line.</param>
        /// <param name="endX" type="Number" optional="false">Ending coordinate X of the line.</param>
        /// <param name="endY" type="Number" optional="false">Starting coordinate Y of the line.</param>
        /// <param name="lineWidth" type="Number" optional="true">Width of the circle defining line.</param>
        /// <param name="strokeColor" type="String" optional="true">Color of the circle defining line.</param>
        new Line(startX, startY, endX, endY).draw(ctx, lineWidth, strokeColor);
    }

    return {
        rectangle: rectangle,
        circle: circle,
        line: line
    };
};
