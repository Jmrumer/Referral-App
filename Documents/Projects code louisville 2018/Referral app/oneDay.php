<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if(isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "jmrumer@gmail.com"; // one day hub training email would go here
    $email_subject = "One Day Referral";


    $email_message = "Form details below.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }


    $email_message .= "First Name: ".clean_string($firstname)."\n";
    $email_message .= "Last Name: ".clean_string($lastname)."\n";
    $email_message .= "Gems: ".clean_string($gems)."\n";
    $email_message .= "Full Time Supervisor's Name: ".clean_string($ftname)."\n";
    $email_message .= "Referral's First Name: ".clean_string($ref_name)."\n";
    $email_message .= "Referral's Last Name: ".clean_string($ref_last_name)."\n";
    $email_message .= "Referral's Email: ".clean_string($ref_email)."\n";



// create email headers
$headers = 'From: '.$firstname."\r\n".
'Reply-To: '.$ref_email."\r\n" .
'X-Mailer: PHP/' . phpversion();
mail($email_to, $email_subject, $email_message, $headers);
?>

<!-- include your own success html here -->

<h1>Thank you for your referral. We will be sending a confirmation email to your referral very soon.</h1>

<?php

}
?>
