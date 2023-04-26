$(document).ready(function() {
  var $content = $('.content');
  var windowHeight = $(window).height();
  
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var contentOffset = $content.offset().top;
    
    if (scrollTop + windowHeight > contentOffset) {
      $content.addClass('show');
    }
  });
});