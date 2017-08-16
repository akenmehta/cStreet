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
		  slidesToScroll: 4,
		  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2
	      }
	    }
	  ]
	});
};

app.carouselClicked = function() {
	app.imageCarouselCenter();
	$('.main-image-carousel, .image-container').click(function() {
		app.imageCarouselCenter();
	});
};

app.imageCarouselCenter = function() {
	$('.image-container').css('opacity', '0.4');
	$('.main-image-carousel .slick-center').css('opacity', '1');
};

app.mainImageCarousel = function() {
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
	app.carouselClicked();
};

$(function() {
	app.init();
});

