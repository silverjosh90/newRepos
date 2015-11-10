$(document).ready(function() {
	$("#childHood").hide()
	$("#youngAdult").hide();
	$("#hobby").hide();
	$("#colorado").hide();
	$("#kili").hide();


	$("#childButton").click(function() {
		$('#childHood').toggle();

	});

	$("#adultButton").click(function() {
		$('#youngAdult').toggle();

	});

	$("#kiliButton").click(function() {
		$('#kili').toggle();

	});

	$("#hobbyButton").click(function() {
		$('#hobby').toggle();

	});

	$("#coloradoButton").click(function() {
		$('#colorado').toggle();

	});


});