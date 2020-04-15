var banner1 = new Swiper('.banner1', {
	loop: true,
	autoplay: {
		delay: 3000,

	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});
banner1.el.onmouseover = function () { //鼠标放上暂停轮播
	banner1.autoplay.stop();
}
banner1.el.onmouseleave = function () {
	banner1.autoplay.start();
}

var banner3 = new Swiper('.banner3', {
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.pad',
		clickable: true,
	}
});


// floor 轮播
function floorSwiper(className) {
	this.init(className)
}
floorSwiper.prototype = {
	init(className) {
		this.box = document.querySelector(className)
		this.liArr = this.box.querySelectorAll(".inner li")
		this.bar = this.box.querySelector(".bar")
		this.olLis = this.bar.getElementsByTagName("li")
		this.ul = this.box.querySelector(".inner ul")

		this.Liwidth = this.box.offsetWidth
		this.left = this.box.querySelector(".left-btn")
		this.right = this.box.querySelector(".right-btn")
		this.timer = null;
		this.index = this.olIndex = 0
		this.createOl()
		
		var _this = this

		this.right.addEventListener('click', () => {
			this.rightFn();
		})
		this.left.addEventListener('click', () => {
			this.leftFn()
		})
		this.box.onmouseenter = function() {
			clearInterval(_this.timer)
		}

		for (var i = 0; i < this.olLis.length; i++) {
			this.olLis[i].index = i;
			this.olLis[i].onclick = function() {

				_this.index = _this.olIndex = this.index
				_this.tongbu(_this.index, _this.olIndex)
			}
		}
	},
	leftFn() {

		this.index--;

		this.olIndex--;
		if (this.olIndex < 0) {
			this.olIndex = 1
		}
		if (this.index < 0) {
			this.ul.style.left = -this.liArr.length * this.Liwidth + "px";
			this.index = 0
		}
		this.tongbu(this.index, this.olIndex)
	},
	createOl() {
		var flag = document.createDocumentFragment()
		for (var i = 0; i < this.liArr.length; i++) {
			var el = document.createElement("li")
			el.innerHTML = i
			flag.appendChild(el)
		}
		this.bar.appendChild(flag)
		this.olLis[0].classList.add("active")
		var newLi = this.box.querySelector("li").cloneNode(true)
		this.ul.appendChild(newLi)
	},
	rightFn() {
		this.index++;
		this.olIndex++
			if (this.olIndex > 1) {
				this.olIndex = 0
			}
		if (this.index > 1) {
			this.ul.style.left = 0;
			this.index = 1;
		}
		console.log(this)
		this.tongbu(this.index, this.olIndex)
	},
	tongbu(index, olIndex) {
		for (var i = 0; i < this.olLis.length; i++) this.olLis[i].classList.remove("active")
		this.olLis[olIndex].classList.add("active")
		this.animate(this.ul, -index * this.Liwidth)
	},
	animate(el, target) {
		clearInterval(el.timer)
		el.timer = setInterval(function() {
			var current = el.offsetLeft
			var step = (target - current) / 10

			step = step > 0 ? Math.ceil(step) : Math.floor(step)
			current += step
			if (Math.abs(target - current) < Math.abs(step)) {

				el.style.left = target + "px";

				clearInterval(el.timer)
			}

			el.style.left = current + "px"

		}, 15)
	}
}

var box1 = new floorSwiper(".box1");
var box2 = new floorSwiper(".box2");
var box3 = new floorSwiper(".box3");