<html>
<head>
	<title>Response Submitted</title>
</head>
<body>
<div style="text-align:center; color:blue;"><h1>I'll Get Your Response!</h1></br><h2>i'll Contact You as soon as possible</h2>
</div>	
<?php
$myfile = fopen("files/msgBox.txt", "a") or die("Unable to open file!");
$txt = $_POST["name"] ;
fwrite($myfile, 'Name: '.$txt."\n");
$txt = $_POST["phone"] ;
fwrite($myfile, 'Phone: '.$txt."\n");
$txt = $_POST["email"];
fwrite($myfile,"Email: ".$txt."\n");
$txt = $_POST["msg"];
fwrite($myfile, "Message: ".$txt."\n\n\n");
fclose($myfile);
?> 
</body>



</html>
