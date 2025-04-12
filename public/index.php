<?php
header('Content-Type: application/json');

$server = "49.43.227.12,1433"; // your laptop's public IP
$database = "TestDB";
$username = "dubai";
$password = "@dubai350";

try {
    $conn = new PDO("sqlsrv:Server=$server;Database=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->query("SELECT * FROM users");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
