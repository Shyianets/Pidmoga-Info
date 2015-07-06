$(document).ready(function() {

	$(document).on('click', '.main-page-container .menu-right, .header .header_menu, .fixnav .fix_menu', function(){
		$('.top-menu-block').addClass('active');
    });

    $(document).on('click', '.top-menu-block .menu-close', function(){
		$('.top-menu-block').removeClass('active');
    });

})