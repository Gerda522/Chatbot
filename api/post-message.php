<?php
session_start();

$userResponse = [];
$userInput = $_POST['user_input'];

$userResponse["role"] = "user";
$userResponse["message"] = $userInput; // User input

$botResponse = [];
$botResponse["role"] = "bot";

if (strtolower($userInput) === "hello") {
    $botResponse["message"] = "Hello, what can I help you with?";
} else {
    // You can add more conditions here for different user inputs
    if (strtolower($userInput) === "help") {
    $botResponse["message"] = "I'm here to assist you!";
    } else {
      $botResponse["message"] = "I don't understand. Please ask another question.";
 }
}

$_SESSION["chat-history"][] = $userResponse;
$_SESSION["chat-history"][] = $botResponse;

$response = [];
$response["user"] = $userResponse;
$response["bot"] = $botResponse;

header("Content-Type: application/json");
echo json_encode($response);
?>
