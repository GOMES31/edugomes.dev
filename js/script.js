const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');
const toggleIcon = mobileMenu.querySelector('img');

mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    if (navbarMenu.classList.contains('active')) {
        toggleIcon.src = 'icons/close.svg';
        toggleIcon.alt = 'Close Menu';
    } else {
        toggleIcon.src = 'icons/hamburger.svg';
        toggleIcon.alt = 'Open Menu';
    }
});
