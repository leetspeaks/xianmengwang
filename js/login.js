var username = document.getElementById("username");
var password = document.getElementById("password");

username.onblur = function(){
    if (/^[a-zA-Z][a-zA-Z0-9]{4,15}$/.test(this.value)) {
        this.nextElementSibling.innerHTML = "格式正确";
    }
    else {
        this.nextElementSibling.innerHTML = "请输入正确格式";
    }
}

password.onblur = function () {
    if (/^[a-zA-Z]\w{5,17}$/.test(this.value)) {
        this.nextElementSibling.innerHTML = "格式正确";
    }
    else {
        this.nextElementSibling.innerHTML = "请输入正确格式";
    }
}