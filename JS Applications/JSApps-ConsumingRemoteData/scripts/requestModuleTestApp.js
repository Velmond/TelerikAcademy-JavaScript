// 01. Create a module that exposes methods for performing HTTP requests by given URL and headers
//   - getJSON and postJSON
//     = Both methods should work with promises

(function () {
    'use strict';
    require(['requestModule'], function (requestModule) {
        requestModule.postJSON('http://httpbin.org/post', {firstName: 'pesho', lastName: 'peshov'}, {/* headers go here */});

        var getRequest = requestModule.getJSON('http://httpbin.org/get', {/* headers go here */});
        getRequest.then(function (result) {
            console.log(JSON.parse(result));
        });
    });
}());
