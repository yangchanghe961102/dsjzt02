<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">  

<head>  
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>用户</title>  
</head>
<body> 
<?php
echo "输出测试";

$name = addslashes($_POST["name"]);
$danwei = addslashes($_POST["danwei"]);



//------------------------------------数据库--------------------------------------------------
$host = '127.0.0.1:3306'; 
$db = 'changhe_yang'; 
$uid = 'root'; 
$pwd = 'sspku02!';

// Connect to the database server   
$link = mysql_connect($host, $uid, $pwd) or die("Could not connect");
mysql_query("SET NAMES 'utf8'"); 
mysql_select_db($db) or die("Could not select database");

//------------------------------------数据库--------------------------------------------------

mysql_query("LOCK TABLES user WRITE");

//如果存在，返回false；如果不存在，插入数据库，返回succeed 
$sql = "INSERT INTO user (name, danwei) VALUES ('"
		.$name."','"
		.$danwei."')";

if(mysql_query($sql)) 
{
	mysql_close($link);
	echo("success")
}
else
{
	echo("failed")
}

mysql_query("UNLOCK TABLES");

?>

</body>
</html>