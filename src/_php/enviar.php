<?php
require("/home2/fisiom61/public_html/_php/PHPMailer-master/src/PHPMailer.php");
require("/home2/fisiom61/public_html/_php/PHPMailer-master/src/SMTP.php");


 $mail = new PHPMailer\PHPMailer\PHPMailer();
 $mail->IsSMTP(); // enable SMTP
 //$mail->SMTPDebug = 1; //debugging: 1 = errors and messages, 2 = messages only
 $mail->SMTPAuth = true; // authentication enabled
 $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
 $mail->Host = "smtp.titan.email";
 $mail->Port = 465; // or 587
 $mail->IsHTML(true);
 $mail->Username = "site@fisiomip.com.br";
 $mail->Password = "Sipuya0912!";
 $mail->SetFrom("site@fisiomip.com.br");
 $mail->Subject = "Assunto da mensagem";
 // corpo do email
 $body = "Mensagem Formulario Site<br><br>
 Nome: ". $_POST['nome'] ." <br>
 Telefone: ". $_POST['telefone'] ." <br>
 E-mail: ". $_POST['email'] ." <br>
 Mensagem:<br> ". $_POST['mensagem'];
 // envio do corpo
 $mail->Body =  $body;

 $mail->AddAddress("contato@fisiomip.com.br");
 
    if($mail->Send()) {
       header("Location: ".$_SERVER['HTTP_REFERER']."");
    }    
?>