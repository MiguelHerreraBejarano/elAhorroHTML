document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de categoría y añadir un manejador de eventos
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            let category = this.getAttribute('data-category');
            alert(`Has seleccionado vender productos en la categoría: ${category}`);
        });
    });
});
