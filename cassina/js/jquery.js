$(window).scroll(function () {
	var win_top = $(window).scrollTop()
	var win_h = $(window).height()

	$('.circle,.circle1,.bg4,p,.con2,.con1,img,.title').each(function () {
		var box_top = $(this).offset().top
		if (win_top >= box_top - 700) {
			$(this).addClass('on')
		}
	});
	
});
$(document).ready(function () {

	/*menu*/
	$('.navbtn').click(function () {
		$('.gnb').fadeToggle(500)
		$('.navbtn').toggleClass('open')
	});



	//배경이미지
	var galleryli = $('.gallery>ul>li');

	//자동갤러리 ->fade
	var idx = -1;
	var itemsli = $('.items>ul>li')

	function autogallery() {
		if (idx >= galleryli.length - 1) idx = -1; //마지막 클릭후 손 아웃하면 3초 후에 1번으로 이거 안하면 6초루에 감

		idx++;
		//12340순서
		console.log(idx);
		galleryli.eq(idx).fadeIn().siblings().fadeOut();
		itemsli.eq(idx).addClass('on').siblings().removeClass('on');

		if (idx >= galleryli.length - 1) idx = -1; //처음으로 돌아가기
	}

	var setin = setInterval(autogallery, 3000); //시간이 흐른 다음에 실행

	//items 관련
	itemsli.on('click', itemslifunc);

	function itemslifunc() {
		var thisidx = $(this).index();

		galleryli.eq(thisidx).fadeIn(400).siblings().fadeOut();
		$(this).addClass('on').siblings().removeClass('on');

		idx = thisidx;
	}
});
