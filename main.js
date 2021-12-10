if ('click === false') {
	$('.block-2, .icon-2').addClass('active')
}

$('.touch-first').on('click', function () {
	$('.block-2, .icon-2').removeClass('active')
	$('.block-1, .icon-1').addClass('active')

})
$('.touch-second').on('click', function () {
	$('.block-1, .icon-1').removeClass('active')
	$('.block-2, .icon-2').addClass('active')
})



 $('.slider').slick( {
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: true,
	speed: 300,
	arrows: false,
	autoplay: true,
	fade: true,
	centerMode: true,
	focusOnSelect: true,
	dotsClass: 'slider__dots',
})

$('.slider').slick('setPosition')
