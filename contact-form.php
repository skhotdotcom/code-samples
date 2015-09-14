<?php

//include the recaptcha lib file
require_once('../recaptcha/recaptchalib.php');

//define the private key
$privatekey = "lmnop";

//check CAPTCHA field for validity and set response object
$resp = recaptcha_check_answer ($privatekey, $_SERVER["REMOTE_ADDR"], $_POST["recaptcha_challenge_field"], $_POST["recaptcha_response_field"]);

if (!$resp->is_valid) {
// What happens when the CAPTCHA was entered incorrectly
die ("The reCAPTCHA wasn't entered correctly. Go back and try it again.");
} else {	
	//what happens if CAPTCHA is correct – send email
	$wmEmail = 'someone@something.com';
	include 'config.php';
	error_reporting (E_ALL ^ E_NOTICE);
	$post = (!empty($_POST)) ? true : false;
	if($post)
	{
		include 'functions.php';
		$name = stripslashes($_POST['name']);
		$email = trim($_POST['email']);
		$subject = stripslashes($_POST['subject']);
		$message = 'From votethomashawkins.com:<br/>' . stripslashes($_POST['message']);
		
//set error to empty
		$error = '';
		
		// Check name

		if(!$name)
		{
			$error .= 'Please enter your name.<br />';
		}
		
		// Check email
		
		if(!$email)
		{
			$error .= 'Please enter an e-mail address.<br />';
		}
		
		if($email && !ValidateEmail($email))
		{
			$error .= 'Please enter a valid e-mail address.<br />';
		}
		
		// Check message (length)
		
		if(!$message || strlen($message) < 15)
		{
			$error .= "Please enter your message. It should have at least 15 characters.<br />";
		}
		
		
		if(!$error)
		{
			$mail = mail($wmEmail, $subject, $message,
			     "From: ".$name." <".$email.">\r\n"
			    ."Reply-To: ".$email."\r\n"
			    ."X-Mailer: PHP/" . phpversion());
			
			
			if($mail)
			{
			echo 'OK';
			}
		
		}
		else
		{
			echo '<div class="notification_error">'.$error.'</div>';
		}
	
	}

}
?>
