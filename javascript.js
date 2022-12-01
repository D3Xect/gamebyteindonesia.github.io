//*=============================================     MENU  ============================
var buttonMenu = $(".button-menu");
var menu = $("nav .menu ul");

function clickMenu(){
    buttonMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    });

}

$(document).ready(function() {
var width = $(window).width();
if (width < 990) {
    clickMenu();
}
})

//*============================================= CHECK LEBAR ==============================
$(window).resize(function(){
    var width = $(window).width();
    if(width > 989) {
        menu.css("display" , "block"); 
        //display:block  
    }else{
        menu.css("display" , "none");
    }
    clickMenu();
});

//*=============================================  EFEK SCROLL  ==========================================

$(document).ready(function() {
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").addClass("gamebyte");
            $("nav img.gamebyteblack").show();
            $("nav img.gamebyte").hide();
        }else{
            $("nav").removeClass("gamebyte");
            $("nav img.gamebyteblack").hide();
            $("nav img.gamebyte").show();
        }
    });
});
