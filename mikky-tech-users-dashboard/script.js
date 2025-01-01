 // Toggle sidebar visibility on menu icon click
 function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Chart data for "Projects Completed Over Time" and "Service Growth"
var projectsCtx = document.getElementById('projectsChart').getContext('2d');
var serviceGrowthCtx = document.getElementById('serviceGrowthChart').getContext('2d');

var projectsChart = new Chart(projectsCtx, {
type: 'line',
data: {
labels: ['July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
datasets: [{
  label: 'Projects Completed',
  data: [30, 45, 39, 60, 50, 75],
  borderColor: 'rgba(75, 192, 192, 1)',
  fill: false,
}]
}
});

var serviceGrowthChart = new Chart(serviceGrowthCtx, {
type: 'bar',
data: {
labels: ['Web Development', 'Flier Making', 'RC Cars & Drones', 'Poster Making', 'Business Cards'],
datasets: [{
  label: 'Services Growth',
  data: [120, 200, 150, 180, 210],
  backgroundColor: 'rgba(54, 162, 235, 0.2)',
  borderColor: 'rgba(54, 162, 235, 1)',
  borderWidth: 1
}]
}
});


// Function to toggle between light and dark themes
function toggleTheme() {
const body = document.body;
body.classList.toggle('dark-theme');
body.classList.toggle('light-theme');
}

// Set Greeting Based on Time and Name
const userName = 'Michael'; 
    const hour = new Date().getHours();
    let timeOfDay = hour < 12 ? 'Morning' : hour < 18 ? 'Afternoon' : 'Evening';
    greeting.textContent = `Good ${timeOfDay}, ${userName}!`;


    // profile section

    const profilePic = document.getElementById('profilePic');
    const usersName = document.getElementById('usersName');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const profileModal = document.getElementById('profileModal');

    // click to show modal with expanded picture
    profilePic.addEventListener('click', () => {
        profileModal.classList.add('active');
    });

    // Click on modal to close it
    profileModal.addEventListener('click', () => {
        profileModal.classList.remove('active');
    });

    // Click on username to toggle dropdown
    userName.addEventListener('click', () => {
        dropdownMenu.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userName.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('active');
        }
    });