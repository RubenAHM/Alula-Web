document.addEventListener('DOMContentLoaded', function() {
    const servicios = document.querySelectorAll('.servicio-card');
    
    servicios.forEach(servicio => {
        const btn = servicio.querySelector('.servicio-btn');
        
        btn.addEventListener('click', function() {
            servicio.classList.toggle('active');
            
            // Cambiar texto del botón
            if (servicio.classList.contains('active')) {
                btn.textContent = 'Cerrar';
            } else {
                btn.textContent = 'Ver detalles';
            }
        });
    });
});