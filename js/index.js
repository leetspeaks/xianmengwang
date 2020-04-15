var lis = document.querySelectorAll(".news-title li");
var contentMain = document.querySelectorAll(".news-content .news-contentMain");
lis.forEach(function(el,index){
    el.onmouseenter = function(){
        for(var i = 0; i < lis.length; i++){
            lis[i].classList.remove("cur");
            contentMain[i].classList.remove("hovers");
        }
        lis[index].classList.add("cur");
        contentMain[index].classList.add("hovers");
    }
});

var count = document.querySelector(".count");
	var spanArr = document.querySelectorAll(".count span");
	//获取差值函数
	function getTimes(){
		//获取当前的时间
		var times = new Date();
		// console.log(times);
		//获取秒杀结束的时间
		if(times.getHours() % 2 == 0){
			var times2 = new Date(times.getFullYear(),times.getMonth(),times.getDate(),times.getHours() + 24,0,0);
		}else{
			var times2 = new Date(times.getFullYear(),times.getMonth(),times.getDate(),times.getHours() + 1,0,0);
		}
		//获取时间差
		var timeAll = times2 - times;
		//获取时分秒
		var second = parseInt(timeAll/1000%60);
		var minute = parseInt(timeAll/1000/60%60);
		var hour = parseInt(timeAll/1000/60/60%24);
		
		//组成数组
		var arr = [hour,minute,second];
		
		//渲染dom
		for(var i = 0; i < spanArr.length; i+=3){
			for(var j = 0; j < arr.length; j++){
				spanArr[i+j].innerHTML = format(arr[j]);
			}
		}
		
	}
	function format(a){
		return a.toString().replace(/^(\d)$/,"0$1");
	}
	//调用函数
	getTimes();
	setInterval(getTimes,800);

	// 返回顶部
	$(function () {
		$(window).scroll(function () {
			if ($(window).scrollTop() > $(window).height()) {
				$(".tools").show();
			} else {
				$(".tools").hide();
			}
		});

		$(".tools ul .toTop").click(function(){
			// if($(this).index() == 4){
			   $(document.documentElement).animate({"scrollTop" : 0},1000);
			   $(document.body).animate({"scrollTop" : 0},1000);
			// }
		});
	});