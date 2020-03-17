var navElement = $('.nav-list__item');

    $('.tracked').waypoint( function() {
        var hash = $(this.element).attr('id');

        navElement.removeClass('selected-nav-item');

        $.each( navElement, function(){
            if ( $(this).children('a').attr('href').slice(1) == hash ) {
                $(this).addClass('selected-nav-item');
            }
        });

    });