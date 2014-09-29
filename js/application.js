$(document).ready(function() {

	//Add item scripting
	$(".add-btn").on("mousedown", function() {
		$(".cart-add").hide();
		$(".cart-add-buttonDown").show();
	})
	
	.on("mouseup", function() {
		$(".cart-add-buttonDown").hide();
		$(".cart-add").show();

		var itemVal = document.getElementById("input-box-text").value;
		var addItem = $("<li>".concat(itemVal).concat("<button class=&quot;delete&quot;>Delete</button><button class=&quot;done&quot;>Done</button></li>"));
		$(".item-list").append(addItem);
	})

});