/*====== mobile off canvas active ======*/
function headermobileAside() {
    var navbarTrigger = $('.mobile-aside-button'),
        endTrigger = $('.mobile-aside-close'),
        container = $('.mobile_canvas_active'),
        wrapper = $('.wrapper');
    wrapper.prepend('<div class="body-overlay"></div>');
    navbarTrigger.on('click', function (e) {
        e.preventDefault();
        container.addClass('inside');
        wrapper.addClass('overlay-active');
    });
    endTrigger.on('click', function () {
        container.removeClass('inside');
        wrapper.removeClass('overlay-active');
    });
    $('.body-overlay').on('click', function () {
        container.removeClass('inside');
        wrapper.removeClass('overlay-active');
    });
};
headermobileAside();

/*Scroll NavBar*/
function scrollNavbar(){
   $(window).scroll(function(){

    let scrollDist=$(document).scrollTop();
    if(scrollDist > 350){
        $('.nav_menu').addClass('stick')

    }else{
        $('.nav_menu').removeClass('stick')

    }

   });
};
scrollNavbar();

