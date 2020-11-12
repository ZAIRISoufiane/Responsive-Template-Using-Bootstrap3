$(function(){
    $(window).scroll(function(){
        window.console.log($('.navbar').height());
        window.console.log($(window).scrollTop());

        var navbar = $('.navbar');
        if($(window).scrollTop() >= navbar.height()){
            navbar.addClass('scrolled');
        }else{
            navbar.removeClass('scrolled');
        }
    });

    //Deal With Tabs
    $('.tab-switch li').click(function(){
        // Add Selected Class To Active Link
        $(this).addClass('selected').siblings().removeClass('selected');
        // Hide Aldd Divs
        $('.tabs-section .tabs-content > div').hide();
        // Show Div Connected With This Link
        $('.' + $(this).data('class')).fadeIn();
    });
});