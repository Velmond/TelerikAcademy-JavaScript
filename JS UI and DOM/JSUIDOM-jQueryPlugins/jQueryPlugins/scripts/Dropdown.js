// 01. Create a jQuery plugin for creating dropdown list
//   - By given the following:
//     <select id="dropdown">
//         <option value="1">One</option>
//         <option value="2">Two</option>
//     </select>
//     $('#dropdown').dropdown()
//
//   - Produces the following HTML:
//     <select id="dropdown" style="display: none">…</select>
//     <div class="dropdown-list-container">
//       <ul class="dropdown-list-options">
//         <li class="dropdown-list-option" data-value="0">One</li>
//         …
//       </ul>
//     </div>
//
//   - And make it work as SELECT node
//     = Selecting an one of the generated LI nodes, selects the corresponding OPTION node
//       = So $('#dropdown:selected') works

(function ($) {
    'use strict';
    $.fn.dropdown = function () {
        var $select = $(this).hide(),
            $container = $('<div>')
                .addClass('dropdown-list-container')
                .appendTo('body'),
            $options = $('<ul>')
                .addClass('dropdown-list-options')
                .appendTo($container)
                .css({
                    'width': '100px',
                    'list-style-type': 'none',
                    'padding': '0 5px',
                    'margin': '0',
                    'border': '1px solid black'
                }),
            $selection = $('<li>')
                .addClass('dropdown-list-option')
                .text('Choose option')
                .attr('data-value', '')
                .appendTo($options)
                .on('click', toggleSelectableVisibility)
                .css({
                    'width': '100px',
                    'padding': '5px',
                }),
            options = $select.children(),
            optionsKeyValuePair = getOptionsData(options),
            i,
            length;

        $.each(optionsKeyValuePair, function () {
            var keyValuePair = this;
            $('<li>')
                .text(keyValuePair.key)
                .attr('data-value', keyValuePair.value)
                .click(function () {
                    var $this = $(this),
                        selectedDataValue = $this.attr('data-value');

                    $('.dropdown-list-options li[selected]').removeAttr('selected');
                    $this.attr('selected', 'selected');
                    $selection.text($this.text());
                    $selection.attr('data-value', $this.attr('data-value'));
                    $('.dropdown-list-options li:not(.dropdown-list-option)').hide();
                    $select
                        .children()
                        .attr('selected', false)
                        .filter('[value="' + selectedDataValue + '"]')
                        .attr('selected', true);
                })
                .hover(function(){
                    $(this).css('background-color', 'lightgray')
                }, function () {
                    $(this).css('background-color', 'white')
                })
                .appendTo($options);
        });

        var $allOptions = $selection.siblings();
        $allOptions.hide();

        function toggleSelectableVisibility() {
            var visibleSiblings = $selection.siblings().filter(':visible');

            if (visibleSiblings.length !== 0) {
                $allOptions.hide();
            }
            else {
                $allOptions.show();
            }
        }

        function getOptionsData(optionsCollection) {
            var dictionary = [];

            for (i = 0, length = optionsCollection.length; i < length; i += 1) {
                dictionary.push({
                    key: optionsCollection[i].innerHTML,
                    value: optionsCollection[i].value
                });
            }

            return dictionary;
        }
    }
}(jQuery));
