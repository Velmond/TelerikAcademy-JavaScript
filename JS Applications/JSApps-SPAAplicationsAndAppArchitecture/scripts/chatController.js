define(['httpRequester', 'ui', 'jquery'], function(HttpRequester, UI, $) {
    var ChatController = (function() {
        function isValidUsername(username) {
            return (username && typeof username == 'string' && (4 <= username.length && username.length <= 20));
        }

        var ChatController = function(url, refreshTimeInSeconds, messagesToDisplay) {
            this._resourseUrl = url;
            this._refreshTime = refreshTimeInSeconds * 1000;
            this._messagesToDisplay = messagesToDisplay;
        };

        ChatController.prototype.userName = function(name) {
            if (!name) {
                return sessionStorage.getItem('username');
            } else {
                sessionStorage.setItem('username', name);
            }
        };

        ChatController.prototype.clearUsername = function() {
            sessionStorage.removeItem(this.userName());
        };

        ChatController.prototype.isLoggedIn = function() {
            return this.userName();
        };

        ChatController.prototype.loadChat = function() {
            var _this = this;

            $.when(
                $.get('pageViews/chat.html', function(data) {
                    $('#chat-container').html(data);
                    $('.username-box').html(_this.userName());
                    _this.updateChat();

                    setInterval(function() {
                        _this.updateChat();
                    }, _this._refreshTime);
                }));
        };

        ChatController.prototype.updateChat = function() {
            var _this = this;

            HttpRequester.getJSON(this._resourseUrl)
                .then(function(data) {
                    var chatBoxHtml = UI.displayChatBox(data, _this._messagesToDisplay),
                        chat = document.getElementById('chat');
                    $('#chat').html(chatBoxHtml);
                    chat.scrollTop = chat.scrollHeight;
                });
        };

        ChatController.prototype.loadLoginForm = function() {
            $('#chat-container').load('pageViews/login.html');
        };

        ChatController.prototype.setEventHandlers = function() {
            var _this = this,
                $chatContainer = $('#chat-container');

            $chatContainer.on('click', '#login-btn', function() {
                var $loginName = $('#login-name'),
                    username = $loginName.val();

                if (isValidUsername(username)) {
                    _this.userName(username);
                    $loginName.removeClass('invalid-input');
                    window.location = '#/chat';
                }
                else {
                    $loginName.addClass('invalid-input');
                }
            });

            $chatContainer.on('click', '#exit-btn', function() {
                var exit = confirm('Are you sure you want to log out as ' + _this.userName() + '?');

                if (exit) {
                    _this.clearUsername();
                    window.location = '#/login';
                }
            });

            $chatContainer.on('click', '#submit-btn', function() {
                var $messageInput = $('#message'),
                    messageText = $messageInput.val().trim(),
                    messageBy = _this.userName(),
                    message,
                    post;

                if (messageText) {
                    message = {
                        user: messageBy,
                        text: messageText
                    };
                    HttpRequester.postJSON(_this._resourseUrl, message)
                        .then(function() {
                            $messageInput.val('');
                            post = UI.displayMessage(messageBy, messageText);
                            post.appendTo($('#chat'));
                            _this.updateChat();
                            $messageInput.removeClass('invalid-input');
                        }, function() {
                            $messageInput.addClass('invalid-input');
                        })
                }
                else {
                    $messageInput.addClass('invalid-input');
                }
            });
        };

        return ChatController;
    }());

    return ChatController;
});
