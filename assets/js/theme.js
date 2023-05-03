/*
 Theme Name: picante
 Theme URI: 
 Author: 
 Author URI: 
 Description: Picante
 Version: 1.0
 License:
 License URI: 
*/

/*==================================
    [Table of contents]
===================================
    01. Testimonial Silder
    02. Strech Column
    03. Mobile Menu
    04. Toggle Pricing
*/

(function ($) {
    'use strict';
    
    /*--- 01. Testimonial Silder ---*/
    if($(".testimonialSlider").length > 0){
       $('.testimonialSlider').owlCarousel({
             autoplay: false,
             loop: true,
             margin: 0,
             active: true,
             autoplayHoverPause: false,
             nav: false,
             mouseDrag: false,
             smartSpeed: 1000,
             autoplayTimeout: 7000,
             animateOut: 'fadeOut', 
             animateIn: 'fadeIn', 
             dots: false,
             items: 1
        });
        $('.prevArrow').click(function(e){
            e.preventDefault();
            $('.testimonialSlider').trigger('next.owl.carousel');
        });
        $('.nextArrow').click(function(e){
            e.preventDefault();
            $('.testimonialSlider').trigger('prev.owl.carousel');
        });
    }
    /*--- 02. Sticky Header ---*/
    var lastScrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
            $(".isSticky").addClass("sticky");
            $(".isSticky").removeClass("sticky-out");
        } else if (scroll < lastScrollTop) {
            if (scroll < 500) {
                $(".isSticky").addClass("sticky-out");
                $(".isSticky").removeClass("sticky");
            }
        } else {
            $(".isSticky").removeClass("sticky");
        }
        lastScrollTop = scroll;
    });
    /*--- 03. Mobile Menu ---*/
    $(".header-area.header-2 .main_menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanExpand: ['<i class="fal fa-angle-down"></i>'],
    });

    $(".menuBtn").on("click", function () {
        $(".mobile_menu").addClass("open");
        $("body").addClass("scrollHide");
    });

    $(".closeIcon").on("click", function () {
        $(".mobile_menu").removeClass("open");
        $("body").removeClass("scrollHide");
    });
    /*--------------------------------------------------------
    / 4. Toggle Pricing
    /----------------------------------------------------------*/
    if ($('#switch-toggle-tab').length) {
        var toggleSwitch = $('#switch-toggle-tab label.switch');
        var TabTitle = $('#switch-toggle-tab li');
        var monthTabTitle = $('#switch-toggle-tab li.month');
        var yearTabTitle = $('#switch-toggle-tab li.year');
        var monthTabContent = $('.prPrice .month');
        var yearTabContent = $('.prPrice .year');
        // hidden show deafult;
        monthTabContent.fadeIn();
        yearTabContent.fadeOut();

        function toggleHandle() {
            if (toggleSwitch.hasClass('on')) {
                yearTabContent.fadeOut();
                monthTabContent.fadeIn();
                monthTabTitle.addClass('active');
                yearTabTitle.removeClass('active');
            } else {
                monthTabContent.fadeOut();
                yearTabContent.fadeIn();
                yearTabTitle.addClass('active');
                monthTabTitle.removeClass('active');
            }
        };
        monthTabTitle.on('click', function () {
            toggleSwitch.addClass('on').removeClass('off');
            toggleHandle();
            return false;
        });
        yearTabTitle.on('click', function () {
            toggleSwitch.addClass('off').removeClass('on');
            toggleHandle();
            return false;
        });
        toggleSwitch.on('click', function () {
            toggleSwitch.toggleClass('on off');
            toggleHandle();
        });
    }
    
})(jQuery);