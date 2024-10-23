Server: smtp-broadcasts.postmarkapp.com;
Ports: 2525;
Authentication:TLS;
Username: ead78539-9327-4916-a6df-f82ffb7d1535
Password: ead78539-9327-4916-a6df-f82ffb7d1535






































const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('sendButton');
const spinner = document.getElementById('spinner');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm() {
    let isValid = true;

    if (!validateEmail(emailInput.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (subjectInput.value.length < 5) {
        document.getElementById('subjectError').textContent = 'Subject must be at least 5 characters long';
        isValid = false;
    } else {
        document.getElementById('subjectError').textContent = '';
    }

    if (messageInput.value.length < 5) {
        document.getElementById('messageError').textContent = 'Message must be at least 5 characters long';
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    sendButton.disabled = !isValid;
    return isValid;
}

emailInput.addEventListener('input', validateForm);
subjectInput.addEventListener('input', validateForm);
messageInput.addEventListener('input', validateForm);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        sendButton.disabled = true;
        spinner.style.display = 'inline-block';
        
        setTimeout(() => {
            alert('Message sent successfully!');
            form.reset();
            spinner.style.display = 'none';
            sendButton.disabled = true;
        }, 2000);
    }
});
