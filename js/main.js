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

// // Menu Scroll
// $(window).on(‘scroll’, function(){
//     if($(this).scrollTop() >= $(menu).offset().top)
//     $(menu).css({});
// })