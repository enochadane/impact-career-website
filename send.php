<?php
$firstName = $_REQUEST['firstName'];
$lastName = $_REQUEST['lastName']
$Phone = $_REQUEST['Phone'];
$email = $_REQUEST['email'];

$to = "kamalnath1099@gmail.com";
$subject = "impactCareer- Enquiry Form";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
 <table>
  <tr>
    <td>Name : </td><td>$firstName</td><td>$lastName</td>
  </tr>

  <tr>
    <td>Email : </td><td>$email</td>
  </tr>
  <tr>
    <td>Contact no : </td><td>$Phone</td>
  </tr>  
  
 </table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= "From: ".$email. "\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";



if(mail($to,$subject,$message,$headers)) {
  //echo "Success";
  echo json_encode(array('status' => 'Success'));
} else {  
  echo "Fail";
}

?>