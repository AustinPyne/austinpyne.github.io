// navbar.js
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.w3-bar');
    if (window.scrollY > 50) {
        navbar.classList.add('w3-dark-gray'); // darker color on scroll
        navbar.classList.add('w3-card-4'); // shadow effect
    } else {
        navbar.classList.remove('w3-dark-gray');
        navbar.classList.remove('w3-card-4');
    }
});
