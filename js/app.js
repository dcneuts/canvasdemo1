//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");

//When you click control list the items
$(".controls").on("click", "li", function () {
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
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

//Slider changes
$("input[type=range]").on("input", changeColor);

//When add color is pressed
$("#addNewColor").click(function () {
	//Append color to the control ul
	var $newColor=$("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	//Select the new color
	$newColor.click();
});



//On mouse events on canvas
//Draw some lines using JS
