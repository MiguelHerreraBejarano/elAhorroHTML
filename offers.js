document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones "Ver" y añadir un manejador de eventos
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert("Mostrando detalles para: " + this.getAttribute('data-product'));
        });
    });
});
