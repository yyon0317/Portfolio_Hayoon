$(document).ready(function () {

	//intro
	$('.intro>button').click(function () {
		$('.intro').fadeOut(500);
	});

	//scroll
	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {

			$('.header').css({
				'position': 'fixed',
				'left': '0',
				'top': '0',
				'background': '#0008',
				'z-index': '1000',
				'width': '100%',
			});
			$('.topmenu').css({
				'width': '100%',
				'height': '70px'
			});
			$('.subgnb').css({
				'display': 'none'
			});


		} else {
			$('.header').css({
				'position': 'static',
				'background': '#000',
			});
			$('.topmenu').css({
				'width': '100%',
				'height': '80px'
			});
			$('.subgnb').css({
				'display': 'block'
			});
		}
	});

	//submenu
	$('.gnb-center>ul>li>a').mouseover(function () {
		$('.submenu').slideDown(100);
	});
	$('.submenu').mouseleave(function () {
		$('.submenu').slideUp(0);
	});

	//span. menu              
	$('span.menu').click(function () {
		$(".gnb").animate({
			left: '0',
			'display': 'block'
		});
		$('span.menu').css({
			'display': 'none',
		});
	});
	$('.leftxmenu').click(function () {
		$(".gnb").animate({
			left: '-800',
			'display': 'none',
		});
		$('span.menu').css({
			'display': 'block',
		});
	});

	//iconimg
	$('img.map').hover(function () {
		$('span.sub.map').css({
			'display': 'block'
		});
	}, function () {
		$('span.sub.map').css({
			'display': 'none'
		});
	});
	$('img.heart').hover(function () {
		$('span.sub.heart').css({
			'display': 'block'
		});
	}, function () {
		$('span.sub.heart').css({
			'display': 'none'
		});
	});
	$('img.me').hover(function () {
		$('span.sub.me').css({
			'display': 'block'
		});
	}, function () {
		$('span.sub.me').css({
			'display': 'none'
		});
	});

	//galleryimg

	var galleryli = $('.gallery>ul>li');
	var gallerybg = []

	for (var i = 0; i < galleryli.length; i++) {
		gallerybg.push('url(img/index/nav_' + i + '.png)no-repeat 50%');
		galleryli.eq(i).css({
			'background': gallerybg[i],
			'background-size': 'cover'
		});
	}

	//autogallery
	var idx = -1;
	var itemsli = $('.inner-nav>.items>ul>li');

	function autogallery() {
		idx++;
		galleryli.eq(idx).fadeIn().siblings().fadeOut();

		if (idx >= galleryli.length - 1) idx = -1;

		itemsli.eq(idx).addClass('on').siblings().removeClass('on');
	}

	var setin = setInterval(autogallery, 3000);

	itemsli.hover(
		function () {
			clearInterval(setin);
		},
		function () {
			setin = setInterval(autogallery, 3000);
		}
	);

	itemsli.click(function () {
		var thisidx = $(this).index();

		galleryli.eq(thisidx).fadeIn(400).siblings().fadeOut();

		$(this).addClass('on').siblings().removeClass('on');

		idx = thisidx;
	});

	//contents1 
	$('.con1>.items>ul>li').click(function () {
		var thisidx = $(this).index();
		var con2 = $('.inner-con2-1>ul>li');

		con2.eq(thisidx).fadeIn().siblings().fadeOut();

		$(this).addClass('on1').siblings().removeClass('on1');

		idx = thisidx;
	});

	//contents2
	$(window).scroll(function () {
		if ($(window).scrollTop() > 1000) {
			$(".con2-1").animate({
				left: '10px'
			});
		}
	});

	//contents3
	$('.inner-con2>ul>li').hover(function () {
		$('.popup').show();
	}, function () {
		$('.popup').hide();
	});

	//contents4
	$(window).scroll(function () {
		if ($(window).scrollTop() > 2000) {
			$('.contents4 .inner-con4 > .con').fadeIn(3000);
		}
	});

	//contents5
	$('span.lan').click(function () {
		$('.lansub').slideToggle(50);
	});
	$('span.arrow.arrowleft img').click(function () {
		var bannerli = $('.inner-con3-1 > ul > li');
		$('.inner-con3-1 > ul ').append(bannerli.eq(0));
	});
	$('span.arrow.arrowright img').click(function () {
		var bannerli = $('.inner-con3-1 > ul > li');
		var lastnum = bannerli.length - 1;
		$('.inner-con3-1 > ul ').prepend(bannerli.eq(lastnum));
	});

	/*sub1*/
	$(".inner-subcontents2>.con1").click(function () {
		$(".inner-subcontents2>.con2").slideToggle("slow");
	});
	$(".inner-subcontents3>.con1").click(function () {
		$(".inner-subcontents3>.con2").slideToggle("slow");
	});
	$(".inner-subcontents4>.con1").click(function () {
		$(".inner-subcontents4>.con2").slideToggle("slow");
	});
	$('.con2>span.arrow.arrowleft').click(function () {
		var reviewli = $('.review-con>ul>li');
		$('.review-con>ul').append(reviewli.eq(0));
	});
	$('.con2>span.arrow.arrowright').click(function () {
		var reviewli = $('.review-con>ul>li');
		var lastnum = reviewli.length - 1;
		$('.review-con>ul').prepend(reviewli.eq(lastnum));

	});

	/*sub2*/
	$('.con1>span.arrow.arrowleft').click(function () {
		var conli = $('.inner-con1.n1>ul>li');
		$('.inner-con1.n1>ul').append(conli.eq(0));
	});
	$('.con1>span.arrow.arrowright').click(function () {
		var conli = $('.inner-con1.n1>ul>li');
		var lastnum = conli.length - 1;
		$('.inner-con1.n1>ul').prepend(conli.eq(lastnum));

	});

});
