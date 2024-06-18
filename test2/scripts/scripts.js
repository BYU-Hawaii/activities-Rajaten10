document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenuList = document.getElementById('mobile-menu-list');

    menuToggle.addEventListener('click', function () {
        if (mobileMenuList.style.display === 'block') {
            mobileMenuList.style.display = 'none';
        } else {
            mobileMenuList.style.display = 'block';
        }
    });
});
