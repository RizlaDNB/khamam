$('.trackedBlock').waypoint(function(){

    $.each($('.trackedBlock'), function(){
        $(this.element).addClass('trackedBlock--active');
    });

}, {offset: '80%'});
