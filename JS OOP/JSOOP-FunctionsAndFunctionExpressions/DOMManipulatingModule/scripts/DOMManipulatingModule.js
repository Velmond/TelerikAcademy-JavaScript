// 01. Create a module for working with DOM.
//     The module should have the following functionality
//     - Add DOM element to parent element given by selector;
//     - Remove element from the DOM by given selector;
//     - Attach event to given selector by given event type and event handler;
//     - Add elements to buffer, which appends them to the DOM when their count for some selector becomes 100;
//     - The buffer contains elements for each selector it gets;
//     - Get elements by CSS selector;
//     - The module should reveal only the methods;
//
//     var domModule = …
//     var div = document.createElement("div");
//     //appends div to #wrapper
//     domModule.appendChild(div, "#wrapper");
//     //removes li:first-child from ul
//     domModule.removeChild("ul", "li:first-child");
//     //add handler to each a element with class button
//     domModule.addHandler("a.button", 'click', function(){ alert("Clicked") });
//     domModule.appendToBuffer("container", div.cloneNode(true));
//     domModule.appendToBuffer("#main-nav ul", navItem);

var domModule = (function () {
    'use strict';
    var buffer = [];

    // Appends the element to the first element that matches the parentSelector
    function appendChild(element, parentSelector) {
        var parent = document.querySelector(parentSelector);

        if (parent) {
            parent.appendChild(element);
        } else {
            console.error('Parent selector is invalid!');
        }
    }

    // Removes the first element that matches the elementSelector in
    // the first element that matches parentSelector
    function removeChild(parentSelector, elementSelector) {
        var parent = document.querySelector(parentSelector),
            element = document.querySelector(elementSelector);

        if (parent && element) {
            parent.removeChild(element);
        } else if (!parent && !element){
            console.error('Both selectors are invalid!');
        } else if (!parent){
            console.error('Parent selector is invalid!');
        } else if (!element){
            console.error('Element selector is invalid!');
        }
    }

    // Adds eventHandler to all elements that match the selector
    function addHandler(selector, eventType, eventHandler) {
        var elements = document.querySelectorAll(selector),
            i, length;

        if (elements) {
            for (i = 0, length = elements.length; i < length; i += 1) {
                if (elements[i].addEventListener) {
                    elements[i].addEventListener(eventType, eventHandler);
                } else {
                    elements[i].attachEvent('on' + eventType, eventHandler);
                }
            }
        } else {
            console.error('Invalid selector!');
        }
    }

    // Appends the element to the buffer for the specified parentSelector
    // and adds all child nodes from said buffer when they become 100
    function appendToBuffer(parentSelector, element) {
        var parent = document.querySelector(parentSelector);

        if (parent) {
            if (!buffer[parentSelector]) {
                buffer[parentSelector] = document.createDocumentFragment();
            }

            buffer[parentSelector].appendChild(element);

            if (buffer[parentSelector].childElementCount >= 100) {
                parent.appendChild(buffer[parentSelector]);
                delete buffer[parentSelector];
            }
        } else {
            console.error('Parent selector is invalid!');
        }
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        appendToBuffer: appendToBuffer
    }
}());
