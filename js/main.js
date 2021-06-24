$(document).ready(function (){
    $('.header__burger').click(function (event) {
        $('.header__burger,.menu__list-inner').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        easing:'ease',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 10000,
        waitForAnimate: false,
        responsive:[
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

var StickyElement = function(node){
    var doc = $(document),
        fixed = false,
        anchor = node.find('.header__false'),
        content = node.find('.header__top-inner');
    var onScroll = function(e){
        var docTop = doc.scrollTop(),
            anchorTop = anchor.offset().top;
        if(docTop > anchorTop){
            if(!fixed){
                anchor.height(content.outerHeight());
                content.addClass('fixed');
                fixed = true;
            }
        } else {
            if(fixed){
                anchor.height(0);
                content.removeClass('fixed');
                fixed = false;
            }
        }
    };
    $(window).on('scroll', onScroll);
};
var sticky = new StickyElement($('.header'));
