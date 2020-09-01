<?php

// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../config/Database.php';
include_once '../models/Users.php';

// Instantiate DB & connection
$database = new Database();
$db_config = $database->connect();

// Instantiate a User object
$new_user = new Users($db_config);
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $new_user->fullname = $_POST["fullname"];
  $new_user->username = $_POST["username"];
  $new_user->password = md5($_POST["password"]);
  $new_user->aboutme = $_POST["aboutme"];
}

// Create post
if($new_user->createUser()) {
  echo json_encode(
    array('message' => 'User Created')
  );
} else {
  echo json_encode(
    array('message' => 'User Not Created')
  );
}
