$(document).ready(function() {
	$("#childHood").hide();
	$("#youngAdult").hide();
	$("#hobby").hide();
	$("#colorado").hide();

	
	$("#childButton").click(function() {
		$('#childHood').toggle();

	});

	$("#onUp").click(function() {

		$('#dot').animate({top: "-=280"}, 1000);

	});

	$("#adultButton").click(function() {
		$('#youngAdult').toggle();

	});
});