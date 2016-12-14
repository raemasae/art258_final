// put all your JS in here
$('.parallax-window').parallax({imageSrc: 'src/images/foot.png'});

$(document).ready(function(){
	$('.toggle').click(function(){
		$(this).toggleClass('open');
	});
});
