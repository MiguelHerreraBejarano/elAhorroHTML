document.addEventListener('DOMContentLoaded', function() {
    // Simulación de datos de productos vistos recientemente
    const recentProducts = [
        { name: "Producto 1", image: "img/product1.jpg", description: "Descripción breve del Producto 1." },
        { name: "Producto 2", image: "img/product2.jpg", description: "Descripción breve del Producto 2." },
        { name: "Producto 3", image: "img/product3.jpg", description: "Descripción breve del Producto 3." },
        { name: "Producto 4", image: "img/product4.jpg", description: "Descripción breve del Producto 4." },
        { name: "Producto 5", image: "img/product5.jpg", description: "Descripción breve del Producto 5." }
    ];

    // Seleccionar el elemento de la lista donde se mostrarán los productos
    const productList = document.getElementById('product-list');

    // Crear elementos de lista (li) para cada producto y añadirlos al DOM
    recentProducts.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img class="product-img" src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        `;
        productList.appendChild(li);
    });
});
