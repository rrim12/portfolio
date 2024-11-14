$(function () {
    // 스크롤시 해당페이지로 내비가 바뀌기
    let baseline = -500;
    let con1 = $(".page1").offset().top + baseline;
    let con2 = $(".page2").offset().top + baseline;
    let con3 = $(".page3").offset().top + baseline;
    let con4 = $(".page4").offset().top + baseline;
    let con5 = $(".page5").offset().top + baseline;
    let con6 = $(".page6").offset().top + baseline;
    let con7 = $(".page7").offset().top + baseline;
    let con8 = $(".page8").offset().top + baseline;

    //네비색 리셋
    function erase() {
        $(".navi li span").removeClass("on");
        $(".navi li div").removeClass("col_on");
    }

    //숫자카운트 html
    function count1() {
        let num = 60;
        numstop = setInterval(function () {
            num++;
            if (num > 90) {
                clearInterval(numstop);
            } else {
                $(".number1").stop().text(num);
            }
        }, 70);
    }
    // 숫자카운트 css
    function count2() {
        let num2 = 55;
        numstop2 = setInterval(function () {
            num2++;
            if (num2 > 85) {
                clearInterval(numstop2);
            } else {
                $(".number2").stop().text(num2);
            }
        }, 70);
    }
    // 숫자카운트 jq
    function count3() {
        let num3 = 50;
        numstop3 = setInterval(function () {
            num3++;
            if (num3 > 80) {
                clearInterval(numstop3);
            } else {
                $(".number3").stop().text(num3);
            }
        }, 70);
    }
    // 숫자카운트 jss
    function count4() {
        let num4 = 40;
        numstop4 = setInterval(function () {
            num4++;
            if (num4 > 70) {
                clearInterval(numstop4);
            } else {
                $(".number4").stop().text(num4);
            }
        }, 70);
    }
    // 숫자카운트 photoshop
    function count5() {
        let num5 = 55;
        numstop5 = setInterval(function () {
            num5++;
            if (num5 > 85) {
                clearInterval(numstop5);
            } else {
                $(".number5").stop().text(num5);
            }
        }, 70);
    }
    // 숫자카운트 illuste
    function count6() {
        let num6 = 45;
        numstop6 = setInterval(function () {
            num6++;
            if (num6 > 75) {
                clearInterval(numstop6);
            } else {
                $(".number6").stop().text(num6);
            }
        }, 70);
    }
    //스크롤시 움직임 작동
    $(window).on("scroll", function () {
        //모바일 스크롤시 헤더 색바뀜
        $("header").addClass("h_on");
        $(".butt").addClass("line_non");

        let point = $(this).scrollTop();

        if (point >= con1 && point < con2) {
            erase();
            $(".navi li").eq(0).children("span").stop().addClass("on");
            $(".navi li").eq(0).children("div").stop().addClass("col_on");
        } else if (point >= con2 && point < con3) {
            erase();
            $(".navi li").eq(1).children("span").stop().addClass("on");
            $(".navi li").eq(1).children("div").stop().addClass("col_on");

            //어바웃이력
            setTimeout(function () {
                //타이틀
                $(".page2 .p_titl").stop().addClass("up_act");
            }, 300);
            setTimeout(function () {
                $(".bg_cirl").addClass("trun"); //글씨회전
                $(".bg_txt").addClass("f_act");
                //사진 옆에서 들어옴
            }, 1000);
            setTimeout(function () {
                $(".resume").addClass("resu_mov"); //글씨들어옴
                $(".skill_wrap").addClass("skill_up");
            }, 1300);

            //원형그래프 속도딜레이
            setTimeout(function () {
                $(".ability li:nth-child(1)").addClass("pie_on");
                $(".ability li:nth-child(2)").addClass("pie_on");
                $(".ability li:nth-child(3)").addClass("pie_on");
                $(".ability li:nth-child(4)").addClass("pie_on");
                $(".ability li:nth-child(5)").addClass("pie_on");
                $(".ability li:nth-child(6)").addClass("pie_on");
            }, 2000);
            //
            count1();
            count2();
            count3();
            count4();
            count5();
            count6();
            //
        } else if (point >= con3 && point < con4) {
            erase();
            $(".navi li").eq(2).children("span").stop().addClass("on");
            $(".navi li").eq(2).children("div").stop().addClass("col_on");

            //홈페이지1
            setTimeout(function () {
                //타이틀
                $(".page3 .p_titl").stop().addClass("up_act");
            }, 300);
            setTimeout(function () {
                //목업
                $(".page3 .mock").stop().addClass("go_up");
            }, 600);
            setTimeout(function () {
                //홈피제목
                $(".page3 .hm").stop().addClass("go_up");
            }, 750);
            setTimeout(function () {
                //내용설명
                $(".page3 .descript").stop().addClass("go_up");
            }, 850);
            setTimeout(function () {
                //버튼두개
                $(".page3 .more_butt").stop().addClass("go_up");
            }, 950);
            setTimeout(function () {
                //오른쪽 홈페이지 옆에서 들어오게
                $(".page3 .comein").stop().addClass("comes");
            }, 1100);
        } else if (point >= con4 && point < con5) {
            erase();
            $(".navi li").eq(3).children("span").stop().addClass("on");
            $(".navi li").eq(3).children("div").stop().addClass("col_on");

            //홈페이지2
            setTimeout(function () {
                //타이틀
                $(".page4 .p_titl").stop().addClass("up_act");
            }, 300);
            setTimeout(function () {
                //목업
                $(".page4 .mock").stop().addClass("go_up");
            }, 600);
            setTimeout(function () {
                //홈피제목
                $(".page4 .hm").stop().addClass("go_up");
            }, 750);
            setTimeout(function () {
                //내용설명
                $(".page4 .descript").stop().addClass("go_up");
            }, 850);
            setTimeout(function () {
                //버튼두개
                $(".page4 .more_butt").stop().addClass("go_up");
            }, 950);
            setTimeout(function () {
                //오른쪽 홈페이지 옆에서 들어오게
                $(".page4 .comein").stop().addClass("comes");
            }, 1100);
        } else if (point >= con5 && point < con6) {
            erase();
            $(".navi li").eq(4).children("span").stop().addClass("on");
            $(".navi li").eq(4).children("div").stop().addClass("col_on");

            //홈페이지3
            setTimeout(function () {
                //타이틀
                $(".page5 .p_titl").stop().addClass("up_act");
            }, 300);
            setTimeout(function () {
                //목업
                $(".page5 .mock").stop().addClass("go_up");
            }, 600);
            setTimeout(function () {
                //홈피제목
                $(".page5 .hm").stop().addClass("go_up");
            }, 750);
            setTimeout(function () {
                //내용설명
                $(".page5 .descript").stop().addClass("go_up");
            }, 850);
            setTimeout(function () {
                //버튼두개
                $(".page5 .more_butt").stop().addClass("go_up");
            }, 950);
            setTimeout(function () {
                //오른쪽 홈페이지 옆에서 들어오게
                $(".page5 .comein").stop().addClass("comes");
            }, 1100);
        } else if (point >= con6 && point < con7) {
            erase();
            $(".navi li").eq(5).children("span").stop().addClass("on");
            $(".navi li").eq(5).children("div").stop().addClass("col_on");
            //일러
            setTimeout(function () {
                //타이틀
                $(".page6 .p_titl").stop().addClass("up_act");
            }, 300);
            setTimeout(function () {
                clearInterval(stop);
                $(".slider_wrap").stop().addClass("b_moving");
            }, 600);
        } else if (point >= con7 && point < con8) {
            erase();
            $(".navi li").eq(6).children("span").stop().addClass("on");
            $(".navi li").eq(6).children("div").stop().addClass("col_on");

            //애니
            setTimeout(function () {
                //타이틀
                $(".page7 .p_titl").stop().addClass("up_act");
            }, 300);
            //옆으로 들어오는 동영상
            setTimeout(function () {
                $(".movies").addClass("moving");
            }, 500);
            setTimeout(function () {
                $(".p7_box").addClass("moving");
            }, 650);
            setTimeout(function () {
                $(".p7_txt").addClass("moving");
            }, 850);
        } else {
            erase();
            $(".navi li").eq(7).children("span").stop().addClass("on");
            $(".navi li").eq(7).children("div").stop().addClass("col_on");

            //연락처컨택
            setTimeout(function () {
                $(".page8 .p_titl").stop().addClass("up_act");
            }, 300);
            setTimeout(function () {
                $(".box_wrap1 .b_box").stop().addClass("popup");
            }, 800);
            setTimeout(function () {
                $(".box_wrap2 .b_box").stop().addClass("popup");
            }, 1000);
            setTimeout(function () {
                $(".box_wrap3 .b_box").stop().addClass("popup");
            }, 1200);
            setTimeout(function () {
                $(".txt_1").stop().addClass("txt_go");
            }, 1400);
            setTimeout(function () {
                $(".txt_2").stop().addClass("txt_go");
            }, 1600);
            setTimeout(function () {
                $(".txt_3").stop().addClass("txt_up");
            }, 2000);
        }
    });
    // 헤더 클릭시 해당 페이지 이동

    $(".menu li").on("click", function () {
        let i = $(this).index();
        if (i == 0) {
            let target = $("#container section").eq(1).offset().top;
            $("html, body").stop().animate({ scrollTop: target });
            nav();
        } else if (i == 1) {
            let target = $("#container section").eq(2).offset().top;
            $("html, body").stop().animate({ scrollTop: target });
            nav();
        } else {
            let target = $("#container section").eq(7).offset().top;
            $("html, body").stop().animate({ scrollTop: target });
            nav();
        }
    });
    //헤더에 호버하면 동그라미 나오게하기
    $(".menu li").on("mouseenter", function () {
        $(this)
            .children("a")
            .children(".txt_wrap")
            .children(".s_circl")
            .addClass("sc_on");
    });
    $(".menu li").on("mouseleave", function () {
        $(this)
            .children("a")
            .children(".txt_wrap")
            .children(".s_circl")
            .removeClass("sc_on");
    });

    // 내비 호버시 스케일변화
    $(".navi li").on("mouseenter", function () {
        let i = $(this).index();
        $(this).children("div").stop().addClass("mouse_on");
    });
    $(".navi li").on("mouseleave", function () {
        $(".navi li div").stop().removeClass("mouse_on");
    });
    // 내비 클릭시 페이지 이동
    $(".navi li").on("click", function () {
        let i = $(this).index();
        let target = $("#container section").eq(i).offset().top;
        $("html, body").stop().animate({ scrollTop: target });
        // 내비 함수 색바뀜
        $(".navi li span").stop().removeClass("on");
        $(".navi li div").stop().removeClass("col_on");
        $(".navi li").eq(i).children("div").stop().addClass("col_on");
    });

    // 비주얼 옆에서 오는 글씨 애니메이션
    $(".name")
        .stop()
        .delay(2000)
        .animate({ transform: "translateX(0px)", opacity: "1" }, 700);
    $(".wp")
        .stop()
        .delay(2100)
        .animate({ transform: "translateX(0px)", opacity: "1" }, 700);

    //비주얼 비디오 너비값 크게펼쳐짐
    $(".bg_col,.p_box video")
        .stop()
        .delay(1000)
        .animate({ width: "100%" }, 500);
    $(".b_sqr1")
        .stop()
        .delay(1300)
        .animate({ width: "100%" }, 500, function () {
            $(this).stop().animate({ top: "20px", left: "20px" }, 1000);
        });

    //홈페이지 링크가기 버튼 애니
    $(".more_butt li a").on("mouseenter", function () {
        $(this).children(".txt_circle").addClass("col_w");
        $(this).children(".l_butt").addClass("bold_on");
    });
    $(".more_butt li a").on("mouseleave", function () {
        $(this).children(".txt_circle").removeClass("col_w");
        $(this).children(".l_butt").removeClass("bold_on");
    });
    Splitting();
    //마우스 가져가면 홈페이지 분리되는 박스
    $(".comein").on("mouseenter", function () {
        $(this)
            .children(".box_sz")
            .stop()
            .animate({ top: "-85px", left: "15px" }, 500);
        $(this)
            .children(".p4_box")
            .stop()
            .animate({ top: "-85px", left: "15px" }, 500);
    });
    $(".comein").on("mouseleave", function () {
        $(this)
            .children(".box_sz")
            .stop()
            .animate({ top: "-100px", left: "0px" }, 500);
        $(this)
            .children(".p4_box")
            .stop()
            .animate({ top: "-100px", left: "0px" }, 500);
    });

    //일러스트 이미지 크게 보이는 팝업
    $(".small li").on("click", function () {
        clearInterval(timer);
        let p = $(this).index();
        $(".blu_bg").stop().fadeIn(), 100;
        $(".big > li img").hide();
        $(".big > li").eq(p).children("img").show();
    });
    $(".close").on("click", function () {
        $(".blu_bg").stop().fadeOut(), 100;
        start();
    });
    start();
    //자동슬라이드
    let total = $(".small li").length;
    let s = 0;
    function start() {
        timer = setInterval(function () {
            s++;
            if (s == total - 2) {
                $(".small")
                    .stop()
                    .animate({ "margin-left": -2340 }, function () {
                        $(".small").css({ "margin-left": 0 });
                    });
                s = 0;
            } else {
                $(".small")
                    .stop()
                    .animate({ "margin-left": -s * 390 });
            }
        }, 2500);
    }
    //일러스트 슬라이드 넥스트버튼
    $(".next").on("click", function () {
        clearInterval(timer);
        s++;
        if (s == total - 2) {
            $(".small")
                .stop()
                .animate({ "margin-left": -2340 }, function () {
                    $(".small").css({ "margin-left": 0 });
                });
            s = 0;
        } else {
            $(".small")
                .stop()
                .animate({ "margin-left": -s * 390 });
        }
        start();
    });
    //일러스트 슬라이드 이전버튼
    $(".prev").on("click", function () {
        clearInterval(timer);
        s--;
        if (s < 0) {
            $(".small").css({ "margin-left": -2340 });
            $(".small").stop().animate({ "margin-left": -1950 });
            s = total - 3;
        } else {
            $(".small")
                .stop()
                .animate({ "margin-left": -s * 390 });
        }
        start();
    });
    //슬라이스버튼 마우스 호버시
    $(".c_butt").on("mouseenter", function () {
        $(this).addClass("butt_on");
    });
    $(".c_butt").on("mouseleave", function () {
        $(this).removeClass("butt_on");
    });

    //에니메이션 아코디언메뉴
    $(".p7_txt li").on("click", function () {
        let t = $(this).index();
        $(".movies li").stop().fadeOut();
        $(".movies li").eq(t).stop().fadeIn();
        //비디오 재생 옵션
        $(".movies li").children("video").get(0).currentTime = 0;
        $(".movies li").children("video").get(0).pause();
        $(".movies li").children("video").get(1).currentTime = 0;
        $(".movies li").children("video").get(1).pause();
        $(".movies li").children("video").get(2).currentTime = 0;
        $(".movies li").children("video").get(2).pause();
        $(".movies li").children("video").get(3).currentTime = 0;
        $(".movies li").children("video").get(3).pause();
        $(".movies li").eq(t).children("video").get(0).play();
        //선택시 메뉴 색변화
        $(".p7_txt li h3").removeClass("select");
        $(this).children("h3").addClass("select");
        $(".p7_txt li").removeClass("bg_on");
        $(this).addClass("bg_on");
        $(".p7_txt li .circle ").removeClass("c_on");
        $(this).children(".circle").addClass("c_on");

        //슬라이드 다운 업
        $(".p7_txt li").removeClass("h_down");
        $(this).addClass("h_down");
    });
    // 패널 배경 위로 올라가는 애니메이션
    $(".panel li:first").stop().delay(300).animate({ height: "0px" }, 500);
    $(".panel li:nth-child(2)")
        .stop()
        .delay(400)
        .animate({ height: "0px" }, 500);
    $(".panel li:nth-child(3)")
        .stop()
        .delay(500)
        .animate({ height: "0px" }, 500);
    $(".panel li:nth-child(4)")
        .stop()
        .delay(600)
        .animate({ height: "0px" }, 500);
    $(".panel li:last").stop().delay(700).animate({ height: "0px" }, 500);
    $(".panel ").stop().delay(1200).animate({ height: "0px" }, 0);
});
