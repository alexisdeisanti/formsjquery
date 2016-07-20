$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------

//all boxes start hidden
$('.box').hide();

$('#b1').click(function()
	{	
		$('.one').toggle();
	});
$('#b2').click(function(){
	$('.two').slideToggle('fast')
	
});

$('#b3').click(function(){
	$('.three').fadeToggle()
	
});
$('#b4').on('click', function(){
	$('.four').slideToggle('fast')
	
});






// ----------------------------------------------------------------------------
}); // do not delete 
