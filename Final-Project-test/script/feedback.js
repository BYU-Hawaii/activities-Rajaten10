document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    document.getElementById('thankYouMessage').style.display = 'block'; // Show the thank-you message
    document.getElementById('feedbackForm').style.display = 'none'; // Hide the form
});
