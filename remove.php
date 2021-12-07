<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $result;
  $id = $_POST["id"];

  $servername = "localhost";
  $username = "newuser";
  $password = "newpass";
  try {
    $conn = new PDO("mysql:host=$servername;dbname=hw4", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $data = array($id);
    $stmt = $conn->prepare("DELETE FROM courses WHERE id = ?");
    $stmt->execute($data);
    echo 1;
    echo json_encode($result);
  } catch(PDOException $e) {
    echo "0" . " Connection failed: " . $e->getMessage();

  }
} //end if post
?>
