var containerSize = 960;
var numSquares = 16;
var squares = [ ];

var makeSquares = function(size) {
	for (var i = 0; i < (size * size); i++) {
		squares.push('<div class="square"></div>');
	};
};

var sqDimensions = function() {
	return((containerSize / numSquares) - 2 + "px");
}

makeSquares(numSquares);
// console.log(squares);

$(document).ready (function() {
	$("h1").addClass("hidden");
	$("#checkScript").addClass("hidden");
	$("#options").removeClass("hidden");
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
	$(".square").mouseenter( function() {
		$(this).addClass("colored");
	});
	$("#btn_clear").click(function() {
		$("#container .square").removeClass("colored");
	})
});

