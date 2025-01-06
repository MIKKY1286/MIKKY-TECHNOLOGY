// navbar menu

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});



// order form section 






// Initialize EmailJS once
emailjs.init('kB2hGEEEYAYTlYaKb'); // EmailJS User ID

// Toggle Terms and Conditions visibility
document.getElementById('termsLink').addEventListener('click', function (event) {
  event.preventDefault();

  const termsText = document.getElementById('termsText');
  termsText.style.display = termsText.style.display === 'none' ? 'block' : 'none';

  // Enable the checkbox after showing terms
  document.getElementById('agreeToTerms').disabled = false;
});

// Validate Terms Agreement
document.getElementById('agreeToTerms').addEventListener('click', function () {
  if (document.getElementById('termsText').style.display === 'none') {
    alert('Please read the terms and conditions before agreeing.');
    document.getElementById('agreeToTerms').checked = false;
  }
});

// Add event listener for form submission
document.getElementById('orderForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const details = document.getElementById('details').value.trim();
  const agreeToTerms = document.getElementById('agreeToTerms').checked;

  let isValid = true;

  // Reset error messages
  document.getElementById('detailsError').style.display = 'none';
  document.getElementById('termsError').style.display = 'none';

  // Validate order details
  if (details.length < 10) {
    document.getElementById('detailsError').style.display = 'block';
    isValid = false;
  }

  // Validate terms and conditions checkbox
  if (!agreeToTerms) {
    document.getElementById('termsError').style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    // Prepare data for EmailJS
    const formData = {
      name: name,
      email: email,
      message: details,
    };

    // Send email using EmailJS
    emailjs
      .send('service_ap0twre', 'template_he9wyin', formData)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          const confirmationMessage = document.getElementById('confirmationMessage');
          confirmationMessage.textContent = 'Order submitted successfully!';
          confirmationMessage.style.display = 'block';
          confirmationMessage.style.color = 'green';
          document.getElementById('orderForm').reset();
        },
        (error) => {
          console.error('FAILED...', error);
          const confirmationMessage = document.getElementById('confirmationMessage');
          confirmationMessage.textContent = 'Failed to place order. Please try again.';
          confirmationMessage.style.display = 'block';
          confirmationMessage.style.color = 'red';
        }
      );
  } else {
    console.log('Form validation failed. Please correct the errors.');
  }
});



 // Set Greeting Based on Time
 const hour = new Date().getHours();
 const timeOfDay = hour < 12 ? 'Morning' : hour < 18 ? 'Afternoon' : 'Evening';
 const userName = "MIKKY TECHNOLOGY";
 document.getElementById("greeting").textContent = `Good ${timeOfDay}, ${userName}`;