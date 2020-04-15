<?php
header("Content-type:text/html;charset=utf-8");

$severname = "localhost";
$username = "root";
$password = "root";
$dbname = "login";

$con = new mysqli($severname,$username,$password,$dbname);

if($con -> connect_error){
    die("连接失败".$con -> connect_error);
}

$sql = "CREATE TABLE user(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username varchar(30) not null UNIQUE,
    password varchar(30) not null
)";
if($con -> query($sql) === TRUE){
    echo "数据表创建成功";
}else{
    echo($con -> error);
}

$con -> close();

?>