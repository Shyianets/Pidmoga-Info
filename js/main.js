//$('.my-select').selectize();

// Slider Counter
+function($) {
    var listCarousel = $('.carousel'); // all carousels
    var idCarousel = []; // empty list id`s carousels

    // Extract all ID`s 
    listCarousel.each(function(i) {
        idCarousel[i] = $(this).attr('id');
    });

    // Start position
    listCarousel.each(function(i) {
        var totalItems = $('#' + idCarousel[i] + ' ' +'.item').length;
        var currentIndex = $('#' + idCarousel[i] + ' ' + '.item.active').index() + 1;
        $('#' + idCarousel[i] + ' ' + '.slider-counter').html('' + currentIndex + '/' + totalItems + '');
        var totalItems = $('#' + idCarousel[i] + ' ' +'.item').length;
        $('#' + idCarousel[i]).on('slid.bs.carousel', function() {
            currentIndex = $('#' + idCarousel[i] + ' ' + '.item.active').index() + 1;
            $('#' + idCarousel[i] + ' ' + '.slider-counter').html('' + currentIndex + '/' + totalItems + '');
        });
    });


}(window.jQuery);

// Menu Scroll
+function($) {
    var topOffset = $('.fixnav').offset().top;

    $(window).on('scroll', function() {
        if ( $(this).scrollTop() >= topOffset ) {
            $('.fixnav').addClass('fixed');
        }
        if ( $(this).scrollTop() < topOffset ) {
            $('.fixnav').removeClass('fixed');
        }
    })
}(window.jQuery);
