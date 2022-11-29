$(document).ready(function () {


    var currentPosition = parseInt($(".right_con").css("top"));
    var currentPosition1 = parseInt($("footer").css("top"));
    $(window).scroll(function() {
    var position = $(window).scrollTop(); 
    if (window.scrollY < 600) {
      $(".right_con").stop().animate({"top":position+currentPosition+"px"},500);
      }if (window.scrolltop < 600) {
      $(".right_con").stop();}
      if (window.scrollY > 630) {
         $("footer").stop().animate({"top":currentPosition1+"280px"},1000);
        };
        if (window.scrollY < 1500) {
          $("footer").stop().animate({"top":"0px"},500);;
        };
    });

    fetch('./main.json') 
    .then((response) => response.json()) 
    .then((json) => {
        mainbanner = json.mainbanner
        let html = '';
        mainbanner.forEach(a => { 
            html += `
           <div class="swiper-slide">
         <div class="mainbanner" data-id="${a.id}">
               <ul>
                   <li><a href="${a.link1}"><img src="${a.banner1}" alt="banner1"></a></li>
                   <li><a href="${a.link2}"><img src="${a.banner2}" alt="banner1"></a></li>
                   <li><a href="${a.link3}"><img src="${a.banner3}" alt="banner1"></a></li> 
               </ul>
         </div></div>`
        }); 
    
        $('.swiper-wrapper').html(html); 
    
        swiper('.list1');
    })
    
    function swiper(name){
        var swiper = new Swiper(name, {
        spaceBetween:10,
        //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
        direction: 'horizontal',
        //한번에 보여지는 페이지 숫자
        slidesPerView: 1,
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
         loopAdditionalSlides: 1,
        
        //자동 스크를링
        autoplay: {
          //시간 1000 이 1초
          delay: 2500,
          disableOnInteraction: false,// 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
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
        var sw = 0;
    $('.btn_pause').click(function(){
        if(sw==0){
          $('.btn_pause').addClass('stop');
            swiper.autoplay.stop();
            sw = 1;
        }else{
            $('.btn_pause').removeClass('stop');
            swiper.autoplay.start();
            sw = 0;
        }
    });
    
    }

    $(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
			$('header').css({
				'height': '52px',
			});
            $('.menuetc').css({
				'visibility': 'hidden',
			});
            $('.menu').css({
				'width': '470px',
			});
            $('#topBanner').css({
				'top': '52px',
			});
            $('.logo>a>img').css({
				'width': '110px',
                'height': '50px' 
			});
            $('.menu>ul>li').css({
                'line-height': '50px' ,
                'font-size' : '14px'
			});
            $('.input_cell').css({
                'height': '35px',
                'padding': '0px 0px',
                'margin-top': '10px',
                'border': '1px solid #ccc'
			});
            $('.submenu').css({
                'top': '52px'
			});
		} else {
			$('header').css({
				'height': '82px',
			});
            $('.menuetc').css({
				'visibility': 'visible',
			});
            $('.menu').css({
				'width': '550px',
			});
            $('#topBanner').css({
				'top': '82px',
			});
            $('.logo>a>img').css({
				'width': '140px',
                'height': '80px' 
			});
            $('.menu>ul>li').css({
                'line-height': '80px' ,
                'font-size' : '16px'
			});
            $('.input_cell').css({
                'height': '40px',
                'padding': '5px 0px',
                'margin-top': '20px',
                'border': '1px solid #000'
			});
            $('.submenu').css({
                'top': '82px'
			});
		}
	});

/*검색*/ 
$('#click').click(function(){
	var text = document.getElementById("search").value;
	if(text != "") {
		alert(text);
	}
	});

    function topBanner(){
        var banner = document.querySelector('#topBanner');
        var btnClose = banner.querySelector('.btnClose');
        btnClose.addEventListener('click', function(){
            banner.classList.add("hidden");
            document.querySelector(".content").style.margin='100px auto'
        });
    }
    topBanner();


    var submenu = $('.submenu');
    
    $('.menu>ul>li').mouseover(function(){
        submenu.addClass('on');
    }).mouseleave(function(){
        submenu.removeClass('on');
    });
    submenu.mouseover(function(){
        submenu.addClass('on');
    }).mouseleave(function(){
        submenu.removeClass('on');
    });
    

    //로그인 탭

    $('.login_tab li').click(function(){							
		var tab_id = $(this).attr('data-tab');

		$('.login_tab li').removeClass('current');			
		$('.login_tab_content').removeClass('current');		

		$(this).addClass('current');								
		$("#" + tab_id).addClass('current');
	})

    /*timer*/

    $('.login_tab li:nth-child(2)').click(function(){
        var time = 180;
    var min = "";
    var sec = "";

    var x = setInterval(function(){
        min = parseInt(time/60);
        sec = time%60;

        document.getElementById("demo").innerHTML ="남은시간" + min + "분" + sec + "초";
        time--;

        if(time <0 ){
            clearInterval(x);
            document.getElementById("demo").innerHTML = "로그인 인증시간이 만료되었습니다<br>새로고침 후 다시 시도해 주세요.<br><br>"+"남은시간" + min + "분" + sec + "초";
            document.getElementById("demo").style.color='red';
        }else{
            document.getElementById("demo").style.color='#0070f0';
        }
    },1000);

    })
    
});