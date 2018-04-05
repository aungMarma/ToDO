/*
click add event listener only to existing element
on("click") can add event listener to both existing element and later added event
with event-delegation idea

add click event to ul (which always exits)
when click occurs to ul, fire this event except 
when li is clicke inside of ul => "li",
and listen for event that occurs to li that may exits now or in future
*/

// toggle completed class on existing and future li 
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
})

// delete todo
$("ul").on("click", "span", function(event){
	// remove li after fadeout
	$(this).parent().fadeOut(500, function(){
		$(this).remove();    // this = li
	});
	event.stopPropagation();   // stops bubbling up (firing parent's events)
})

// adding a todo
$("input[type='text']").keypress(function(event){
	// if enter is pressed, assuming typing is done
	if(event.which === 13){
		var li = document.createElement("li");
		li.innerHTML = `<span class="trash-can"><i class="fas fa-trash-alt"></i></span> ${$(this).val()}`;
		$("ul").append(li);
		$(this).val("");         // clear input field
	}
})
// toggle fade on input if click on plus sign
$("#plus-sign").click(function(){
	$("input[type='text']").fadeToggle();
})

