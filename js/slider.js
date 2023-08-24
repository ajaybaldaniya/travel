$("#slider1").owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    items: 1,
    mouseDrag: false,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
})

new WOW().init();
var owl = $('#slider1');
owl.owlCarousel();
// Listen to owl events:
owl.on('changed.owl.carousel', function (event) {
    new WOW().init();
})


$("#slider2").owlCarousel({
    loop: true,
    items: 3,
    margin:20,
    loop:false,
    dots:false,
    nav:true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
})

$("#slider3").owlCarousel({
    loop:true,
    items:1,
    nav:true,
    mouseDrag:false,
    // autoplay:true,
    // autoplayTimeout:5000,
    dots:false,
    smartSpeed:800,
    navText:['<i class="fa-solid fa-arrow-left s3"></i>','<i class="fa-solid fa-arrow-right s33"></i>'],
})


$("#slider4").owlCarousel({
    loop:true,
    margin:10,
    items:1,
    dotsData:true,
})