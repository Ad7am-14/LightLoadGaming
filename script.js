$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.header-text').addClass('hidden');
  } else {
    $('.header-text').removeClass('hidden');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.header-text').addClass('hidden');
    } else {
      $('.header-text').removeClass('hidden');
    }
  });
});