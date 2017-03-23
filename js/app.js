//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");

//When you click control list the items
$(".controls li").click(function () {
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//Select clicked elements
	$(this).addClass("selected");
	//Cache the current color
	color = $(this).css("background-color");
});

//When new color button is pressed
$("#revealColorSelect").click(function () {
	//Show color Select or hide color select
	$("#colorSelect").toggle();
});

function changeColor() {
	//When the color is changed update the BG color span
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

//Slider changes
$("input[type=range]").on("input", changeColor);

//When add color is pressed
//Append color to the control ul
//Select the new color

//On mouse events on canvas
//Draw some lines using JS
