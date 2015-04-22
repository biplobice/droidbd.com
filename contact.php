<?php

function recurseTree($var){
  $out = '<li>';
  foreach($var as $v){
    if(is_array($v)){
      $out .= '<ul>'.recurseTree($v).'</ul>';
    }else{
      $out .= $v;
    }
  }
  return $out.'</li>';
}

$txt = '<ul>'.recurseTree($_POST).'</ul>';


$to = "biplob.ice@gmail.com";
$subject = "DroidBd Contact Form";
//$txt = print_r($_POST);


// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers = "From: no-reply@droidbd.com" . "\r\n" ;
//$headers .= 'Cc: myboss@example.com' . "\r\n";


 if ( mail($to,$subject,$txt,$headers) ) {
	echo "Mail Sent!";
} else {
	echo "Mail Not Sent";
}

?>
