<?php

include 'config.php';
// Recibimos variables de JavaScript JQuery POST.

$login = $_POST['login'];
$pass = $_POST['password'];
$nombre = $_POST['firstname'];
$apellido = $_POST['lastname'];
$correo = $_POST['email'];
$sexo = $_POST['gender'];
$lema = $_POST['motto'];


// Enviamos Peticion Metodo cURL de php.

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://japi.theeducationdistrict.com/japi-ted/js/api-user-add",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS =>'{"auth-key": "'.$authKey.'", "language": "'.$language.'", "api-user-add": {"login": "'.$login.'", "password": "'.$pass.'", "firstname": "'.$nombre.'", "lastname": "'.$apellido.'", "email": "'.$correo.'", "gender": "'.$sexo.'", "birthday": "-1", "country": "53", "motto": "'.$lema.'", "welcome-email": "false", "permission-groups": [1,2] } }',
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);

// $objetophp = json_decode ($response);
// $jsonfinal = json_encode ($objetophp);
echo $response;

?>