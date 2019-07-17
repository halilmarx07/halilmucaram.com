(function ($) {
    'use strict';

    var dornee_window = $(window);

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    dornee_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
        scrollIndicatorFunction()
    };

    function scrollIndicatorFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scrollIndicator").style.width = scrolled + "%";
    }

    // ****************************
    // :: 2.0 Contact Form Code
    // ****************************

    $("#contactMebtn").on('click', function () {
        $(".popup-contact-form-area").toggleClass('active');
    });

    $(".popup-close").on('click', function () {
        $(".popup-contact-form-area").removeClass('active');
    });

    $(".menu-hideshow").on('click', function () {
        $(".dornee-menu").toggleClass('active');
    });

    $("#ham").on('click', function () {
        $(".hamburger").toggleClass('active');
    });

    // *********************************
    // :: 3.0 Welcome Slides Active Code
    // *********************************

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            autoplayTimeout: 10000,
            nav: true,
            navText: [('<i class="arrow_left"></i>'), ('<i class="arrow_right"></i>')]
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        function welcomeSlide() {
            $('.owl-item').removeClass('prev next');
            var currentSlide = $('.welcome-slides .owl-item.active');
            currentSlide.next('.owl-item').addClass('next');
            currentSlide.prev('.owl-item').addClass('prev');
            var nextSlideImg = $('.owl-item.next').find('.single-slide').attr('data-img-url');
            var prevSlideImg = $('.owl-item.prev').find('.single-slide').attr('data-img-url');
            $('.owl-nav .owl-prev').css({
                background: 'url(' + prevSlideImg + ')'
            });
            $('.owl-nav .owl-next').css({
                background: 'url(' + nextSlideImg + ')'
            });
        }

        welcomeSlide();
        welcomeSlider.on('translated.owl.carousel', function () {
            welcomeSlide();
        });
    }

    // *************************************
    // :: 5.0 Testimonial Slides Active Code
    // *************************************

    if ($.fn.owlCarousel) {
        var testimonialSlider = $('.testimonial-slides');
        testimonialSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            autoplayTimeout: 5000,
            dots: true,
            nav: true,
            navText: [('<i class="arrow_left"></i>'), ('<i class="arrow_right"></i>')]
        })
    }

    // *********************************
    // :: 6.0 Magnific Popup Active Code
    // *********************************

    if ($.fn.magnificPopup) {
        $('.videobtn').magnificPopup({
            type: 'iframe'
        });
        $('.img-zoom').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 500,
            mainClass: 'mfp-fade',
            preloader: true,
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true
        });
    }

    // **************************
    // :: 7.0 Tooltip Active Code
    // **************************

    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // **********************
    // :: 8.0 WOW Active Code
    // **********************

    //    if (dornee_window.width() > 320) {
    //        new WOW().init();
    //    }

    // ***************************
    // :: 9.0 Jarallax Active Code
    // ***************************

    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.5
        });
    }

    // ****************************
    // :: 10.0 Scrollup Active Code
    // ****************************

    if ($.fn.scrollUp) {
        dornee_window.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="arrow_carrot-up"</i>'
        });
    }

    // ******************************
    // :: 11.0 Counter Up Active Code
    // ******************************

    if ($.fn.counterUp) {
        $('.rs-counter').counterUp({
            delay: 15,
            time: 1500
        });
    }

    // *********************************
    // :: 12.0 Prevent Default 'a' Click
    // *********************************

    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // ************************************
    // :: 14.0 Masonary Gallery Active Code
    // ************************************

    if ($.fn.imagesLoaded) {
        $('.gallery_area').imagesLoaded(function () {
            // Filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // Init Isotope
            var $grid = $('.gallery_area').isotope({
                itemSelector: '.single-gallery-item',
                percentPosition: true
            });
        });
    }

    // *******************************
    // :: 15.0 Gallery Menu Style Code
    // *******************************

    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // ******************************
    // :: 16.0 onePageNav active code
    // ******************************

    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: "active"
        });
    }

    // ******************************
    // :: 17.0 ScrollDown Active Code
    // ******************************

    $("#scrollDown").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 0
        }, 1000);
    });

    // ******************************
    // :: 18.0 ScrollDown Active Code
    // ******************************

    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            barColor: '#00b894'
        });
        $('#bar2').barfiller({
            barColor: '#a29bfe'
        });
        $('#bar3').barfiller({
            barColor: '#0984e3'
        });
        $('#bar4').barfiller({
            barColor: '#d63031'
        });
        $('#bar5').barfiller({
            barColor: '#6c5ce7'
        });
    }

    // ******************************
    // :: 19.0 ScrollDown Active Code
    // ******************************

    if ($.fn.animatedHeadline) {
        $('.animated--headline').animatedHeadline({
            animationType: 'clip'
        });
    }

    // ******************************
    // :: 20.0 ScrollDown Active Code
    // ******************************

    $(".modal").each(function (l) {
        $(this).on("show.bs.modal", function (l) {
            var o = $(this).attr("data-easein");
            "shake" == o ? $(".modal-dialog").velocity("callout." + o) : "pulse" == o ? $(".modal-dialog").velocity("callout." + o) : "tada" == o ? $(".modal-dialog").velocity("callout." + o) : "flash" == o ? $(".modal-dialog").velocity("callout." + o) : "bounce" == o ? $(".modal-dialog").velocity("callout." + o) : "swing" == o ? $(".modal-dialog").velocity("callout." + o) : $(".modal-dialog").velocity("transition." + o)
        })
    });

})(jQuery);