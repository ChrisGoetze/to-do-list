//Check Off Specific Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("toggle");
});

//Click on X to delete Todos
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});

//enter new item to Todo listStyleType
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").on("click", function(){
	$("input[type = 'text']").fadeToggle();
})