$(document).ready(function() {



    // smoth scroll 
    $(function() {

        var navscroll = $('.nav-link');

        navscroll.on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('href');
            var top = $(target).offset().top;
            $('html,body').animate({ scrollTop: top }, 500)
        });

    });



    $(function() {
        var btnscrollvar = $('.cbtn');

        btnscrollvar.on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('href');
            var top = $(target).offset().top;
            $('html,body').animate({ scrollTop: top }, 500)
        });

    });

    // wow js
    new WOW().init();

    // nice scroll bar

    $(function() {
        $("body").niceScroll({});
    });



    // people comment slider
    var $card = $('.p-card');
    var lastCard = $(".p-card-list .p-card").length - 1;

    $('.next').click(function() {
        var prependList = function() {
            if ($('.p-card').hasClass('activeNow')) {
                var $slicedCard = $('.p-card').slice(lastCard).removeClass('transformThis activeNow');
                $('.p-card-list').prepend($slicedCard);
            }
        }
        $('.p-card').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
        setTimeout(function() { prependList(); }, 150);
    });

    $('.prev').click(function() {
        var appendToList = function() {
            if ($('.p-card').hasClass('activeNow')) {
                var $slicedCard = $('.p-card').slice(0, 1).addClass('transformPrev');
                $('.p-card-list').append($slicedCard);
            }
        }

        $('.p-card').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
        setTimeout(function() { appendToList(); }, 150);
    });
});