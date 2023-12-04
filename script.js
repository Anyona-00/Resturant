const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', function(event) {
    event.preventDefault();
    navLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
});
