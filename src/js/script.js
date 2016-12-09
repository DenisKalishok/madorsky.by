$(document).ready(function(){
    
    $(".aside .header .nav a").mPageScroll2id({
        scrollSpeed : 600,
    });
    
    var pull = $('#menu');
    var menu = $('.aside .header .nav');
    
    $(pull).click(function(){     
        menu.slideToggle();
    });
    
    $(window).resize(function(){
        if( $(window).width() > 1000 || menu.is(':hidden')){
            menu.removeAttr('style');
        }
    });
    
});