<?php
  class Users {
    // Users table configuration
    private $conn;
    private $table = 'users';

    // Users table parameters
    public $id;
    public $fullname;
    public $username;
    public $password;
    public $aboutme;

    // Class constructor
    public function __construct($db) {
      $this->conn = $db;
    }

    // Create new users
    public function createUser() {
      // Sanitize user data
      $this->fullname = htmlspecialchars(strip_tags($this->fullname));
      $this->username = htmlspecialchars(strip_tags($this->username));
      $this->password = htmlspecialchars(strip_tags($this->password));
      $this->aboutme = htmlspecialchars(strip_tags($this->aboutme));

      $get_query = 'SELECT * FROM ' . $this->table . ' WHERE username = :username';

      $get_stmt = $this->conn->prepare($get_query);
      $get_stmt->bindValue(':username', $this->username);
      $get_stmt->execute();

      if ($get_stmt->rowCount() > 0) {
        return false;
      } else {
        // Query to create a new user
        $post_query = 'INSERT INTO ' . $this->table . ' SET fullname = :fullname, username = :username, password = :password, aboutme = :aboutme';

        // prepare statement
        $stmt = $this->conn->prepare($post_query);

        // Bind data
        $stmt->bindParam(':fullname', $this->fullname);
        $stmt->bindParam(':username', $this->username);
        $stmt->bindParam(':password', $this->password);
        $stmt->bindParam(':aboutme', $this->aboutme);

        // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
      }
    }
  }
