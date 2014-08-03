define(function() {
    var UI = (function() {
        var div = document.createElement('div'),
            span = document.createElement('span'),
            strong = document.createElement('strong');

        div.appendChild(strong);
        div.appendChild(span);

        function displayMessage(messageBy, message) {
            var chatMsg;

            // set the message's values
            strong.innerHTML = messageBy + ': ';
            span.innerHTML = message;
            chatMsg = div.cloneNode(true);

            // reset the message's values
            strong.innerHTML = '';
            span.innerHTML = '';

            return chatMsg;
        }

        function displayChatBox(data, messagesToDisplay) {
            var frag,
                messageJSON,
                messageBy,
                message,
                messageHtml,
                i,
                len;

            frag = document.createDocumentFragment();

            for (i = Math.max(data.length - messagesToDisplay, 0), len = data.length; i < len; i += 1) {
                messageJSON = data[i];
                messageBy = messageJSON.by.trim();
                message = messageJSON.text.trim();

                if (!messageBy || !message) {
                    continue;
                }

                messageHtml = displayMessage(messageBy, message);
                frag.appendChild(messageHtml);
            }

            return frag;
        }

        return {
            displayMessage: displayMessage,
            displayChatBox: displayChatBox
        }
    }());

    return UI;
});
