(function($){
    var tabMenu = $("#card__text");

    tabMenu.find(".review > .one1").hide();
    tabMenu.find(".best > .one.active").show();

    $(".one1").hide();
    $(".best > .one.active").show();

    $(document).tabList(function(){
        $("card__text > .review").click(function(){
            $("#card__text > .best").removeClass("active")
            $("#card__text > .review").addClass("active")
            $("#card__text > one").hide();
            $("#card__text > one1").target.show();
        })
    })
    tabList();

    // function tabList(e){
    //     e.preventDefault();
    //     var target = $(this);   //사용자가 클릭한 메뉴를 target이라고 설정

    //     $("#card__text > .best").removeClass("active")
    //     $("#card__text > .review").addClass("active")
    //     $("#card__text > one").hide();
    //     $("#card__text > one1").target.show();
    // }
    // tabMenu.find("#card__text > .review").click(tabList);//클릭하면 tabList 함수를 실행해줘라

    
 })(jQuery);
 
 
 