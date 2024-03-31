// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de inicio de sesión y los campos de entrada
    var loginButton = document.getElementById('login-button');
    var emailInput = document.getElementById('email-input');
    var passwordInput = document.getElementById('password-input');

    // Añade un evento 'click' al botón de inicio de sesión
    loginButton.addEventListener('click', function() {
        // Obtiene los valores ingresados por el usuario
        var userEmail = emailInput.value;
        var userPassword = passwordInput.value;

        // Verifica si las credenciales son correctas
        if (userEmail === 'email@email.com' && userPassword === 'Clave123') {
            // Redirecciona al usuario a home.html
            window.location.href = 'home.html';
        } else {
            // Muestra una alerta si las credenciales son incorrectas
            window.alert('El email o la clave son incorrectos. Por favor, intente de nuevo.');
        }
    });
});
