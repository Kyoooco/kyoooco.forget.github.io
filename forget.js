
$(document).ready(function() {
  var pagetop = $('.pagetop');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});




$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100){
              $(this).addClass('active');
            }
        });
    });
});

$(function(){
  $(".pc img:not(:first-child)").hide();
  setInterval(function() {
    $(".pc img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".pc");
  },5000);
});

$(function(){
  $(".sp img:not(:first-child)").hide();
  setInterval(function() {
    $(".sp img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".sp");
  },5000);
});



$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('nav').addClass('active');
        } else {
            $('nav').removeClass('active');
        }
    });
});


Resources
