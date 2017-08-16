var app = {};
app.windowSize = $(window).width();

app.toogleMenu = function() {
	$('.menu-button').on('click', function() {
		$('.nav-menu').toggleClass('invisible');
	})
};

app.showNavBtn = function() {
	if(app.windowSize <= 751) {
		$('.menu-button').removeClass('invisible');
		$('.nav-menu').addClass('invisible');
	}
	else {
		$('.menu-button').addClass('invisible');
		$('.nav-menu').removeClass('invisible');
	}
};

app.windowResize = function() {
	$(window).resize(function() {
  		app.windowSize = $(window).width();
  		app.showNavBtn();
	});
};

app.partners = function() {
	$('.partners').slick({
		  infinite: true,
		  slidesToShow: 4,
		  slidesToScroll: 4
		});
};

app.mainImageCarousel = function() {
	// $('.main-image-carousel').slick({
	//   dots: true,		
	//   centerMode: true,
	//   centerPadding: '60px',
	//   slidesToShow: 5,

	//   responsive: [
	//   	{
	//       breakpoint: 1500,
	//       settings: {
	//         arrows: false,
	//         centerMode: true,
	//         centerPadding: '40px',
	//         slidesToShow: 4
	//       }
	//     },
	//     {
	//       breakpoint: 1200,
	//       settings: {
	//         arrows: false,
	//         centerMode: true,
	//         centerPadding: '40px',
	//         slidesToShow: 3
	//       }
	//     },
	//     {
	//       breakpoint: 860,
	//       settings: {
	//         arrows: false,
	//         centerMode: true,
	//         centerPadding: '40px',
	//         slidesToShow: 2
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         arrows: false,
	//         centerMode: true,
	//         centerPadding: '40px',
	//         slidesToShow: 1
	//       }
	//     }
	//   ]
	// });
	$('.main-image-carousel').slick({
	 	dots: true,
	 	infinite: true,
	 	speed: 300,
	 	slidesToShow: 1,
	 	centerMode: true,
	 	variableWidth: true,
	 	arrows: false,
	 	focusOnSelect: true,
	 	draggable: true,
	});
};

app.init = function() {
	app.mainImageCarousel();
	app.partners();
	app.toogleMenu();
	app.showNavBtn();
	app.windowResize();
};

$(function() {
	app.init();
});

