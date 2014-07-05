// 02. *Create a jQuery plugin for fading in/fading out message box
//   - Creates a message box:
//     var msgBox = $('#message-box').messageBox();
//   - Show a success/error message in the box
//     = Showing is done by setting the opacity of the message from 0 to 1 in an interval of 1 second
//     = The message disappears after 3 seconds
//     msgBox.success('Success message');
//     msgBox.error('Error message');

(function ($) {
    $.fn.messageBox = function () {
        var $this = $(this);
        $this.error = function (message) {
            displayMessage(message, 'red');
        };

        $this.success = function (message) {
            displayMessage(message, 'green');
        };

        function displayMessage(message, color) {
            $this
                .html(message)
                .css({
                    'color': 'dark' + color,
                    'background-color': color === 'green' ? 'light' + color : color,
                    'display': 'inline-block',
                    'border': '1px solid dark' + color,
                    'padding': '5px 15px'
                })
                .fadeIn(1000, function () {
                    var $this = $(this);
                    window.setTimeout(function () {
                        $this.fadeOut(1000);
                    }, 1000);
                });
        }

        return $this;
    };
}(jQuery));