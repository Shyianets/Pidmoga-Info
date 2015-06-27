$('.my-select').selectize();

// Slider Counter
+function($) {
    var totalItems = $('#carousel-pidmoga .item').length;
    var currentIndex = $('div.active').index() + 1;
    $('span.slider-counter').html('' + currentIndex + '/' + totalItems + '');
    $('#carousel-pidmoga').on('slid.bs.carousel', function() {
        currentIndex = $('div.active').index() + 1;
        $('span.slider-counter').html('' + currentIndex + '/' + totalItems + '');
    });
}(jQuery);

// Menu Scroll
+function($) {
    var topOffset = $('.fixnav').offset().top;

    $(window).on('scroll', function() {
        if ( $(this).scrollTop() >= topOffset ) {
            $('div.fixnav').addClass('fixed');
            $('.type-view').css('margin-top', '50px');
        }
        if ( $(this).scrollTop() < topOffset ) {
            $('div.fixnav').removeClass('fixed');
            $('.type-view').css('margin-top', '0');
        }

    })
}(jQuery);
