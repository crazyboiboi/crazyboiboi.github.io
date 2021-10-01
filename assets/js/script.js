
// For Navbar to appear and disappear upon click
$('.navbar__buttons').on('click', function () {
  $('.navbar__bars').toggleClass('active');
  $('.navbar__close').toggleClass('active');
  $('.navbar__links').toggleClass('active');
})


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 200)
      }
    });
});




