(function($){

   //$(".submenu").css("display","block");

 //첫번째 유형(자기 자신의 밑에있는 애만 선택)
//    $(".nav > ul > li").mouseover(function(){
//        $(this).find(".submenu").css("display","block");
//    })
//    $(".nav > ul > li").mouseout(function(){
//         $(this).find(".submenu").css("display","none");
//     })

    //두번째 유형 (메뉴가 다 나타남 foreach가 자동으로 들어있음)
    // $(".nav > ul > li").mouseover(function(){
    //     $(".nav > ul > li").find(".submenu").css("display","block");
    // })
    // $(".nav > ul > li").mouseout(function(){
    //      $(".nav > ul > li").find(".submenu").css("display","none");
    //  })

    //슬라이드
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().show(500)
    // })
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().hide(500)
    // })

    
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    })
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    })

    // $(".nav > ul > li").mouseover(function(){
    //     $(".nav > ul > li").find(".submenu").stop().slideDown(500);
    // })
    // $(".nav > ul > li").mouseout(function(){
    //     $(".nav > ul > li").find(".submenu").stop().slideUp(500);
    // })

    // 탭메뉴
    var tabMenu = $(".notice");

    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("ul > li.active > ul").show();
    // document.querySelector("ul > li > ul").getElementsByClassName.display = "none" (js)

    function tabList(e){
        e.preventDefault();
        var target = $(this);   //사용자가 클릭한 메뉴를 target이라고 설정
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();    //parent 부모요소를 선택해서 class active를 추가하고 siblings로 형제li를 찾아서 active 삭제
    }

    tabMenu.find("ul > li > a").click(tabList);//클릭하면 tabList 함수를 실행해줘라

})(jQuery);


