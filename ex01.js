$(document).ready(function(){  // 
// ----------------------------------------------------------------------------

//start faded out
$('.fadeitem').css('opacity', 0.25)

//when the mouse hovers over, it fades in
$('.fadeitem').mouseenter(function() {
	$('.fadeitem').fadeTo('fast', 1)
});


//When the mouse leaves, fade back out

$('.fadeitem').mouseleave(function() {
	$('.fadeitem').fadeTo('fast', 0.25)
});


// ----------------------------------------------------------------------------
}); // do not delete
