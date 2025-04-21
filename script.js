const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

// Fake credentials for demo
const validUser = {
  username: 'admin',
  password: 'password123'
};

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username === validUser.username && password === validUser.password) {
    message.style.color = 'green';
    message.textContent = 'Login successful!';
    // You can redirect or do more here
  } else {
    message.style.color = 'red';
    message.textContent = 'Invalid username or password.';
  }
});
