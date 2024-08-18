// Toggle the navigation menu on mobile
document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
});
