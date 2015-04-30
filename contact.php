<?php

function recurseTree($var) {
	$out = '';
	foreach ($var as $key => $value) {
		if (is_array($value)) {
			$out .= "<li>".$key.": <ul>". recurseTree($value) ."</ul></li>";
		} else {
			$out .= "<li>".$key. ": " . $value . "</li>";
		}
	}
	return $out;
}

$body = '<ul>'.recurseTree($_POST).'</ul>';

$to = "biplob.ice@gmail.com";
$subject = "DroidBd Contact Form";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>" . $body .
"</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <contact@droidbd.com>' . "\r\n";
$headers .= 'Bcc: biplob.ice@gmail.com' . "\r\n";

;
 if ( mail($to,$subject,$message,$headers) ) {
	echo "Mail Sent!";
} else {
	echo "Mail Not Sent";
}

?>