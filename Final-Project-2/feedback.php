<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $rating = htmlspecialchars($_POST['rating']);
    $comments = htmlspecialchars($_POST['comments']);

    $data = "Name: $name\nEmail: $email\nRating: $rating\nComments: $comments\n\n";
    file_put_contents('feedback.txt', $data, FILE_APPEND);
    echo "Thank you for your feedback!";
}
?>
