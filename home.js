document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del menú por su id
    var homeNav = document.getElementById('home-nav');
    var offersNav = document.getElementById('offers-nav');
    var sellNav = document.getElementById('sell-nav');
    var historyNav = document.getElementById('history-nav');

    // Añadir manejadores de eventos
    homeNav.addEventListener('click', function() {
        window.location.href = 'home.html';
    });

    offersNav.addEventListener('click', function() {
        window.location.href = 'offers.html';
    });

    sellNav.addEventListener('click', function() {
        window.location.href = 'sell.html';
    });

    historyNav.addEventListener('click', function() {
        window.location.href = 'history.html';
    });
});
