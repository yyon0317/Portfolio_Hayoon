$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

$(document).ready(function() {
    GNB();
    goTop();
});

function GNB() {
    $('#gnb li.depth1 > a').on('mouseenter focusin', function() {
        //if ($('#gnb-btn').hasClass('active') === true) return false;
        
        $('#gnb li.depth1').removeClass('on');
        $(this).parent().addClass('on');
        
        $('#gnb li.depth2 > a').on('mouseenter focusin', function() {
            $('#gnb li.depth2').removeClass('on');
            $(this).parent().addClass('on');
        });
        $('#gnb li.depth2').on('mouseleave', function() {
            $('#gnb li.depth2').removeClass('on');
        });
        
        $('#gnb').on('mouseleave', function() {
            $('#gnb li.depth1').removeClass('on');
        });
    });
    
    $('#gnb-btn').on('click', function() {
        $('body').toggleClass('over');
        
        $(this).toggleClass('active');
        $('#header h1.logo a').toggleClass('white');
        
        $('#gnb-wrap').toggleClass('on');
        $('#top-util').toggleClass('on');
        
        $('#gnb li.depth2 > a').removeClass('open');
        $('#gnb li.depth2 > ul').slideUp();
        $('#gnb li.depth2 > a').on('click', function() { 
            $(this).toggleClass('open');
            $(this).next().slideToggle();
        }); 
    });

    
    if ($('#gnb li.depth2').find('ul')) {
        var hasSub = $('#gnb li.depth2 ul').siblings('a');
        hasSub.addClass('sub');
    }
    
    $('.lang-change').on('click', function() {
        $(this).find('.lang-list').slideToggle();
        $(this).find('> a').toggleClass('on');
    });
    $('.lang-change').on('mouseleave', function() {
        $(this).find('.lang-list').slideUp();
        $(this).find('> a').removeClass('on');
    });
}

function goTop() {
    $('.go-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
    });
}