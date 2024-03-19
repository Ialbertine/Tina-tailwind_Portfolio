document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.max-w-md');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('Subject');
        const messageInput = document.getElementById('Message');

        validateInput(nameInput, 'name-error', 'Please enter your name.');
        validateInput(emailInput, 'email-error', 'Please enter your email.');
        validateInput(subjectInput, 'subject-error', 'Please enter your subject.');
        validateInput(messageInput, 'message-error', 'Please enter your message.');

        // If all fields are filled, submit the form
        if (!document.querySelectorAll('.text-sm.:not(.hidden)').length && messageInput.value.trim() !== '') {
            form.submit();
        }
    });

    // Function to validate input and display error message
    function validateInput(input, errorId, errorMessage) {
        const errorElement = document.getElementById(errorId);
        errorElement.classList.add('hidden'); // Hide error message initially

        if (input.value.trim() === '') {
            errorElement.textContent = errorMessage;
            errorElement.classList.remove('hidden'); // Show error message if input is empty
        }
    }

    // Event listener to show error message when input loses focus
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(input, `${input.id}-error`, `Please enter your ${input.id}.`);
        });
    });
});


