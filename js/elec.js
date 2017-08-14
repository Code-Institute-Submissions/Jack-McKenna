$(".fixedGall").scroll(function(){
	$(".navbar>a").css("color", "black").fadeIn("slow");
});

var electrician = $("#electrician");

electrician.on("scroll", function(e) {
	if (this.sctrollTop > 147) {
		electrician.addClass("fix-head");
	} else {
		electrician.removeClass("fix-head");
	}
});