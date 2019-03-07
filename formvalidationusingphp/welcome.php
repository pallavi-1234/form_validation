<?php

	session_start();
	
	if(!isset($_SESSION['name']) || trim($_SESSION['name']) == "" || !isset($_SESSION['email']) || trim($_SESSION['email']) == ""){
		header("location: login.html");
		exit();
	}
	
?>
<html>
<head>
</head>
<body>
	<h2>Welcome, <? echo $_SESSION['name']; ?></h2>
	<a href="logout.php">Logout</a>
</body>
</html>