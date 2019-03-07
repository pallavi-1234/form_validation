<?
	session_start();
?>

<?
	
	function logoutUser(){
		unset($_SESSION['name']);
		unset($_SESSION['email']);
		session_destroy();
		header("location: login.html");
	}
	
	logoutUser();
?>