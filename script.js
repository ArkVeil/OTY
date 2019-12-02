$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/*
function increment()
{
    c0 = getElementById('c0').value;
    c1 = getElementById('c1').value;
    c2 = getElementById('c2').value;
    c3 = getElementById('c3').value;
    c4 = getElementById('c4').value;
    c5 = getElementById('c5').value;
    c6 = getElementById('c6').value;

	 if (c0 != 9)
		c0++;
	 else if (c1 !=9) {
		c0 = 0;
		c1++;
		c2 = 0;
		c3 = 0;
		c4 = 0;
		c5 = 0;
		c6 = 0;
	}
     else if (c2 !=9) {
		c0 = 0;
		c1 = 0;
		c2++;
		c3 = 0;
		c4 = 0;
		c5 = 0;
		c6 = 0;
	}
     else if (c3 !=9) {
		c0 = 0;
		c1 = 0;
		c2 = 0;
		c3++;
		c4 = 0;
		c5 = 0;
		c6 = 0;
	}
     else if (c4 !=9) {
		c0 = 0;
		c1 = 0;
		c2 = 0;
		c3 = 0;
		c4++;
		c5 = 0;
		c6 = 0;
	}
     else if (c5 !=9) {
		c0 = 0;
		c1 = 0;
		c2 = 0;
		c3 = 0;
		c4 = 0;
		c5++;
		c6 = 0;
	}
     else if (c6 !=9) {
		c0 = 0;
		c1 = 0;
		c2 = 0;
		c3 = 0;
		c4 = 0;
		c5 = 0;
		c6++;
	}
     getElementById('c0').value=c0;
	 getElementById('c1').value=c1;
     getElementById('c2').value=c2;
     getElementById('c3').value=c3;
     getElementById('c4').value=c4;
     getElementById('c5').value=c5;
     getElementById('c6').value=c5;

}

*/