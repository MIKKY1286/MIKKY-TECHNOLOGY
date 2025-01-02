document.addEventListener('DOMContentLoaded', () => {
    // Toggle Navigation Menu
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    if (menuIcon && navLinks) {
      menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }
  
    // Search Functionality
    const searchButton = document.getElementById('search-button');
    const searchQuery = document.getElementById('search-query');
    if (searchButton && searchQuery) {
      searchButton.addEventListener('click', () => {
        const query = searchQuery.value.trim();
        if (query) {
          alert(`Searching for: ${query}`);
          searchQuery.value = '';
        } else {
          alert('Please enter a search query.');
        }
      });
    }
  
    // Live Chat Functionality
    const liveChatButton = document.getElementById('chat-now');
    if (liveChatButton) {
      liveChatButton.addEventListener('click', () => {
        const userChoice = confirm("Would you like to contact us via WhatsApp or a phone call?");
        if (userChoice) {
          window.open("https://wa.me/2347083034571", "_blank");
        } else {
          window.location.href = "tel:+2347083034571";
        }
      });
    } else {
      console.error("Live chat button with ID 'chat-now' not found.");
    }
  
    // Submit Ticket Form
    const ticketForm = document.getElementById('ticket-form');
    if (ticketForm) {
      ticketForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your support ticket has been submitted.');
        ticketForm.reset();
      });
    }
  
    // Feedback Form Submission
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
      feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your feedback!');
        feedbackForm.reset();
      });
    }
  });
  