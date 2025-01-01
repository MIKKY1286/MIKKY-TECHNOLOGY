// Initialize Firebase with your project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnBeGBOxVzhDshIzhLB4KcdX0WOAnOJs8",
    authDomain: "mikky-technology.firebaseapp.com",
    projectId: "mikky-technology",
    storageBucket: "mikky-technology.appspot.com",
    messagingSenderId: "266074640983",
    appId: "1:266074640983:web:33e0332c34bb5adecc4912",
    measurementId: "G-Y2S287D0P9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = firebase.auth();
const db = firebase.firestore();

// Toggle menu visibility when the menu icon is clicked
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Sign-Up Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
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

    // Create the user using Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Save user details to Firestore (Don't store passwords in Firestore in production)
            db.collection("users").doc(user.uid).set({
                username: username,
                email: email,
                // No password needed to store here
            })
            .then(() => {
                alert('Account created successfully!');
                window.location.href = '../login page/index.html';  // Redirect to login page
            })
            .catch((error) => {
                console.error('Error saving user data: ', error);
                alert('Error saving user data');
            });
        })
        .catch((error) => {
            console.error('Error creating user: ', error);
            alert('Error creating user: ' + error.message);
        });
});
