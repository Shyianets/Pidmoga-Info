$(document).ready(function() {

	$(document).on('click', '.main-page-container .header-menu-block .header_menu, .header .header-menu-block .header_menu, .fixnav .fix_menu', function(){
        $('.under-menu').css('opacity','');
		$('.top-menu-block').addClass('active');
        $('.under-menu').addClass('under-menu-active');
    });

    $(document).on('click', '.top-menu-block .menu-close, .under-menu', function(){
		$('.top-menu-block').removeClass('active');
        $('.under-menu').css('opacity', '0');
        setTimeout(function() {
            $('.under-menu').removeClass('under-menu-active');
        }, 500);
    });

})