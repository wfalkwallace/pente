$(document).ready( function() {


	var boardcanvas = $("#board-canvas")[0];
	var boardcontext = boardcanvas.getContext("2d");

	// set width and height
	// set padded edge coordinates
	var left = 12, top = 12;
	var width = 576, height = 576;
	var right = 588, bottom = 588;

	// draw a gameboard border
	boardcontext.rect(left, top, width, height);
	boardcontext.lineWidth = 1;
	boardcontext.strokeStyle = '#669966';
	boardcontext.stroke();	
	
	// draw gameboard intersection lines
	for(var i = 0; i < 19; i++) {
		startx = i * 32 + 12;
		starty = i * 32 + 12;

		boardcontext.beginPath();
		// vertical line
		boardcontext.moveTo(startx, top);
		boardcontext.lineTo(startx, bottom);
		// horizontal line
		boardcontext.moveTo(left, starty);
		boardcontext.lineTo(right, starty);
		// draw
		boardcontext.strokeStyle = "#669966";
		boardcontext.stroke();
	}

	// draw gameboard circles
	var radius = 10;
	for(var i = 0; i < 3; i ++) {
		for(var j = 0; j < 3; j ++) {
			centerX = i * 192 + 108;
			centerY = j * 192 + 108;
			
			boardcontext.beginPath();
			boardcontext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
			boardcontext.fillStyle = '#669966';
			boardcontext.fill();
		}
	}
	
	
	// function drawMove(player) {
		var centerX = 192 + 108 + 32;
		var centerY = 192 + 108 + 32;
		
		boardcontext.beginPath();
		boardcontext.arc(centerX, centerY, 15, 0, 2 * Math.PI, false);
		boardcontext.fillStyle = '#000000';
		boardcontext.fill();
		boardcontext.lineWidth = 2;
		boardcontext.strokeStyle = '#000000';
		boardcontext.stroke();
		
		boardcontext.beginPath();
		boardcontext.arc(centerX + 32, centerY + 32, 15, 0, 2 * Math.PI, false);
		boardcontext.fillStyle = '#FFFFFF';
		boardcontext.fill();
		boardcontext.lineWidth = 2;
		boardcontext.strokeStyle = '#000000';
		boardcontext.stroke();
	// }


});