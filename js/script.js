$(window).resize(function() {
    var width = $(window).width();
    if (width < 767) {
        $("#about").css("width", "100%");
    }
    else{
    	$("#about").css("width", "40%");
    }
});

