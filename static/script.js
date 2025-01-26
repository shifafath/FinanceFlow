// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyADOnR5yWsQMDmCdvMEFAWVrO9dTLXuB3w",
    authDomain: "financeflow-80071.firebaseapp.com",
    projectId: "financeflow-80071",
    storageBucket: "financeflow-80071.firebasestorage.app",
    messagingSenderId: "523841794077",
    appId: "1:523841794077:web:38ba362c13cb64c11b16f4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle Sign Up
function handleSignUp() {
    const email = document.getElementById("email-signup").value;
    const password = document.getElementById("password-signup").value;

    // Firebase sign up method
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully signed up
            const user = userCredential.user;
            console.log("User signed up:", user);
            alert("Sign up successful!");
            // You can redirect to a dashboard or show success message
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Error during sign up:", errorMessage);
            alert("Sign up failed: " + errorMessage);
        });
}

// Handle Sign In
function handleSignIn() {
    const email = document.getElementById("email-signin").value;
    const password = document.getElementById("password-signin").value;

    // Firebase sign in method
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully signed in
            const user = userCredential.user;
            console.log("User signed in:", user);
            alert("Sign in successful!");
            // Redirect to a dashboard or show success message
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Error during sign in:", errorMessage);
            alert("Sign in failed: " + errorMessage);
        });
}
