<?php

$login = $_POST['login'];
$pass = $_POST['password'];
$nombre = $_POST['firstname'];
$apellido = $_POST['lastname'];
$fecha = $_POST['fecha'];
$invitacion = $_POST['link'];
$correo = $_POST['email'];
$horario = $_POST['horario'];

// echo ($login.$pass.$nombre.$apellido.$fecha.$invitacion)

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'mail.tex.cr';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'admin.cne.planificacion@tex.cr';                     // SMTP username
    $mail->Password   = 'planificacionConsulta';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;
    
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );// TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('admin.cne.planificacion@tex.cr');
    $mail->addAddress($correo);     // Add a recipient
    //$mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('admin.cne.planificacion@tex.cr');
    //$mail->addBCC('bcc@example.com');

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content

    $contenido = '
    <div id="login" style="color: #000; 
                                    text-align: center; 
                                    font-family: Arial,
                                    Helvetica, sans-serif;
                                    padding-bottom: 2rem;">
        <p>Estimado '.$nombre.' '.$apellido.'</p>
        <p>El CNE se complace en invitarlo al evento Actualizacion del Plan Nacional de Gestion del Riesgo
            2021-2025, con modalidad virtual y disponible a traves de PC y dispositivos moviles.
        </p>
        <p>El evento sera el dia <strong>'.$fecha.'</strong> con horario de <strong>'.$horario.'</strong></p> <br><br>

        <p>Por favor guarde sus datos de ingreso:</p>

        <li style="list-style: none;">Usuario:<strong> '.$login.'</strong></li>
        <li style="list-style: none;">Contrasena: <strong>'.$pass.'</strong></li><br>
        <li style="list-style: none;">Codigo del evento: <strong>CNE-VIRTUAL</strong> (en caso de necesitarlo.)</li>


        <br><br>
        <p><strong>Requisitos para participar:</strong>

            <li style="list-style: none;">Tener instalado Google Chrome.</li><br>
            <li style="list-style: none;">En caso que lo necesite solicitar al departamento de TI los permisos para
                instalar la aplicacion.</li><br>
            <li style="list-style: none;">Usar audifonos con microfonos.</li></br>


        </p> <br><br>

        <p>Le agradecemos seguir el siguiente link para recibir las instrucciones de ingreso.
            (<strong>Para
                los usuarios que no usan
                dispositivos moviles
                indispensable hacerlo con Google
                Chrome.</strong>) <br>
            <br> <a href="http://cne-virtual.tex.cr/InstructivoCNE/tutorial.php"
                target="blank">http://cne-virtual.tex.cr/InstructivoCNE/tutorial.php</a></p> <br>

        <p>Tambien queremos invitarle a una sesion de entrenamiento para el uso de la aplicacion a traves de <a
                href="'.$invitacion.'" target="blank"> Microsoft Teams</a> el mismo dia del evento una hora antes de
            comenzar. <br><a href="'.$invitacion.'" target="blank"> '.$invitacion.'</a>
        </p>

        <br><br>
        <p>Esperamos nos pueda acompanar a vivir esta experiencia.</p>

    </div>
    ';

    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Invitacion Evento CNE';
    $mail->Body    = $contenido;
    $mail->AltBody = 'Si este mensaje le aparece es porque su dispositivo no pudo cargar el mensaje. Esta es una invitacion del CNE a celebrar una reunion con modalidad virtual. Responda este mensaje para pedir su informacion de usuario y siga este link para recibir el instructivo. http://cne-virtual.tex.cr/InstructivoCNE/tutorial.php';

    $mail->send();
    echo ('Mensaje enviado con éxito.');
} catch (Exception $e) {
    echo ("Mensaje no pudo ser enviado. Mailer Error: {$mail->ErrorInfo}");
}

?>