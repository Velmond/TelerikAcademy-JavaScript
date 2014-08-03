define(['libs/q'], function (Q) {
    'use strict';
    var requestModule = (function () {
        var getHttpRequest = (function () {
            var xmlHttpFactories;
            xmlHttpFactories = [
                function () {
                    return new XMLHttpRequest();
                }, function () {
                    return new ActiveXObject("Msxml3.XMLHTTP");
                }, function () {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                }, function () {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0");
                }, function () {
                    return new ActiveXObject("Msxml2.XMLHTTP");
                }, function () {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                }
            ];
            return function () {
                var xmlFactory, _i, _len;
                for (_i = 0, _len = xmlHttpFactories.length; _i < _len; _i++) {
                    xmlFactory = xmlHttpFactories[_i];
                    try {
                        return xmlFactory();
                    } catch (_error) {

                    }
                }
                return null;
            };
        })();

        var makeRequest = function (params) {
            params = params || {};

            var deferred = Q.defer(),
                httpRequest = getHttpRequest(),
                type = params.type,
                url = params.url,
                object = params.object || null;

            httpRequest.open(type, url, true);

            if (params.headers) {
                var headers = params.headers;
                for (var header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        httpRequest.setRequestHeader(header, headers[header]);
                    }
                }
            }

            httpRequest.send(object);

            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState === 4) {
                    var status = Math.floor(httpRequest.status / 100);
                    if (status === 2) {
                        deferred.resolve(httpRequest.responseText);
                    } else {
                        deferred.reject(httpRequest.responseText);
                    }
                }
            };

            return deferred.promise;
        };

        var getJSON = function (url, options) {
            options = options || {};
            return makeRequest({
                type: 'GET',
                url: url,
                headers: options.headers || {}
            });
        };

        var postJSON = function (url, object, options) {
            options = options || {};
            return makeRequest({
                type: 'POST',
                url: url,
                headers: options.headers || {},
                object: JSON.stringify(object)
            });
        };

        return {
            getJSON: getJSON,
            postJSON: postJSON
        }
    }());

    return requestModule;
});
