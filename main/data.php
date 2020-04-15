<?php
header("Content-type:text/html;charset=utf-8");

$severname = "localhost";
$username = "root";
$password = "root";

$mysqli = new mysqli($severname,$username,$password);
if($mysqli -> connect_error){
    die("连接失败".$mysqli -> connect_error);
}

$sql = "create database login";

if($mysqli -> query($sql) === TRUE){
    echo("创建成功");
}else{
    echo($mysqli -> error);
}

$mysqli -> close();

?>