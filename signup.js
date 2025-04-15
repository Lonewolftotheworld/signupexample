document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const welcomePage = document.getElementById('welcomePage');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const backToFormBtn = document.getElementById('backToForm');
    
    // Regular expressions for validation
    const nameRegex = /^[A-Za-z]+$/;
    
    const cellphoneRegex = /^\d{10}$/;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error messages
        clearErrors();
        
        // Validate each field
        const isValidName = validateName();
        const isValidSurname = validateSurname();
        const isValidCellphone = validateCellphone();
        
        // If all validations pass
        if (isValidName && isValidSurname&& isValidCellphone) {
            // Get form values
            const name = document.getElementById('name').value;
            const surname = document.getElementById('surname').value;
            
            // Hide form and show welcome page
            form.parentElement.style.display = 'none';
            welcomePage.style.display = 'block';
            
            // Set welcome message
            welcomeMessage.textContent = `Welcome, ${name} ${surname}!`;
        }
    });
    
    backToFormBtn.addEventListener('click', function() {
        // Show form and hide welcome page
        welcomePage.style.display = 'none';
        form.parentElement.style.display = 'block';
    });
    
    function validateName() {
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        const name = nameInput.value.trim();
        
        if (!name) {
            showError(nameInput, nameError, 'Name is required');
            return false;
        }
        
        if (!nameRegex.test(name)) {
            showError(nameInput, nameError, 'Name should contain only letters');
            return false;
        }
        
        return true;
    }
    
    function validateSurname() {
        const surnameInput = document.getElementById('surname');
        const surnameError = document.getElementById('surnameError');
        const surname = surnameInput.value.trim();
        
        if (!surname) {
            showError(surnameInput, surnameError, 'Surname is required');
            return false;
        }
        
        if (!nameRegex.test(surname)) {
            showError(surnameInput, surnameError, 'Surname should contain only letters');
            return false;
        }
        
        return true;
    }
    function validateCellphone() {
        const cellphoneInput = document.getElementById('cellphone');
        const cellphoneError = document.getElementById('cellphoneError');
        const cellphone = cellphoneInput.value.trim();
            
        if (!cellphone) {
            showError(cellphoneInput, cellphoneError, 'Cell phone number is required');
            return false;
        }
            
        if (!/^\d{9}$/.test(cellphone)) {
            showError(cellphoneInput, cellphoneError, 'Please enter exactly 9 digits');
            return false;
        }
            
        return true;
    }
        
    
    function showError(input, errorElement, message) {
        if (input) {
            input.classList.add('error');
        }
        errorElement.textContent = message;
    }
    
    function clearErrors() {
        // Remove error classes from inputs
        document.querySelectorAll('input').forEach(input => {
            input.classList.remove('error');
        });
        
        // Clear error messages
        document.querySelectorAll('.error-message').forEach(error => {
            error.textContent = '';
        });
    }
});