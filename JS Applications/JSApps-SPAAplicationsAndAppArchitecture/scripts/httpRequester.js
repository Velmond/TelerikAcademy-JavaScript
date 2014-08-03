define(['jquery', 'q'], function ($, Q) {
   'use strict';
    var httpRequester = (function() {
        function request(url, type, object) {
            var deferred = Q.defer();

            $.ajax({
                url: url,
                type: type,
                data: object ? JSON.stringify(object) : '',
                contentType: 'application/json',
                timeout: 5000,
                success: function(resultData) {
                    deferred.resolve(resultData);
                },
                error: function(errorData) {
                    deferred.reject(errorData);
                }
            });

            return deferred.promise;
        }

        return {
            getJSON: function (url) {
                return request(url, 'GET');
            },
            postJSON: function (url, object) {
                return request(url, 'POST', object);

            }
        }
    }());

    return httpRequester;
});
