/*jslint browser:true */

// 07. Write a script that parses an URL address given in the format:
//       [protocol]://[server]/[resource]
//     and extracts from it the [protocol], [server] and [resource] elements. Return the elements in a JSON object.
//     For example from the URL http://www.devbg.org/forum/index.php the following information should be extracted:
//       {protocol: "http",
//       server: "www.devbg.org", 
//       resource: "/forum/index.php"}
function parseUrl(urlString) {
    'use strict';
    var protocolEnd = urlString.indexOf(':'),
        protocol = urlString.substring(0, protocolEnd),
        serverStart = protocolEnd !== -1 ? protocolEnd + 3 : protocolEnd,
        serverEnd = urlString.substring(serverStart + 1).indexOf('/') + (serverStart + 1),
        server = urlString.substring(serverStart, serverEnd),
        resourceStart = serverEnd,
        resource = urlString.substring(resourceStart + 1, urlString.length),
        parsedUrl = {
            'protocol': protocol,
            'server': server,
            'resource': resource
        };

    return parsedUrl;
}

function testParseUrl() {
    'use strict';
    var resultContainer = document.getElementById('resultContainer'),
        urlStr = getValue('url') || 'http://www.devbg.org/forum/index.php',
        url = parseUrl(urlStr),
        resultStr = '',
        prop;

    for (prop in url) {
        if (url.hasOwnProperty(prop)) {
            resultStr += '[' + prop + ': ' + url[prop] + '] ';
        }
    }

    displayResult(resultContainer, resultStr);
}