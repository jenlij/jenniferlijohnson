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
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });
});