const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Remove error styling as soon as user types
emailInput.addEventListener('input', () => {
    emailInput.style.borderColor = '#2718ff'; // Reset to default color
});

passwordInput.addEventListener('input', () => {
    passwordInput.style.borderColor = '#2718ff'; // Reset to default color
});



const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    // When user clicks in the box (focus)
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('active'); 
        // Note: You need CSS for .active to move the label up
    });

    // When user leaves the box (blur)
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('active');
        }
    });
});



