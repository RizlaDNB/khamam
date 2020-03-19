var navElement = $('.nav-list__item'),
    navCaption = $('nav-caption__text');

    $('.tracked').waypoint( function() {
        var hash = $(this.element).attr('id');
        var blockName = $(this.element).attr('data-caption');

        navElement.removeClass('selected-nav-item');

        $.each( navElement, function(){
            if ( $(this).children('a').attr('href').slice(1) == hash ) {
                $(this).addClass('selected-nav-item');
            }
        });

        console.log(blockName);

    });