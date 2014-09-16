<?
require_once('db.php'); 
if($_GET['what'])
{
	header('Content-type: text/xml');
	echo "<?xml version='1.0' ?>\n\n";
	if($_GET['what'] == 'posts')
	{
	echo '<posts>\n\n';
				$sql = 'SELECT * FROM posts ORDER BY i DESC;';
				$result = mysql_query($sql);		
				while( $array = mysql_fetch_array($result) )
				{
				$i = $array['i'];
				$date = $array['date'];
				$title = $array['title'];
				$message =$array['message'];
				$user = $array['user'];
				$type = $array['type'];
				 echo "<post>\n";
				 echo "<id>".$i."</id>\n";
				 echo "<date>".$date."</date>\n";
				 echo "<title>".$title."</title>\n";
				 echo "<message>".$message."</message>\n";
				 echo "<user>".getuser($user)."</user>\n";
				 echo "<userid>".$user."</userid>\n";
				 echo "<type>".$type."</type>\n";
				 echo "</post>\n\n";
				}
	echo "</posts>\n\n";
	}elseif($_GET['what'] == 'types')
	{
	echo "<types> \n\n";
				$sql = "SELECT * FROM type;";
				$result = mysql_query($sql);		
				while( $array = mysql_fetch_array($result) )
				{
				$i = $array["i"];
				$type = $array["type"];
				 echo "<type>\n";
				 echo "<id>".$i."</id>\n";
				 echo "<name>".$type."</name>\n";			 
				 echo "</type>\n\n";
				}
	echo "</types> \n\n";
	}
	else 
	{echo "<retard /> \n\n";
	}
}elseif($_GET['user'])
{
getuser($_GET['user']);
}
		function getuser($i)
		{
				$sql1 = "SELECT * FROM user WHERE i='".$i."';";
				$result1 = mysql_query($sql1);		
				while( $array1 = mysql_fetch_array($result1) )
				{
				return $array1["name"];
				}
		}?>
 