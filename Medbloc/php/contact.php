<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'audio-1915@mail.ru';
$norm = mail($to, $name, $email, $message);

if (!$norm){
echo "Не удалось провести отправку сообщения";
}
else{
echo "Сообщение отправлено";
}
?>



 
