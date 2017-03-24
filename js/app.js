//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
//Treehouse practical class project -- Derek Neuts

var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When you click control list the items
$(".controls").on("click", "li", function() {
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//Select clicked elements
	$(this).addClass("selected");
	//Cache the current color
	color = $(this).css("background-color");
});

//When new color button is pressed
$("#revealColorSelect").click(function() {
	//Show color Select or hide color select
	changeColor();
	$("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

//Slider changes
$("input[type=range]").on("input", changeColor);

//When add color is pressed
$("#addNewColor").click(function() {
	//Append color to the control ul
	var $newColor=$("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	//Select the new color
	$newColor.click();
});

//Onmouse events on the canvas
$canvas.onmousedown(function(e) {
	lastEvent=e;
  mouseDown = true;
}).mousemove(function(e) {
  //Draw some lines
	if(mouseDown) {
	context.beginPath();
	context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
	context.lineTo(e.offsetX, e.offsetY);
	context.strokeStyle=color;
	context.stroke();
	lastEvent=e;
	}
}).mouseup(function() {
	mouseDown=false;
}).mouseleave(function() {
	$canvas.mouseup();
});
