document.addEventListener("DOMContentLoaded", function() {
    var animatedElement = document.querySelector(".epic");
  
    function animateElement() {
      if (isScrolledIntoView(animatedElement)) {
        animatedElement.classList.add("animate");
        window.removeEventListener("scroll", animateElement);
      }
    }
  
    function isScrolledIntoView(element) {
      var rect = element.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;
  
      // Only completely visible elements return true:
      var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    }
  
    window.addEventListener("scroll", animateElement);
  });

  

  document.addEventListener("DOMContentLoaded", function() {
    var animatedElement = document.querySelector(".riot");
  
    function animateElement() {
      if (isScrolledIntoView(animatedElement)) {
        animatedElement.classList.add("animate");
        window.removeEventListener("scroll", animateElement);
      }
    }
  
    function isScrolledIntoView(element) {
      var rect = element.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;
  
      // Only completely visible elements return true:
      var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    }
  
    window.addEventListener("scroll", animateElement);
  });