document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Validação do formulário
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validação básica
        if (validateForm()) {
            // Simulação de login bem-sucedida
            alerta('Login realizado com sucesso!');
            // Aqui você normalmente faria uma requisição para o servidor
            // loginForm.submit()
        }
    });

    // Validação em tempo real
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);

    function validateForm() {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        return isEmailValid && isPasswordValid;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[]
    }
})