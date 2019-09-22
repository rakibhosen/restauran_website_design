$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active

  // --====== menu slider ======--
$('.owl-crsl').owlCarousel({
    loop:true,
    margin:10,
    navText:['<sapn><i class="fa fa-arrow-left"></i><span>','<sapn><i class="fa fa-arrow-right"></i><span>'],
    dots:false,
    nav:true,

    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

  // --====== offer slider ======--
$('.owl-offer').owlCarousel({
    loop:true,
    margin:10,
      navText:['<sapn><i class="fa fa-arrow-left"></i><span>','<sapn><i class="fa fa-arrow-right"></i><span>'],
    dots:false,
    nav:true,
    
    responsive:{
        0:{
           items:1,
            nav:false,
            dots:true
        },
        600:{
            items:1
            
        },
        1000:{
          
            items:1
         
            
        }
    }

});

    // counter js
    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});



  
}(jQuery));