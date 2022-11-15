  $(document).ready(function () {

  	$('.intro>button').click(function () {
  		$('.intro').fadeOut(500);
  	});


  	/*menu*/
  	$('.navbtn').click(function () {
  		$('.gnb').fadeToggle(500)
  		$('.navbtn').toggleClass('open')
  	});

  	/*scroll active*/
  	$(window).scroll(function () {
  		var win_top = $(window).scrollTop()
  		var win_h = $(window).height()

  		$('.text,.con2,.img,.title,.ex,.link,img,li,.inner-contents1,.con1,p,span,.con.con1,.con.con2').each(function () {
  			var box_top = $(this).offset().top
  			if (win_top >= box_top - 800) {
  				$(this).addClass('active')
  			}
  		});
  	});

  	/*sub gallery*/
  	$('.buttonpc>ul>li').mouseover(function () {
  		var galleryli = $('.con2>ul>li>.imggallery>ul>li');
  		var textli = $('.con2>ul>li>.text>ul>li');
  		var thisidx = $(this).index();

  		galleryli.eq(thisidx).fadeIn(400).siblings().fadeOut();
  		textli.eq(thisidx).fadeIn(400).siblings().fadeOut();

  		$(this).addClass('on').siblings().removeClass('on');
  	});
  	$('.buttonm>button.bt2').click(function () {
  		var galleryli = $('.con2>ul>li>.imggallery>ul>li');
  		var textli = $('.con2>ul>li>.text>ul>li');
  		$('.con2>ul>li>.imggallery>ul').stop().append(galleryli.eq(0));
  		$('.con2>ul>li>.text>ul').stop().append(textli.eq(0));

  	});
  	$('.buttonm>button.bt1').click(function () {
  		var galleryli = $('.con2>ul>li>.imggallery>ul>li');
  		var lastnum = galleryli.length - 1;
  		$('.con2>ul>li>.imggallery>ul').stop().prepend(galleryli.eq(lastnum));

  		var textli = $('.con2>ul>li>.text>ul>li');
  		var lastnum = textli.length - 1;
  		$('.con2>ul>li>.text>ul').stop().prepend(textli.eq(lastnum));
  	});

  	/*swiper*/
  	var swiper = new Swiper('.swiper-container', {
  		spaceBetween: 30,
  		centeredSlides: true,
  		autoplay: {
  			delay: 5000,
  			disableOnInteraction: false,
  		},
  		pagination: {
  			el: '.swiper-pagination',
  			clickable: true,
  		},
  		navigation: {
  			nextEl: '.swiper-button-prev',
  			prevEl: '.swiper-button-next',
  		},
  	});

  	/*contents1>.con1>.img1*/
  	$('.items>button').eq(0).click(function () {
  		var galleryli = $('.inner-contents1>.con1>.img1>ul>li');
  		$('.inner-contents1>.con1>.img1>ul').append(galleryli.eq(0));
  		$(this).addClass('on').siblings().removeClass('on');
  	});
  	$('.items>button').eq(1).click(function () {
  		var galleryli = $('.inner-contents1>.con1>.img1>ul>li');
  		var lastnum = galleryli.length - 1;
  		$('.inner-contents1>.con1>.img1>ul').prepend(galleryli.eq(lastnum));
  		$(this).addClass('on').siblings().removeClass('on');
  	});

  	/*contents3>.con1>.img1*/
  	$('.next>img').click(function () {
  		var galleryli = $('.inner-con2>ul>li');
  		$('.inner-con2>ul').append(galleryli.eq(0));
  	});
  	$('.prev>img').click(function () {
  		var galleryli = $('.inner-con2>ul>li');
  		var lastnum = galleryli.length - 1;
  		$('.inner-con2>ul').prepend(galleryli.eq(lastnum));
  	});

  	/*scroll top slidedown*/
  	$('.slidedown').click(function () {
  		$('html,body').animate({
  			scrollTop: 910
  		})
  	});

  	/*hover img*/
  	$(".slidedown").hover(function () {
  		$(".slidedown>img").attr('src', "img/slidedownh.png");
  	}, function () {
  		$(".slidedown>img").attr('src', "img/slidedown.png");
  	});
  	$(".contents4 .inner-contents4 .con1 .img0>img").hover(function () {
  		$(".contents4 .inner-contents4 .img0>img").attr('src', "img/con4_img1.jpg");
  	}, function () {
  		$(".contents4 .inner-contents4 .img0>img").attr('src', "img/con4_img0.jpg");
  	});
  	$(".contents4 .inner-contents4 .con2 .img1>img").hover(function () {
  		$(".contents4 .inner-contents4 .img1>img").attr('src', "img/con4_img2.jpg");
  	}, function () {
  		$(".contents4 .inner-contents4 .img1>img").attr('src', "img/con4_img4.jpg");
  	});
  });
