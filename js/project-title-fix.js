$(document).ready(function() {

    var element = $(".fix-header");
    var height_el = element.offset().top;
    var element_stop = $(".guarantees__header");
    var height_el_stop = element_stop.offset().top;
    
    $(".projects__header").css({
        "width": element.outerWidth(),
        "height": element.outerHeight()
    });
    
    $(window).scroll(function() {
      
        if($(window).scrollTop() > height_el_stop - element.outerHeight() - 20) {
            
            element.css({
                "top": element.offset().top,
                "left": element.offset().left
            }).removeClass("absolute").addClass("fixed");
        
        } else {

            if($(window).scrollTop() > height_el) {
                
                element.addClass("fixed").removeClass("absolute").attr("style", "");
            
            } else {
                
                element.removeClass("absolute fixed").attr("style", "");
            
            }
            
        }

    });

    $('.fixtrack').waypoint( function() {
        var fixheader = $('.fix-header');

        if (!fixheader.hasClass('fixheader--color')) {
            fixheader.addClass('fixheader--color');
        } else {
            fixheader.removeClass('fixheader--color');
        }

    });

});