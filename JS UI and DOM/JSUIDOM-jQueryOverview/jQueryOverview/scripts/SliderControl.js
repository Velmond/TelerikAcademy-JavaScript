// 01. Create a slider control using jQuery
//   - The slider can have many slides
//   - Only one slide is visible at a time
//   - Each slide contains HTML code
//     = i.e. it can contain images, forms, divs, headers, links, etc…
//   - Implement functionality for changing the visible slide after 5 seconds
//   - Create buttons for next and previous slide

(function () {
    'use strict';
    $('<div>').attr('id', 'slider').appendTo('body');
    $('<button>').attr('id', 'prevBtn').text('Previous').click(prevSlide).appendTo('#slider');
    $('<button>').attr('id', 'nextBtn').text('Next').click(nextSlide).appendTo('#slider');
    $('<div>').attr('id', 'slide').appendTo('#slider').css({
        'border': '1px solid black',
        'padding': '10px',
        'width': '50%'
    });

    var slide = 0,
        autoSlideChanger = setInterval(nextSlide, 5000),
        slides = [
            '<img src="imgs/1.jpg"/>',
            '<form action="some_action" method="post"><label for="name">Member name:</label><input type="text" id="name" title="Name" required="required" /><strong>*req</strong><br /><label for="email">Email:</label><input type="text" id="email" title="Email" required="required" pattern="[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}" /><strong>*req</strong><br /><label for="school">School:</label><input type="text" id="school" title="School" required="required" /><strong>*req</strong><br /><input type="submit" value="Submit" /></form>',
            '<img src="imgs/4.jpg"/>',
            '<table border="1"><colgroup><col class="column" /><col class="column" /><col class="column" /><col class="column" /><col class="column" /></colgroup><tr><td colspan="3">Title goes here</td><td>A</td><td>B</td></tr><tr><td rowspan="3">C</td><td>D</td><td>E</td><td>F</td><td>G</td></tr><tr><td>H</td><td colspan="2">I</td><td rowspan="2">J</td></tr><tr><td>K</td><td>L</td><td>M</td></tr><tr><td>N</td><td colspan="4">O</td></tr></table>',
            '<img src="imgs/5.jpg"/>',
            '<header><a href="#" title="Doncho\'s profile" class="SpreadOut">Profile</a><a href="#" title="Friends of Doncho" class="SpreadOut">Friends</a><a href="#" title="Additional Information about Doncho" class="SpreadOut">Additional Information</a></header><div id="Title"><hr /><h1 class="Emphasized">Profile of Doncho</h1><hr /></div><div id="Content"><p>Name: Doncho Minkov</p><p>Birthday: 22 June 1989</p><p>Occupation: Student</p><p>Area of occupation: IT</p></div>',
            '<img src="imgs/6.jpg"/>'
        ];

    setNewSlide();

    function setNewSlide() {
        $('#slide').html(slides[slide]);
        clearInterval(autoSlideChanger);
        autoSlideChanger = setInterval(nextSlide, 5000);
    }

    function prevSlide() {
        if (slide !== 0) {
            slide -= 1;
        } else {
            slide = slides.length - 1;
        }

        setNewSlide();
    }

    function nextSlide() {
        if (slide + 1 !== slides.length) {
            slide += 1;
        } else {
            slide = 0;
        }

        setNewSlide();
    }
})();
