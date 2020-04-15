$(function(){	
    // 导航左侧栏js效果 start
    $(".pull-down-list li").hover(function(){
        $(".list-con").stop().fadeIn();
    },function(){
        
    })
    $(".pull-down-list li").mouseleave(function(){
        
        $(".list-con").fadeOut();
    })
    // 导航左侧栏js效果  end  
})