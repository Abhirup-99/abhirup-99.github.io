
$(document).ready(function () {
    // Check if element is scrolled into view
    console.log("ACCessed");
    $(".sidebar-section-links>ul>li").on("click",function(){
        console.log("clicked");
        $(".sidebar-section-links>ul>li").removeClass("active");
        $(this).addClass("active");
    })    
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function () {
        isMobile = false;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            isMobile = true;
           }
        if(!isMobile){
            $('.about-me').each(function () {
                if (isScrolledIntoView(this) === true) {
                    $(this).addClass('animate__backInLeft');
                }
            });
            $('.leftIn').each(function () {
                if (isScrolledIntoView(this) === true) {
                    $(this).addClass('animate__backInLeft');
                }
            });
            $('.RightIn').each(function () {
                if (isScrolledIntoView(this) === true) {
                    $(this).addClass('animate__backInRight');
                }
            });    
        }
    });
});