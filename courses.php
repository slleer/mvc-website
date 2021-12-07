<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $result;

  $servername = "localhost";
  $username = "newuser";
  $password = "newpass";
  try {
    $conn = new PDO("mysql:host=$servername;dbname=hw4", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM courses");
    $stmt->execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $result = $stmt->fetchALL();
    echo json_encode($result);
  } catch(PDOException $e) {
    echo "0" . " Connection failed: " . $e->getMessage();

  }
} //end if post


?>
