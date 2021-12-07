<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $result;
  $name = test_input($_POST["cname"]);
  $num = test_input($_POST["cnum"]);
  $desc = test_input($_POST["cdesc"]);

  $servername = "localhost";
  $username = "newuser";
  $password = "newpass";
  try {
    $conn = new PDO("mysql:host=$servername;dbname=hw4", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $data = array($name, $num, $desc);
    $stmt = $conn->prepare("INSERT INTO courses (name, num, description) VALUES(?,?,?)");
    $stmt->execute($data);
    echo 1;
    echo json_encode($result);
  } catch(PDOException $e) {
    echo "0" . " Connection failed: " . $e->getMessage();

  }
} //end if post
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

?>
