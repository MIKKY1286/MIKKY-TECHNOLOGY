


// pages javascript


// Fetch user profile from server (replace with your actual API URL)
function fetchUserProfile() {
    fetch('https://your-api-url.com/get-user-profile')  // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {
            const sectionContent = document.getElementById("section-content");
            const content = `
                <h1>Your Profile</h1>
                <ul>
                    <li><strong>Name:</strong> ${data.name}</li>
                    <li><strong>Email:</strong> ${data.email}</li>
                    <li><strong>Phone:</strong> ${data.phone}</li>
                    <li><strong>Address:</strong> ${data.address}</li>
                    <li><strong>Bio:</strong> ${data.bio}</li>
                </ul>
            `;
            sectionContent.innerHTML = content;
        })
        .catch(error => {
            console.error('Error fetching user profile:', error);
            alert('Failed to load profile information.');
        });
}

function showSection(section) {
    const sectionContent = document.getElementById("section-content");
    let content = "";

    switch (section) {
        case 'profile':
            fetchUserProfile();  // Fetch and display the user profile
            return; // Exit function after fetching profile
        case 'orders':
            content = `
                <h1>Your Orders</h1>
                <ul>
                    <li>Order #001 - <strong>Status:</strong> Shipped</li>
                    <li>Order #002 - <strong>Status:</strong> Processing</li>
                    <li>Order #003 - <strong>Status:</strong> Delivered</li>
                    <li>Order #004 - <strong>Status:</strong> Cancelled</li>
                </ul>
            `;
            break;
        case 'projects':
            content = `
                <h1>Your Projects</h1>
                <ul>
                    <li>Portfolio Website - <strong>Status:</strong> Completed</li>
                    <li>E-commerce Site - <strong>Status:</strong> In Progress</li>
                    <li>Blog Platform - <strong>Status:</strong> Pending</li>
                    <li>Landing Page Design - <strong>Status:</strong> Completed</li>
                </ul>
            `;
            break;
        case 'settings':
            content = `
                <h1>Settings</h1>
                <p>Customize your preferences and account settings here.</p>
                <ul>
                    <li><strong>Change Password</strong></li>
                    <li><strong>Notification Preferences</strong></li>
                    <li><strong>Privacy Settings</strong></li>
                    <li><strong>Account Security</strong></li>
                </ul>
            `;
            break;
        case 'logout':
            alert("You have been logged out.");
            window.location.href = "/login.html";
            return;
        default:
            content = `
                <h1>Welcome to Your Dashboard</h1>
                <p>Select a section from the sidebar to view its content here.</p>
            `;
    }

    sectionContent.innerHTML = content;
}
