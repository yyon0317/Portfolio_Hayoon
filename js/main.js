jQuery(document).ready(function () {
	
	//menu 자바스크립트
	document.querySelector('.book1').addEventListener('click',function(){
		document.querySelector('.inslide').classList.toggle('on');
	});
	//menu 제이쿼리
	// $('.book1').on('click', function () {
	// 	$(".inslide").toggleClass('on');
	// })

	// When the user scrolls the page, execute myFunction 
	window.onscroll = function () {
		myFunction()
	};
	function myFunction() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("myBar").style.width = scrolled + "%";
	}

	//contents3 slide
	var SlideList = new Swiper('.swiper-container', {
		//기본 셋팅
		//방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평const swiper
		direction: 'horizontal',
		//한번에 보여지는 페이지 숫자
		slidesPerView: 3,
		//페이지와 페이지 사이의 간격
		spaceBetween: 30,
		//드레그 기능 true 사용가능 false 사용불가
		debugger: false,
		//마우스 휠기능 true 사용가능 false 사용불가
		mousewheel: false,
		//반복 기능 true 사용가능 false 사용불가
		loop: true,
		//선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
		centeredSlides: true,
		// 페이지 전환효과 slidesPerView효과와 같이 사용 불가
		// effect: 'fade',

		//자동 스크를링
		autoplay: {
			//시간 1000 이 1초
			delay: 3000,
			disableOnInteraction: false,
		},

		//페이징
		pagination: {
			//페이지 기능
			el: '.swiper-pagination',
			//클릭 가능여부
			clickable: true,
		},

		//방향표
		navigation: {
			//다음페이지 설정
			nextEl: '.swiper-button-next',
			//이전페이지 설정
			prevEl: '.swiper-button-prev',
		},

	});

	var currentSlide = $(SlideList.slides[SlideList.activeIndex])
	var prevSlide;
	var nextSlide
	currentSlide.removeClass('off')

	SlideList.on('slideChange', function () {
		currentSlide = $(SlideList.slides[SlideList.activeIndex])
		prevSlide = SlideList.slides[SlideList.activeIndex - 1]
		nextSlide = SlideList.slides[SlideList.activeIndex + 1]
		currentSlide.removeClass('off')

		if (!$(nextSlide).hasClass('off') || !$(prevSlide).hasClass('off')) {
			$(nextSlide).addClass('off')
			$(prevSlide).addClass('off')
		} else {
			$(currentSlide).removeClass('off')
		}
	});

	$(".swiper-slide >.con3>img").hover(function () {
		$(".swiper-slide >.con3>img").attr('src', "img/con3-3.png");
	}, function () {
		$(".swiper-slide >.con3>img").attr('src', "img/con3.png");
	});

	$(".swiper-slide >.con2>img").hover(function () {
		$(".swiper-slide >.con2>img").attr('src', "img/con2-2.png");
	}, function () {
		$(".swiper-slide >.con2>img").attr('src', "img/con2.png");
	});

	$(".swiper-slide >.con1>img").hover(function () {
		$(".swiper-slide >.con1>img").attr('src', "img/con1-1.png");
	}, function () {
		$(".swiper-slide >.con1>img").attr('src', "img/con1.png");
	});



	//banner ajax
	$.ajax({
		url: "banner.html", // html 파일 내용을 데이터로 사용
		dataType: "html", // 파일 형식 console.log($data[getNum]);
		success: function (data) {

			const $data = $(data).siblings("li");
			let call = 1;

			function getData() {
				for (let getNum = 0; getNum < 120 * call; getNum++) {
					$(".in-imgslide ul").append($data[getNum]);
				};
				call++;
			}
			getData();

			var galleryli = $('.in-imgslide ul li');
			var gallerybg = [];
			for (var i = 0; i < galleryli.length; i++) {
				gallerybg.push('url(img/sb_img' + i + '.png)no-repeat 50%');
				galleryli.eq(i).css({
					'background': gallerybg[i],
					'background-size': 'cover'
				});
			}
		}
	});

	$('.next').click(function () {
		var galleryli = $('.in-imgslide>ul>li');
		$('.in-imgslide>ul').append(galleryli.eq(0));
	});
	$('.prev').click(function () {
		var galleryli = $('.in-imgslide>ul>li');
		var lastnum = galleryli.length - 1;
		$('.in-imgslide>ul').prepend(galleryli.eq(lastnum));
	});

	//contents4 
	$('.popupimg>.close').click(function () {
		$('.popupimg').fadeOut(500);
	});
	$('.banner.box1').click(function () {
		$('.popupimg').fadeIn(500);
	});

})