$(document).ready(function(){
	$(document).on('click', '.nav_icon_right', function(){
		if($("#nav_ul").css("display") == "inline-block"){
			$("#nav_ul").css("display", "none");
		}
		else{
			$("#nav_ul").attr("style", "display:inline-block !important");
		}
	});

	$("#top_nav").load("top_nav.html");
	$("#footer").load("footer.html"); 
});