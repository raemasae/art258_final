// put all your JS in here
$('.parallax-window').parallax({imageSrc: 'src/images/foot.png'});
$('.parallax-window-bff').parallax({imageSrc: 'images/bff-hero.png'});
$('.parallax-window-bff-girls').parallax({imageSrc: 'images/girls.jpg'});
$('.parallax-window-bff-names').parallax({imageSrc: 'images/names.jpg'});

$(document).ready(function(){
	$('.toggle').click(function(){
		$(this).toggleClass('open');
	});
});
