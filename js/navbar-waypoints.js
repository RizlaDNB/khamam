var navElement = $('.nav-list__item'),
    navText = $('.nav-text__link');

    $('.tracked').waypoint( function() {
        var hash = $(this.element).attr('id');
        var blockName = $(this.element).attr('data-caption');

        navElement.removeClass('selected-nav-item');

        $.each(navElement, function(){
            if ( $(this).children('a').attr('href').slice(1) == hash ) {
                $(this).addClass('selected-nav-item');
            }
        });

        $('.nav-caption__text').text(blockName);

    });