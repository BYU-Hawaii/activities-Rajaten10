document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenuList = document.getElementById('mobile-menu-list');
    const companyList = document.getElementById('company-list');
    const jobBoxes = document.querySelectorAll('.job-box');
    const modal = document.getElementById('job-modal');
    const closeModal = document.querySelector('.close');
    const jobTitle = document.getElementById('job-title');
    const jobDescription = document.getElementById('job-description');
    const applyLink = document.getElementById('apply-link');

    menuToggle.addEventListener('click', function () {
        if (mobileMenuList.style.display === 'block') {
            mobileMenuList.style.display = 'none';
        } else {
            mobileMenuList.style.display = 'block';
        }
    });

    companyList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            const company = e.target.getAttribute('data-company');
            jobBoxes.forEach(box => {
                if (box.getAttribute('data-company') === company) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        }
    });

    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function () {
            const job = button.getAttribute('data-job');
            // Fetch job details based on the job id (this can be replaced with a dynamic fetch request)
            if (job === 'amazon1') {
                jobTitle.innerText = 'Software Development Intern';
                jobDescription.innerText = 'Details about the Amazon Software Development Internship...';
                applyLink.href = 'https://www.amazon.jobs';
            } else if (job === 'google1') {
                jobTitle.innerText = 'Data Analyst Intern';
                jobDescription.innerText = 'Details about the Google Data Analyst Internship...';
                applyLink.href = 'https://www.google.com/jobs';
            }
            // Add more job details as needed
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
