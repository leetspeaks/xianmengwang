$(function () {
    // 设置全选状态
    $(".checkAll").change(function () {
        $(".j-checkbox").prop("checked", $(this).prop("checked"));
    });
    //    判断是否选中状态
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkAll").prop("checked", true);
        } else {
            $(".checkAll").prop("checked", false);
        }
    });
    //    增加数量
    $(".add").click(function () {
        var i = $(this).siblings(".txt").val();
        //    console.log(i);
        i++;
        $(this).siblings(".txt").val(i);

        var p = $(this).parents(".p-num").siblings(".p-price").html();

        p = p.substr(1);
        // console.log(p)
        $(this).parents(".p-num").siblings(".x-price").html("￥" + (p * i).toFixed(2));
        getNum();
    });
    //    减少数量
    $(".reduce").click(function () {
        var i = $(this).siblings(".txt").val();
        i--;
        if (i < 1) {
            return false;
        }
        $(this).siblings(".txt").val(i);
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".x-price").html("￥" + (p * i).toFixed(2));
        getNum();
    })
    //    当数量改变时，小计也改变
    $(".txt").change(function () {
        var i = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".x-price").html("￥" + (p * i).toFixed(2));
        getNum();
    });
    //    删除
    $(".del a").click(function () {
        $(this).parents(".car-item").remove();
        getNum();
    });

    $(".operation a").click(function () {
        $(".j-checkbox:checked").parents(".car-item").remove();
        getNum();
    });

    //    调用函数
    getNum();
    //    封装已选和总价函数
    function getNum() {
        var count = 0;
        var money = 0;
        $(".txt").each(function (i, ele) {
            count += parseInt($(ele).val());

        });
        $(".amout-sum em").text(count);
        //console.log(count);
        $(".x-price").each(function (i, ele) {
            money += parseFloat($(ele).text().substr(1));
            //console.log(money);
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }

    // 轮播
    var liWidth = $(".buy-imgs ul li").first().innerWidth();
    var num = 1;
    
    $(".c-btns a").click(function(){
        if($(this).index() == 0){
            $(".buy-imgs ul").css({"marginLeft" : -num * liWidth});
                $(".buy-imgs ul li").slice(-num).prependTo($(".buy-imgs ul"));
                $(".buy-imgs ul").stop().animate({"marginLeft" : 0},1000);
        }else{
            $(".buy-imgs ul").stop().animate({"marginLeft" : num * -liWidth},1000,function(){
                $(".buy-imgs ul li").slice(0,num).appendTo($(".buy-imgs ul"));
                $(".buy-imgs ul").css({"marginLeft" : 0});
            });
        }
    });
});

