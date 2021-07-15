(function ($) {
  "use strict";

  // if ($(".carousel-item .active")) {
  //   console.log("hai");
  // } else if ($(".carousel-item")) {
  //   console.log("kk");
  // }

  // $('.scroll-to-section').on('click',function(e){
  // 	var tujuan = $this.attr('href');
  // 	var elementTujuan = $(tujuan);
  // 	$('body').animate({
  // 		scrollTop : elementTujuan.offset().top-50
  // 	},1000,'easeInOutExpo')
  // })

  var elementWindow = $(document).width();
  if(979 >= elementWindow){
    $(".navbar").removeClass("bg-transparent");
    $(".navbar").addClass("bg-white");
    $(".nav-link").removeClass("text-white");
  }else{
    $(".navbar").removeClass("bg-white");
    $(".navbar").addClass("bg-transparent");
    $(".nav-link").addClass("text-white");   
  }


  $(window).resize(function(){    
    // console.log($(document).width()) 
    var element = $(document).width();    
    if(979 >= element){
      $(".navbar").removeClass("bg-transparent");
      $(".navbar").addClass("bg-white");  
      $(".nav-link").removeClass("text-white");
    }else{
      $(".navbar").removeClass("bg-white");
      $(".navbar").addClass("bg-transparent");  
      $(".nav-link").addClass("text-white");  
    }
  })  

  // var id = $(".navbar-toggler")

  // console.log(id.attr('aria-expanded'))

  
  var scrollLink = $(".scroll-to-section");
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 70,
      },
      1000,
      "easeInOutExpo"
    );
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".hero-slides").height() - 20;
    var header = $(".navbar").height();

    if (scroll >= box - header) {
      $(".navbar").addClass("fixed-top");      
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });

  $(".berita").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    margin: 80,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".guru").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 5,
      },
      992: {
        items: 6,
      },
    },
  });

  // Window Resize Mobile Menu Fix
  

  // Scroll animation init
  

  // Window Resize Mobile Menu Fix
 

  // Window Resize Mobile Menu Fix
  
})(window.jQuery);
