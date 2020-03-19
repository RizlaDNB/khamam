window.onscroll = function() {scrollProgress()};

function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / winHeight) * 100;
  document.getElementById('progressBar').style.height = scrolled + "%";
} 