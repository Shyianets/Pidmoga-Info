;(function($){
    'use strict';

    $('.selectz-select').selectize();

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

    //Will add number to form when user load document
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

    //Play video on content
    +function () {

        var videoBlocks = $('.video-in-news');
        var videoFrame = $('.video-in-news iframe');
        var videoImg = $('.video-in-news .img-to-video');

        $('.video-in-news iframe').detach();

        videoBlocks.each(function(i) {
            $(videoBlocks[i]).on('click', function () {
                event.preventDefault();
                $(videoImg[i]).css('display', 'none');
                $(this).append(videoFrame[i]);
            })
        })
    }();


    // Menu Scroll Fixed
    +function() {

        var fixBlock = $('.fixnav');

        if (fixBlock.offset() != undefined) var topOffset = fixBlock.offset().top;

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

    // Modal Scroll

    $(document).on('show.bs.modal', '.modal-info', function(){
        var $this = $(this);
        $this.show();
        var windowHeight = $(window).height(),
            $modalBlock = $this.find('.modal-dialog'),
            modalHeight = $modalBlock.outerHeight();
        $this.hide();

        if (modalHeight > windowHeight) {
            $('body').addClass('modal-scroll');
        }
    });

    $(document).on('hidden.bs.modal', '.modal-info', function(){
        $('body').removeClass('modal-scroll');
    });


})(jQuery);