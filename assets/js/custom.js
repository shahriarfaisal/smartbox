$(function(){



    // header slider js

    $('.slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
    });
    
    
        // work slider js

    $('.work_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
    });
    
            // brand slider js

    $('.brand_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        cssEase: 'linear',
         responsive: [
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
    }
  ] 
        
        
    });
    
    
    
    
});
