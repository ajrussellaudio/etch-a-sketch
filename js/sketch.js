var containerSize = 960;
var numSquares = prompt("How many squares on each side? \nSuggested: 12-36", 16);
var squares = [ ];

// Fill array with HTML squares
var makeSquares = function(size) {
	for (var i = 0; i < (size * size); i++) {
		squares.push('<div class="square"></div>');
	};
};

// get squares' dimensions from size of container
var sqDimensions = function() {
	return((containerSize / numSquares) - 2 + "px");
}

// make squares
makeSquares(numSquares);

$(document).ready (function() {
	// hide initial elements
	$("h1").addClass("hidden");
	$("#checkScript").addClass("hidden");

	// make scripted elements
	$("body").append('<div id="options"><button id="btn_clear">Clear screen</button></div>');
	$("body").append('<div id="container"></div>');
	$("#container").css({
		width: containerSize + "px"
	})
	for (var i = 0; i < squares.length; i++) {
		$("#container").append(squares[i]);
	};
	$(".square").css({
		height: sqDimensions,
		width: sqDimensions
	});

	// make interactive elements
	$(".square").mouseenter( function() {
		$(this).addClass("colored");
	});
	// $(".square").mouseleave( function() {
	// 	$(this).removeClass("colored");
	// });
	$("#btn_clear").click(function() {
		$("#container .square").removeClass("colored");
	})
});

