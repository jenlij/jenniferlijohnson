$(document).ready( () => {
  var myform = $("form#portContactForm");
  myform.submit(function(event){
    event.preventDefault();

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";
    var template_id = "portfolio_contact_form";

    myform.find("button").text("Sending...");
    emailjs.sendForm(service_id,template_id,"portContactForm")
      .then(function(){ 
          $(".contact-tagline").html("Sent! Thank you!");
          myform.find("button").text("Send");
      }, function(err) {
          $(".contact-tagline").html("Yikes...Send email failed!\r\n Response:\n " + JSON.stringify(err));
          myform.find("button").text("Send");
      });
    return false;
  });


  // smooth scrolling
  // $('a[href*="#"]:not([href="#"])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
  //       || location.hostname == this.hostname) {

  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //         if (target.length) {
  //           $('html,body').animate({
  //               scrollTop: target.offset().top
  //           }, 1000);
  //           return false;
  //       }
  //   }
  // });

  var sections = $('section')
  , nav = $('.navigation')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height - 200,
        bottom = top + $(this).outerHeight() + 100;
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
  if($(window).scrollTop() === 0) {
    nav.find('a').removeClass('active');
  }
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});
})
