<?php
 class Database {
   // Parameters for the Database
   private $host = 'localhost';
   private $db_name = 'phpbackend';
   private $db_username = 'root';
   private $db_password = '';
   private $conn;

   // Database connection mkethod
   public function connect() {
     $this->conn = null;

     try {
       $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->db_username, $this->db_password);
       $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     } catch(PDOException $error) {
       echo 'Connection Error: ' . $error->getMessage();
     }

     return $this->conn;
   }
 }
?>
