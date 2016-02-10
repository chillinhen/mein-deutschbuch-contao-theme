jQuery(function ($) {
    //hide all broken images
    $("img").error(function(){$(this).hide();});
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
    //some tweaks for smaller windowa
    function checkSize() {
        if ($("#responsive-nav").css("position") == "relative;") {
                //remove ads
                $('.custom, .adsense, .landscape').remove();
                //remove unneccessary navs
                $('#side-nav').remove();
            }
    }
    
    /*** if AdBlocker is active ***/
    if (!(window.canRunAds === undefined)) {
        // adblocker detected, show fallback
        //alert('ads');
        //$('.leader-board-wallpaper, #main-nav, #main .mod_article').addClass('move-leaderboard');
        $('.custom, #wrapper, .netpoint-billboard, #main, #footer').addClass('if-has-ads');
    }
    
    
    $('.adsense').each(function(){
        var adWidth = $(this).width();
        var containerWidth = $(this).parent().width();
        if(adWidth <= containerWidth * 0.5){
            $(this).addClass('ad-portrait');
        }
    });
    //open responsive nav
    $('.toggle-bar').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.toggleWrap').addClass('open').removeClass('close');
    });
    $('.close-bar').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.toggleWrap').addClass('close').removeClass('open');
    });

    //make responsive tables 
    $('table').each(function(){
        $(this).addClass('responsive');
    });
    
    var listStyle = $('body.startseite .ce_text li');
    listStyle.each(function(){
        $(this).wrapInner('<span></span>');
    });

    /*** Social Media tweaks ***/
    $('.ce_fblikeit_xfbml,.googleplus1,.twitter').wrapAll('<div class="social-media"></div>');
    /*** css Tweaks ***/
    /** Navigation*/
    $('aside .mod_navigation nav > ul').addClass('nav-stacked');
    $('.mod_breadcrumb').children('ul').addClass('breadcrumb');
    
    $('.mobil_umschalter a').wrapInner('<span></span>');

    //modify download buttons
    var hostname = $(location).attr('host');
    $("a[href$='pdf']")
            .addClass('btn-download')
            .wrapInner('<span></span>');
    $("a[href$='pdf'] span img ").attr('src','http://' + hostname + '/files/images/download.png');
    if (!Modernizr.svg) {
       $("a[href$='pdf'] span img").attr("src", 'http://' + hostname  + '/files/images/download.png');
    }

    /** Links Overview*/
    $('.mod_navigation.block li.submenu').each(function(){
        if($(this).children('ul')){
            $(this).addClass('parent');
        }
    });    
    
    //add target _blanl to external links
    $('a').filter(function () {
        return this.hostname && this.hostname !== location.hostname;
    }).attr("target", "_blank");
    
    // Toggle contents
    $('.mod_article .ce_headline').wrap('<div class="headline-container"></div>');
   
    $('.ce_headline.toggle').each(function () {
        $(this).next('.flex-container').addClass('hidden');
        $(this).click(function () {
            $(this).toggleClass('show');
            $(this).next().toggleClass('hidden');
        });
    });
    //toggle search box
    $('.searchboxen button').click(function(){
        $(this).next('.collapse').toggle();
    });
    
    //elastic Videos
    $('iframe').wrap('<div class="iframe-elastic"></div>');
    
});

/** Scroll to Top***/
/**Check to see if the window is top if not then display button**/
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.scroll-to-top').fadeIn();
        jQuery('#main-nav').addClass('navbar-fixed-top');
        jQuery('#side-nav.mod_navigation').addClass('fixed');
//        jQuery('.ce_table-of-contents').addClass('fixed');
        
    } else {
        jQuery('.scroll-to-top').fadeOut();   
        jQuery('#main-nav').removeClass('navbar-fixed-top');
        jQuery('#side-nav.mod_navigation').removeClass('fixed');
    }
});

//Click event to scroll to top
jQuery('.scroll-to-top').click(function () {
    jQuery('html, body').animate({scrollTop: 0}, 800);
    return false;
});