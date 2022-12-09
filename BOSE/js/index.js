  $(document).ready(function () {


  	/*menu*/
	//toggleClass()/fadeToggle 사용해서 menu버튼 동적효과 적용 
  	$('.navbtn').click(function () {
  		$('.gnb').fadeToggle(500)
  		$('.navbtn').toggleClass('open')
  	});

  	/*scroll active*/
	//scroll/scrolltop()/offset()을 사용해서 스크롤 시 css.animation html.class추가
  	$(window).scroll(function () {
  		var win_top = $(window).scrollTop()
  		// var win_h = $(window).height()

  		$('.text,.con2,.img,.title,.ex,.link,img,li,.inner-contents1,.con1,p,span,.con.con1,.con.con2').each(function () {
  			var box_top = $(this).offset().top
  			if (win_top >= box_top - 800) {
  				$(this).addClass('active')
  			}
  		});
  	});

  	/*sub gallery*/
	//mouseover(function)함수
	//jQuery Effect Methods fadeIn()/siblings()/fadeOut()/addClass()/siblings()/removeClass()를 사용해서 클릭시 보이고 그외 숨기기
  	$('.buttonpc>ul>li').mouseover(function () {
  		var galleryli = $('.con2>ul>li>.imggallery>ul>li');
  		var textli = $('.con2>ul>li>.text>ul>li');
  		var thisidx = $(this).index();
  		galleryli.eq(thisidx).fadeIn(400).siblings().fadeOut();
  		textli.eq(thisidx).fadeIn(400).siblings().fadeOut();
  		$(this).addClass('on').siblings().removeClass('on');
  	});
	//jQuery HTML / CSS Methods stop().prepend()/stop().append()를 활용해서 next/prev버튼 동작구현
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
	//메인슬라이드 Swiper Slide Plugin을 사용하여 구현
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

  	/*contents3>.con1>.img1*/
	//jQuery HTML / CSS Methods stop().prepend()/stop().append()를 활용해서 next/prev버튼 동작구현
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
	//animate().scrolltop()을 사용해서 html,body위치 이동
  	$('.slidedown').click(function () {
  		$('html,body').animate({
  			scrollTop: 910
  		})
  	});

  	/*hover img*/
	//jQuery hover() Method를 사용해서 .attr('src')이미지 바꾸기
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
