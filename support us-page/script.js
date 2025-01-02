const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});



// Search functionality
const searchButton = document.getElementById('search-button');
const searchQuery = document.getElementById('search-query');

searchButton.addEventListener('click', () => {
  const query = searchQuery.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
    searchQuery.value = '';
  } else {
    alert('Please enter a search query.');
  }
});

// Live Chat Simulation
const liveChatButton = document.getElementById('live-chat-button');
liveChatButton.addEventListener('click', () => {
  alert('Starting live chat...');
});

// Submit Ticket
const ticketForm = document.getElementById('ticket-form');
ticketForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Your support ticket has been submitted.');
  ticketForm.reset();
});

// Feedback Form Submission
const feedbackForm = document.getElementById('feedback-form');
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your feedback!');
  feedbackForm.reset();
});


document.getElementById('chat-now').addEventListener('click', () => {
    const userChoice = confirm("Would you like to contact us via WhatsApp or a phone call?");
    if (userChoice) {
      window.open("https://wa.me/2347083034571", "_blank");
    } else {
      window.location.href = "tel:+2347083034571";
    }
  });
