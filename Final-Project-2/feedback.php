<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $rating = htmlspecialchars($_POST['rating']);
    $comments = htmlspecialchars($_POST['comments']);

    // Process the feedback data (e.g., save to database, send email, etc.)

    // Output the thank you message
    echo "Thank you for your feedback!";
} else {
    // Display the feedback form if the request method is not POST
    displayFeedbackForm();
}

function displayFeedbackForm() {
    echo 