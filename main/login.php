<?php
header("Content-type:text/html;charset=utf-8");

$severname = "localhost";
$username = "root";
$password = "root";
$dbname = "login";

$user = $_POST["username"];
$pwd = $_POST["password"];

$con = new mysqli($severname,$username,$password,$dbname);

if($con -> connect_error){
    die("连接失败".$con -> connect_error);
}

$stmt = $con -> stmt_init();
$sql = "select password from user where username=?";

if($stmt -> prepare($sql)){
    $stmt -> bind_param("s",$user);
    $stmt -> execute();
    $stmt -> bind_result($pass);
    $stmt -> fetch();
    if($pass){
        if($pass == $pwd){
            echo "<script>alert('登录成功'); location='index.html'</script>";
        }else{
            echo "<script>alert('登录失败'); location='login.html'</script>";
        }
    }else{
        echo "<script>alert('该用户未注册'); location='register.html'</script>";
    }
    $stmt -> close();
}

$con -> close();

?>