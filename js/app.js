//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color=$(".selected").css("background-color");

//When you click control list the items
$(".controls li").click(function() {
  //Deselect sibling elements
$(this).siblings().removeClass("selected");
  //Select clicked elements
$(this).addClass("selected");
  //Cache the current color
  color=$(this).css("background-color");
});


//When new color button is pressed
  //Show color Select or hide color select
  //When the color is changed update the BG color span

//When add color is pressed
  //Append color to the control ul
  //Select the new color

//On mouse events on canvas
  //Draw some lines using JS
