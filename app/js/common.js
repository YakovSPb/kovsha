$(function() {
 $(window).on('load resize', function() {
        var $width = $(window).width();
        
            var WidthScreen = 1170+($width-1170)/2;
           	if (screen.width > 1200){
             	$('header').css('background-size', WidthScreen);
             }
    });


// 	if (screen.width > 1200){
// 	var WidthScreen = 1170+(screen.width-1170)/2;

// 	alert(WidthScreen);

// 	$('header').css('background-size', WidthScreen);
// }


	if (screen.width < 992){
			$('.block2 br').remove();
	}


     $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                $(".success").addClass("visible");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");

                $(".success").removeClass("visible");
                $.magnificPopup.close();
                }, 3000);
            });
            return false;
        });

	
});

