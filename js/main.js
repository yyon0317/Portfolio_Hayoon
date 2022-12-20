jQuery(document).ready(function () {

	/* 애니메이션 스크롤 이동 */
	const animationMove = function (selector) {
		// ① selector 매개변수로 이동할 대상 요소 노드 가져오기
		const targetEl = document.querySelector(selector);
		// ② 현재 브라우저의 스크롤 정보(y 값)
		const browserScrollY = window.pageYOffset;
		// ③ 이동할 대상의 위치(y 값)
		const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
		window.scrollTo({
			top: targetScorllY,
			behavior: 'smooth'
		});
	};
	// 스크롤 이벤트 연결하기
	const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
	for (let i = 0; i < scollMoveEl.length; i++) {
		scollMoveEl[i].addEventListener('click', function (e) {
			const target = this.dataset.target;
			animationMove(target);
		});
	}

	
	//menu 
	
	document.querySelector('.book1').addEventListener('click',function(){
		document.querySelector('.inslide').classList.toggle('on');
	});

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

	$(".swiper-slide >.con5>img").hover(function () {
		$(".swiper-slide >.con5>img").attr('src', "img/con5-5.png");
	}, function () {
		$(".swiper-slide >.con5>img").attr('src', "img/con5.png");
	});
})
