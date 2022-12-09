
$(document).ready(function () {

	//product.json
	//상품정렬구현에는 array 배열 리스트 형식을 사용한 product.json 데이터가 담긴 파일을 get()가져와서
	//forEach/append()을 사용해  기존태그에 안에 html형식을 추가
	$.get('product.json').then((data)=>{

	products = data.products;
	products2 = data.products2;
	place = data.place;
	place = data.place2;
	subproducts = data.subproducts;
	sub2products = data.sub2products;
	sub2products2 = data.sub2products2;

	//페이지로드시 json 데이터가져오기
	data.products.forEach((a,i) => {
		$('.tab>.sub>ul>li').append(`
		<div class="product" data-id="${a.id}">
		<img src="${a.photo}" alt="img">
		<a href="#">QUICK SHOP</a><br>
		<div class="text" >${a.title}</div><br>
		<div class="price"> ${a.price}</div>
		</div>`)
	});	
	data.products2.forEach((a, i) => {
		$('.tab>.sub2>ul>li').append(`
		<div class="product" data-id="${a.id}">
		<img src="${a.photo}" alt="img">
		<a href="#">QUICK SHOP</a><br>
		<div class="text" >${a.title}</div><br>
		<div class="price"> ${a.price}</div>
		</div>`);
	});
	data.place.forEach((a, i) => {
		$('.tab2>.sub>ul>li').append(`
		<div class="place data-id="${a.id}">
		<img src="${a.photo}" alt="store">
		<div class="store">${a.title}</div>
		<div class="inner-sub">
		<div class="adress">${a.adress}</div>
		<div class="phone">${a.phone}</div>
		</div>
		</div>`);
	});
	data.place2.forEach((a, i) => {
		$('.tab2>.sub2>ul>li').append(`
		<div class="place data-id="${a.id}">
		<img src="${a.photo}" alt="store">
		<div class="store">${a.title}</div>
		<div class="inner-sub">
		<div class="adress">${a.adress}</div>
		<div class="phone">${a.phone}</div>
		</div>
		</div>`);
	});
	data.subproducts.forEach((a, i) => {
		$('.slideto>.con2>ul>li').append(`
		<div class="subproduts" data-id="${a.id}">
		<div class="img"><img src="${a.photo}" alt="gift">
		<div class="hover"><span>ADD TO BAG</span></div>
		</div><a href="#">QUICK SHOP</a>
		<div class="text">${a.title}</div>
		<div class="price">${a.price}</div>
		</div>`);
	});
	data.sub2products.forEach((a, i) => {
		$('.inner-contents3>.con1>ul>li').append(`
		<div class="sub" data-id="${a.id}">
		<ul>
		<li><img src="${a.photo}" alt="Christmas Cracker"></li>
		<li>${a.title}</li>
		<li>${a.price}</li>
		<li><a href="#">Quick Shop</a></li>
		</ul>
		</div>`);
	});
	data.sub2products2.forEach((a, i) => {
		$('.inner-contents5>.con1>ul>li').append(`
		<div class="sub" data-id="${a.id}">
		<ul>
		<li><img src="${a.photo}" alt="Christmas Cracker"></li>
		<li>${a.title}</li>
		<li>${a.price}</li>
		<li><a href="#">Quick Shop</a></li>
		</ul>
		</div>`);
	});

	}); 
	
	/*search click*/
	//검색입력정보 value로 가져와서 alert 띄어줌
	$('#click').click(function(){
	var text = document.getElementById("a").value;
	if(text != "") {
		alert(text);
	}
	});

	//scroll
	//상단 메뉴에는 scroll/scrolltop()을 사용해서 css.position(fixed)로 스크롤시 상단고정
	//contents2
	//scroll/scrolltop()을 사용해서 animate()동적효과 구현
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
		if ($(window).scrollTop() > 1000) {
			$(".con2-1").animate({
			 	left: '10px'
			});
		}
	});

	//submenu
	//jQuery Effect Methods animate()/mouseleave()/mousedown()/hover()로 PC/모바일에서의 메뉴/아이콘에 동적효과 구현
	$('.gnb-center>ul>li>a').mouseover(function () {
		$('.submenu').slideDown(100);
	});
	$('.submenu').mouseleave(function () {
		$('.submenu').slideUp(0);
	});
	//span. menu              
	$('span.menu').click(function () {
		$(".gnb").animate({
			'left': '0',
			'display': 'block'
		});
		$('span.menu').css({
			'display': 'none',
		});
	});
	$('.leftxmenu').click(function () {
		$(".gnb").animate({
			'left': '-800',
			'display': 'none'
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
	//메인 슬라이드 이미지 for반복문/증감연산자++/push를 사용해서 이미지 추가
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
	//function()함수/if()조건문/setInterval()반복 실행으로 autogallery구현
	//jQuery Effect Methods fadeIn()/siblings()/fadeOut()/addClass()/siblings()/removeClass()를 사용해서 클릭시 보이고 그외 숨기기
	var idx = -1;
	var itemsli = $('.inner-nav>.items>ul>li');
	function autogallery() {
		idx++;
		galleryli.eq(idx).fadeIn().siblings().fadeOut();
		if (idx >= galleryli.length - 1) idx = -1;
		itemsli.eq(idx).addClass('on').siblings().removeClass('on');
	}
	var setin = setInterval(autogallery, 3000);
	itemsli.click(function () {
		var thisidx = $(this).index();
		galleryli.eq(thisidx).fadeIn(400).siblings().fadeOut();
		$(this).addClass('on').siblings().removeClass('on');
		idx = thisidx;
	});

	//contents1 
	//jQuery Effect Methods fadeIn()/siblings()/fadeOut()/addClass()/siblings()/removeClass()를 사용해서 클릭시 보이고 그외 숨기기
	$('.con1>.items>ul>li').click(function () {
		var thisidx = $(this).index();
		var con2 = $('.inner-con2-1>ul>li');
		con2.eq(thisidx).fadeIn().siblings().fadeOut();
		$(this).addClass('on1').siblings().removeClass('on1');
		idx = thisidx;
	});
	
	//contents3
	//jQuery Effect Methods show()/hide() POPUP동적효과 구현
	$('.inner-con2>ul>li').hover(function () {
		$('.popup').show();
	}, function () {
		$('.popup').hide();
	});

	//contents5
	//jQuery Effect Methods append()/prepend()/length 를 사용해서 슬라이드형식 구현
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
	//jQuery Effect Methods slidetoggle사용해서 down/up슬라이드 웹콘텐츠 구현
	$(".inner-subcontents2>.con1").click(function () {
		$(".inner-subcontents2>.con2").slideToggle("slow");
	});
	$(".inner-subcontents3>.con1").click(function () {
		$(".inner-subcontents3>.con2").slideToggle("slow");
	});
	$(".inner-subcontents4>.con1").click(function () {
		$(".inner-subcontents4>.con2").slideToggle("slow");
	});
	//jQuery Effect Methods append()/prepend()/length 를 사용해서 슬라이드형식 구현
	$('.con2>span.arrow.arrowleft').click(function () {
		var reviewli = $('.review-con>ul>li');
		$('.review-con>ul').append(reviewli.eq(0));
	});
	$('.con2>span.arrow.arrowright').click(function () {
		var reviewli = $('.review-con>ul>li');
		var lastnum = reviewli.length - 1;
		$('.review-con>ul').prepend(reviewli.eq(lastnum));

	});

})
