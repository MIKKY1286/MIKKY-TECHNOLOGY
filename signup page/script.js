const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


// signup

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validate input fields
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Validate password match
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    // Simulate successful sign-up
    alert(`Welcome, ${username}! Your account has been created.`);
    // Redirect or additional actions can be added here
  });
  