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
$sql = "insert into user (username,password) values(?,?)";

if($stmt -> prepare($sql)){
    $stmt -> bind_param("ss",$user,$pwd);
    if($stmt -> execute() === true){
        echo 1;
        exit;
    }else{
        echo 0;
        exit;
    }
    $stmt -> close();
}

$con -> close();

?>