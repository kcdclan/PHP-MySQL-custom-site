<?php
# FileName='Connection_php_mysql.htm'
# Type='MYSQL'
# HTTP='true'
$hostname_gv = 'localhost';
$prefix = 'gamersvi_';
$database_gv = $prefix + 'mcbs';
$username_gv = $prefix + 'admin';
$password_gv = '';
$gv = mysql_connect($hostname_gv, $username_gv, $password_gv) or trigger_error(mysql_error(),E_USER_ERROR); 
$db = mysql_select_db($database_gv,$gv);
?>