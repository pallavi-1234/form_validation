<?php

	session_start();
	
?>

<?

	function validateFields(){
		$name = $_GET['name'];
		$email = $_GET['email'];
		$password = $_GET['password'];
		
		if(empty($name)){
			header("location: login.html");
			exit();
		}
		
		if(empty($password) || strlen($password) < 6){
			header("location: login.html");
			exit();
		}
		
		if((!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))){
			header("location: login.html");
			exit();
		}
		
		$_SESSION['name'] = $name;
		$_SESSION['email'] = $email;
  
		header("location: welcome.php");
	}
	
	validateFields();
	
?>