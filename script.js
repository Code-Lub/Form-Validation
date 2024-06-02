document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'varshu' && password === '12345678') {
      // Display success message
      const alertMessage = document.createElement('div');
      alertMessage.classList.add('alert');
      alert('Yayyyy!!! Login Successfull! 🎉');
      document.body.appendChild(alertMessage);
      alertMessage.classList.add('show');
      
      // Add celebration animation
      const celebration = document.createElement('div');
      celebration.classList.add('celebration');
      document.body.appendChild(celebration);
      
      setTimeout(function() {
        alertMessage.classList.remove('show');
        celebration.remove();
      }, 3000); // Remove the message and celebration after 3 seconds
    } else {
      alert('Invalid username or password. Please try again!');
    }
  });
});
