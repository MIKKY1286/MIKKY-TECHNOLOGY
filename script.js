const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

  // place order

  (function() {
    emailjs.init(''); 
  })();

  document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Collect form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      order_type: document.getElementById('order-type').value,
      delivery_date: document.getElementById('delivery-date').value,
      details: document.getElementById('details').value,
    };
  
    // Send form data via EmailJS
    emailjs.send('service_ap0twre', 'template_he9wyin', formData, 'KaDpj-tt1XwtKgihx')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('confirmationMessage').textContent = 'Order submitted successfully!';
        document.getElementById('confirmationMessage').style.display = 'block';
        document.getElementById('confirmationMessage').style.color = 'green';
        document.getElementById('orderForm').reset();
      }, (error) => {
        console.error('FAILED...', error);
        document.getElementById('confirmationMessage').textContent = 'Failed to submit order. Please try again.';
        document.getElementById('confirmationMessage').style.display = 'block';
        document.getElementById('confirmationMessage').style.color = 'red';
      });
  });