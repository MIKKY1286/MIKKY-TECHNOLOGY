
// navbar menu

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});



// container

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email === '' || password === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simulate login logic
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful!');
      // Redirect or additional actions can be added here
    } else {
      alert('Invalid email or password.');
    }
  });
  