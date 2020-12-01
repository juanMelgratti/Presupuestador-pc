<?php
if(isset( $_POST['name']))
$nombre = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$mensaje = $_POST['message'];
if(isset( $_POST['subject']))
$asunto = $_POST['subject'];

$content="From: $nombre \n Email: $email \n Message: $mensaje";
$recipient = "juanmelgratti@mi.unc.edu.ar";
$mailheader = "From: $email \r\n";
mail($recipient, $asunto, $content, $mailheader) or die("Error!");

header('Location: enviado.php');
?>