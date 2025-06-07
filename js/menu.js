document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Cambiar ícono (opcional)
        this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
});