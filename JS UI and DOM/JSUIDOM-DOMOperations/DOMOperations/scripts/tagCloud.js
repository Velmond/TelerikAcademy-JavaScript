/*globals document */
// 04. Create a tag cloud:
//   - Visualize a string of tags (strings) in a given container;
//   - By given minFontSize and maxFontSize, generate the tags with different;
//     font-size, depending on the number of occurrences;
// EXAMPLE: var tags = ['cms', 'javascript', 'js','ASP.NET MVC', '.net', '.net', 'css', 'wordpress', 'xaml', 'js', 'http', 'web', 'asp.net', 'asp.net MVC', 'ASP.NET MVC', 'wp', 'javascript', 'js', 'cms', 'html', 'javascript', 'http', 'http', 'CMS']
//          var tagCloud = generateTagCloud(tags, 17, 42);

(function () {
    'use strict';

    function getDictionary(tags) {
        var dictionary = {},
            i,
            length;

        for (i = 0, length = tags.length; i < length; i += 1) {
            tags[i] = tags[i].toLocaleLowerCase();

            if (dictionary[tags[i]]) {
                dictionary[tags[i]] += 1;
            } else {
                dictionary[tags[i]] = 1;
            }
        }

        return dictionary;
    }

    function dictionatyCounter(dictionary) {
        var tag,
            minCount = Number.MAX_VALUE,
            maxCount = -Number.MAX_VALUE;

        for (tag in dictionary) {
            if (dictionary.hasOwnProperty(tag)) {
                if (dictionary[tag] > maxCount) {
                    maxCount = dictionary[tag];
                }
                if (dictionary[tag] < minCount) {
                    minCount = dictionary[tag];
                }
            }
        }

        return {
            min: minCount,
            max: maxCount
        };
    }

    function getTagsWithSizes(dictionary, counter, sizes) {
        var fragment = document.createDocumentFragment(),
            tag,
            fontSize,
            span;

        for (tag in dictionary) {
            if (dictionary.hasOwnProperty(tag)) {
                fontSize = sizes.min + Math.round((sizes.max - sizes.min) * (dictionary[tag] - counter.min) / (counter.max - counter.min));
                span = document.createElement('span');

                span.style.fontSize = fontSize + 'px';
                span.innerHTML = tag + ' ';

                fragment.appendChild(span);
            }
        }

        return fragment;
    }

    function generateTagCloud(tags, minSize, maxSize) {
        var dictionary = getDictionary(tags),
            counter = dictionatyCounter(dictionary),
            sizes = {
                min: minSize,
                max: maxSize
            },
            fragmentOfSpans = getTagsWithSizes(dictionary, counter, sizes),
            div = document.createElement('div');

        div.style.width = '200px';
        div.appendChild(fragmentOfSpans);

        return div;
    }

    var tags = ['cms', 'javascript', 'javascript', 'js', 'ASP.NET MVC', '.net', 'js', 'ASP.NET MVC', 'ASP.NET MVC', 'javascript', 'javascript', '.net', 'js', 'ASP.NET MVC', '.net', '.net', 'css', 'wordpress', 'xaml', 'wordpress', 'xaml', 'wordpress', 'xaml', 'wordpress', 'xaml', 'wordpress', 'xaml', 'js', 'http', 'web', 'asp.net', 'asp.net MVC', 'ASP.NET MVC', 'wp', 'asp.net MVC', 'ASP.NET MVC', 'wp', 'javascript', 'js', 'cms', 'html', 'javascript', 'http', 'http', 'CMS', 'javascript', 'http', 'http', 'CMS', 'javascript', 'http', 'http', 'CMS', 'CMS', 'http', 'CMS'],
        tagCloud = generateTagCloud(tags, 17, 30);

    tagCloud.style.border = '1px solid black';
    tagCloud.style.padding = '5px';

    document.body.appendChild(tagCloud);
}());
