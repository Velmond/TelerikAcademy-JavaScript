// Create a SPA application "Crowd Chat"
// - The application must use the following web services:
//   = GET http://crowd-chat.herokuapp.com/posts
//     > Return all posts
//   = POST http://crowd-chat.herokuapp.com/posts
//     > Body: { "user": "USER_NAME", "text": "MESSAGE_TEXT" }
//     > Sends a new post

(function () {
    'use strict';
    require.config({
        paths: {
            jquery: 'libs/jquery-2.1.1.min',
            q: 'libs/q',
            sammy: 'libs/sammy'
        }
    });

    require(['jquery', 'sammy', 'chatController'], function($, Sammy, ChatController) {
        var controller = new ChatController('http://crowd-chat.herokuapp.com/posts', 4 /*seconds*/, 100 /*message count*/);
        controller.setEventHandlers();

        var chat = Sammy('#chat-container', function() {
            this.get('#/login', function() {
                if (controller.isLoggedIn()) {
                    window.location = '#/chat';
                    return;
                }

                controller.loadLoginForm();
            });

            this.get('#/chat', function() {
                if (!controller.isLoggedIn()) {
                    window.location = '#/login';
                    return;
                }

                controller.loadChat();
            });
        });

        chat.run('#/login');
    });
}());