$(document).ready(function(){
    var btnScroll = $(".js-scroll-top");
    var slider = $(".js-slider");
    var clientSlider = $(".js-client-slider");
    var sliderBigArrowPrev = $(".js-slider-prev");
    var sliderBigArrowNext = $(".js-slider-next");
    var sliderClientArrowPrev = $(".js-client-slider-prev");
    var sliderClientArrowNext = $(".js-client-slider-next");
    btnScroll.click(function(){
        $("body").animate({
            scrollTop: 0
        },800)
    });
    slider.slick({
        autoplay: true,
        prevArrow: sliderBigArrowPrev,
        nextArrow: sliderBigArrowNext
    });
    clientSlider.slick({
        autoplay: true,
        prevArrow: sliderClientArrowPrev,
        nextArrow: sliderClientArrowNext
    });


});
