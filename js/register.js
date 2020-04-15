var username = document.getElementById("username");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

var a1 = a2 = a3 = false;

username.onblur = function () {
    if (/^[a-zA-Z][a-zA-Z0-9]{4,15}$/.test(this.value)) {
        this.nextElementSibling.innerHTML = "格式正确";
        a1 = true;
    }
    else {
        this.nextElementSibling.innerHTML = "请输入正确格式";
        a1 = false;
    }
}

password.onblur = function () {
    if (/^[a-zA-Z]\w{5,17}$/.test(this.value)) {
        this.nextElementSibling.innerHTML = "格式正确";
        a2 = true;
    }
    else {
        this.nextElementSibling.innerHTML = "请输入正确格式";
        a2 = false;
    }
}

password2.onblur = function () {
    if (/^[a-zA-Z]\w{5,17}$/.test(this.value)) {
        this.nextElementSibling.innerHTML = "格式正确";
        if (this.value == password.value) {
            this.nextElementSibling.innerHTML = "输入正确";
            a3 = true;
        }
        else {
            this.nextElementSibling.innerHTML = "请确认密码是否一致";
            a3 = false;
        }
    }
    else {
        this.nextElementSibling.innerHTML = "请输入正确格式";
        a3 = false;
    }
}
function fn() {
    if (a1 && a2 && a3) {
        var user = username.value;
        var pass = password.value;
        $.ajax({
            type: "POST",
            url: "register.php",
            data: `username=${user}&password=${pass}`,
            success(msg) {
                if(msg == 1){
                    alert("注册成功");
                    location.href = "login.html";
                }else if(msg == 0){
                    alert("该用户已注册");
                    location.href = "register.html";
                }
            },
            error(XMLHttpRequest,textStatus) {
                console.error(textStatus);
            }
        });
    }else{
        alert("输入错误");
    }
}
