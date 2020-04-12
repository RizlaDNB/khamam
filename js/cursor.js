var cursor = $(".cursor"),
    follower = $(".cursor-follower"),
    arrow = $(".cursor-arrow");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });

    // TweenMax.set(arrow, {
    //   css: {    
    //   left: mouseX,
    //   top: mouseY
    //   }
    // });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(".trigger").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".trigger").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});

$(".trigger-orange").on("mouseenter", function() {
  cursor.addClass("active");
  follower.addClass("orange");
});
$(".trigger-orange").on("mouseleave", function() {
  cursor.removeClass("active");
  follower.removeClass("orange");
});

// $(".slick-prev").on("mouseenter", function() {
//   cursor.addClass("active");
//   follower.addClass("hide");
// });
// $(".slick-prev").on("mouseleave", function() {
//   cursor.removeClass("active");
//   follower.removeClass("hide");
// });

// $(".slick-next").on("mouseenter", function() {
//   cursor.addClass("active");
//   follower.addClass("hide");
// });
// $(".slick-next").on("mouseleave", function() {
//   cursor.removeClass("active");
//   follower.removeClass("hide");
// });