$(document).ready(function(){
	$('button').click(function(){
		$('.navbar-default .navbar-toggle').toggleClass('white-border');
		$('.navbar-default .navbar-toggle .icon-bar').toggleClass('white-bar');
		$('#navbar-stretch').toggleClass('navbar-thinner');
		$('#main-title').toggleClass('move-title');
	});
});
