;(function($){
    'use strict';

    $('.selectz-select').selectize();
    // $('.selectz-input').selectize({
    //     persist: false,
    //     createOnBlur: true,
    //     create: true,
    //     maxItems: 1
    // });

    // Slider Counter
    +function () {
        var listCarousel = $('.carousel'); // all carousels
        var idCarousel = []; // empty list id`s carousels

        listCarousel.each(function(i) {
            // Extract ID`s
            idCarousel[i] = $(this).attr('id');

            // Start position
            var totalItems = $('#' + idCarousel[i] + ' ' +'.item').length;
            var currentIndex = $('#' + idCarousel[i] + ' ' + '.item.active').index() + 1;

            // Edit HTML
            $('#' + idCarousel[i] + ' ' + '.slider-counter').html('' + currentIndex + '/' + totalItems + '');
            var totalItems = $('#' + idCarousel[i] + ' ' +'.item').length;
            $('#' + idCarousel[i]).on('slid.bs.carousel', function() {
                currentIndex = $('#' + idCarousel[i] + ' ' + '.item.active').index() + 1;
                $('#' + idCarousel[i] + ' ' + '.slider-counter').html('' + currentIndex + '/' + totalItems + '');
            });
        });
    }();

    // Menu Scroll
    +function() {
        var topOffset = $('.fixnav').offset().top;

        $(window).on('scroll', function() {
            if ( $(this).scrollTop() >= topOffset ) {
                $('.fixnav').addClass('fixed');
                $('.top-menu-block a.menu-close').attr('href','#fixnav');
                $('.top-menu-block .menu-head').addClass('menu-fixed');
            }
            if ( $(this).scrollTop() < topOffset ) {
                $('.fixnav').removeClass('fixed');
                $('.top-menu-block a.menu-close').attr('href','#');
                $('.top-menu-block .menu-head').removeClass('menu-fixed');
            }
        })
    }();

    /*
        Will add number to form when user load document
    */
    +function autoNumberPlacement() {
        var allNumQuestions = $('.file-added');
        var arrNubmers = [];

        allNumQuestions.each(function(i) {
            arrNubmers[i] = i+1+'.'+' ';
            $(this).prepend(arrNubmers[i]); 
        });
    }();

    //Switch type-view
    +function () {
        $('.type-view span a').on('click', function () {
            event.preventDefault();

            var $cards = $('.doc-cards');
            $cards.css('opacity', '0');
            $cards.one('bsTransitionEnd', function (){
                $cards.toggleClass('s-cards');
                $cards.toggleClass('cards');
                $cards.css('opacity', '1');
            })
            $('.type-view > span').toggleClass('active');
        });
    }();

})(jQuery);