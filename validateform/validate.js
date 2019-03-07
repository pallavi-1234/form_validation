$(document).ready(function() {
	// your js code goes here...
			var usernameMsg = $("<span></span>");
			$("#username").after(usernameMsg);

			var passwordMsg = $("<span></span>");
			$("#password").after(passwordMsg);

			var emailMsg = $("<span></span>");
			$("#email").after(emailMsg);

			$("span").hide();

			$("#username").focusin(function(){
                $("#username").next().attr("class","info");
				$("#username").next().text("Enter only alphabetical or numeric characters");
				$("#username").next().show();
            });

            $("#username").focusout(function () {
                var usernameValue = $("#username").val();
				if(usernameValue.length == 0)
				{
					$("#username").next().hide();
				}
                else
				{
					if(usernameValue.match(/^[a-zA-Z0-9]+$/))
					{
						$("#username").next().text("OK");
						$("#username").next().attr("class","ok");
					}
					else 
					{
						$("#username").next().text("ERROR");
						$("#username").next().attr("class","error");
					}
                }
               

            });

            $("#password").focusin(function(){
                $("#password").next().attr("class","info");
                $("#password").next().text("password field should be at least 8 characters long");
                $("#password").next().show();
            });

            $("#password").focusout(function () {
                var passwordValue = $("#password").val();
				if(passwordValue.length == 0)
				{
					$("#password").next().hide();
				}
				else
				{
					if($("#password").val().length>=8)
					{
						$("#password").next().text("OK");
						$("#password").next().attr("class","ok");
					}
					else 
					{
						$("#password").next().text("ERROR");
						$("#password").next().attr("class","error");
					}
				}

            });

            $("#email").focusin(function () {
                $("#email").next().attr("class","info");
                $("#email").next().text("Enter a valid email address (local-part@domain)");
                $("#email").next().show();
            });

            $("#email").focusout(function(){
                var emailValue = $("#email").val();
                if(emailValue.length == 0)
				{
					$("#email").next().hide();
				}
				else
				{
					if(emailValue.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{3})+$/))
										
					{
						$("#email").next().text("OK");
						$("#email").next().attr("class","ok");
					}
					else
					{
						$("#email").next().text("ERROR");
						$("#email").next().attr("class","error");
					}	
				}
				
				
            });
});