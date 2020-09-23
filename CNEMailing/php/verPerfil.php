<?php
include 'config.php';

$id = $_POST['id'];

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://japi.theeducationdistrict.com/japi-ted/js/api-user-profile",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS =>'{"auth-key": "'.$authKey.'", "language": "'.$language.'", "api-user-profile": {"id": "'.$id.'"}}',
  CURLOPT_HTTPHEADER => array(
    "Content-Type: text/plain"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

?>