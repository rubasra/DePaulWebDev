$(document).ready(function(){

  	$('#business').click(function() {
		$('#marquee').css("background-image", "url('chicago9.jpg')");
		$('#marquee_title > h2').html("Business");
		$('#marquee_title > h4').html("City of Chicago");
	});

  	$('#culture').click(function() {
		$('#marquee').css("background-image", "url('chicago5.jpg')");
		$('#marquee_title > h2').html("Culture & Recreation");
		$('#marquee_title > h4').html("City of Chicago");
	});
	
	$('#environment').click(function() {
		$('#marquee').css("background-image", "url('chicago7.jpg')");
		$('#marquee_title > h2').html("Environment");
		$('#marquee_title > h4').html("City of Chicago");
	});

  	$('#housing').click(function() {
		$('#marquee').css("background-image", "url('chicago4.jpg')");
		$('#marquee_title > h2').html("Housing & Development");
		$('#marquee_title > h4').html("City of Chicago");
	});

  	$('#social').click(function() {
		$('#marquee').css("background-image", "url('chicago6.jpg')");
		$('#marquee_title > h2').html("Social Services");
		$('#marquee_title > h4').html("City of Chicago");
	});
	
  	$('#civic').click(function() {
		$('#marquee').css("background-image", "url('chicago3.jpg')");
		$('#marquee_title > h2').html("Civic Services");
		$('#marquee_title > h4').html("City of Chicago");
	});

  	$('#education').click(function() {
		$('#marquee').css("background-image", "url('chicago2.jpg')");
		$('#marquee_title > h2').html("Education");
		$('#marquee_title > h4').html("City of Chicago");
	});
	
  	$('#health').click(function() {
		$('#marquee').css("background-image", "url('chicago8.jpg')");
		$('#marquee_title > h2').html("Health");
		$('#marquee_title > h4').html("City of Chicago");
	});
	
});