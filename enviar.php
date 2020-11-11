<?php
header("Content-type: text/html;charset=\"utf-8\"");
$nombre = htmlspecialchars($_POST['nombre'], ENT_QUOTES, 'UTF-8');
$empresa = htmlspecialchars($_POST['empresa'], ENT_QUOTES, 'UTF-8');
$mail = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
$telefono = htmlspecialchars($_POST['telefono'], ENT_QUOTES, 'UTF-8');
$productos = htmlspecialchars($_POST['producto'], ENT_QUOTES, 'UTF-8');
$texto = htmlspecialchars($_POST['mensaje'], ENT_QUOTES, 'UTF-8');

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Su empresa es: " . $empresa . " \r\n";
$mensaje .= "Productos Deseados: " . $productos . " \r\n";
$mensaje .= "Teléfono: " . $telefono . " \r\n";
$mensaje .= "Mensaje: " . $texto . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = '
smcvenezuelaventas@gmail.com';
$asunto = 'Mensaje de SMCdeVenezuela.com';

if (mail($para, $asunto, utf8_decode($mensaje), $header))
echo "<script type='text/javascript'>alert('Tu mensaje ha sido enviado exitosamente');</script>";
echo "<script type='text/javascript'>window.location.href='index.html';</script>";
?>