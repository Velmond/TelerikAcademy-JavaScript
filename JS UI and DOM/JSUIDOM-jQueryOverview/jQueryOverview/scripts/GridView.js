// 05. *Implement a GridView control
//   - Rows can be added dynamically
//   - A header row can be added dynamically
//     = Each GridView can have at most one header row
//   - Each row can have a nested GridView
//     = Each GridView can have at most one nested GridView 

(function () {
    'use strict';
    $('body').append(generateGridView());

    function generateGridView() {
        var $gridView = $('<div>'),
            $controls = $('<div>').addClass('controls'),
            $cellsCountInput = $('<input>').attr('type', 'number').attr('placeholder', '0').on('change', listInputFields),
            $cellContent = $('<input>').attr('placeholder', 'cell content').attr('type', 'text'),
            $addRowBtn = $('<button>').attr('id', 'addRowBtn').text('Add row').on('click', addRow),
            $addHeaderBtn = $('<button>').attr('id', 'addHeaderBtn').text('Add header').on('click', addHeader),
            $removeHeaderBtn = $('<button>').attr('id', 'removeHeaderBtn').text('Remove header').on('click', removeHeader),
            $addGridBtn = $('<button>').attr('id', 'addGridBtn').text('Add gridview').on('click', addGrid),
            $table = $('<table>'),
            $header = $('<th>'),
            $row = $('<tr>'),
            $cell = $('<td>'),
            cellsCount = 0,
            hasHeader = false;

        $controls
            .append($cellsCountInput)
            .append($addRowBtn)
            .append($addHeaderBtn)
            .append($removeHeaderBtn)
            .append($addGridBtn);

        $gridView
            .append($controls)
            .append($table);

        function listInputFields() {
            var $this = $(this).parent();
            $this.find('> input:not(:first-of-type)').remove(); // :first-of-type is the input of the number of cells
            cellsCount = this.value;

            for (var i = 0; i < cellsCount; i++) {
                $cellContent.clone(true).insertAfter($addGridBtn);
            }
        }

        function addRow() {
            var $this = $(this).parent(),
                $tableContainer = $this.parent(),
                $cells = $this.find('> input:not(:first-of-type)'),
                $newRow = $row.clone(true);

            for (var i = 0, length = $cells.length; i < length; i++) {
                var content = $cells[i].value || '&nbsp;';
                $cell.clone(true).html(content).appendTo($newRow);
            }

            $tableContainer.find('> table:first-of-type').append($newRow);
        }

        function addHeader() {
            var $this = $(this).parent(),
                $tableContainer = $this.parent();

            if (!hasHeader) {
                var $cells = $this.find('> input:not(:first-of-type)'),
                    $newRow = $row.clone(true);

                for (var i = 0, length = $cells.length; i < length; i++) {
                    var content = $cells[i].value || '&nbsp;';
                    $header.clone(true).html(content).appendTo($newRow);
                }

                $tableContainer.find('> table:first-of-type').prepend($newRow);
                hasHeader = true;
            }
        }

        // I'm having trouble with removing headers but lack the time to fix it so sorry...
        function removeHeader() {
            var $tableContainer = $(this).parent().parent();

            if (hasHeader) {
                $tableContainer.find('> table:first-of-type').find('tr:first-child').remove();
                hasHeader = false;
            }
        }

        function addGrid() {
            var $this = $(this).parent(),
                $tableContainer = $this.parent(),
                $newRow = $row.clone(true),
                $newCell = $cell.clone(true),
                $newGrid = generateGridView();

            $newCell.html($newGrid[0]).attr('colspan', cellsCount);
            $newRow.append($newCell);
            $tableContainer.find('> table:first-of-type').append($newRow);
        }

        return $gridView;
    };
}());