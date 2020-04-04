$(document).ready(function(){
    var time = 4;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;
    
    $slick = $('.presentation-slider');

    $slick.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    });
    
    $bar = $('.slide-progress');
    
    $('.presentation').on({
      mouseenter: function() {
        isPause = true;
      },
      mouseleave: function() {
        isPause = false;
      }
    })

    function resetProgressbar() {
        $bar.css({
          width: 0 +"%" 
        });
        clearTimeout(tick);
    }
    
    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);
    }
    
    function interval() {
      if(isPause === false) {
        percentTime += 1 / (time+0.1);
        $bar.css({
          width: percentTime+"%"
        });
        if(percentTime >= 100)
          {
            $slick.slick('slickNext');
            startProgressbar();
          }
      }
    }
    
    startProgressbar();
    
  });