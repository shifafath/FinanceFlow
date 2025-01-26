// Import the functions you need from the Firebase SDK
/*import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADOnR5yWsQMDmCdvMEFAWVrO9dTLXuB3w",
  authDomain: "financeflow-80071.firebaseapp.com",
  projectId: "financeflow-80071",
  storageBucket: "financeflow-80071.firebasestorage.app",
  messagingSenderId: "523841794077",
  appId: "1:523841794077:web:38ba362c13cb64c11b16f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export the `auth` and `db` to use in other parts of your app
export { auth, db };
