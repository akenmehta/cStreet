var app = {};

app.init = function() {
	console.log('connected app.init');



$('.main-image-carousel').slick({
  dots: true,		
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,

  responsive: [
  	{
      breakpoint: 1500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 860,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]

});
}

$(function() {
	app.init();
});

