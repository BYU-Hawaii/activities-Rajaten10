document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comments = document.getElementById('comments').value;
        
        if (!name || !email || !comments) {
            alert('Please fill out all required fields.');
            e.preventDefault(); // Prevent form submission
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            e.preventDefault(); // Prevent form submission
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
