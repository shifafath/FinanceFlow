/*document.addEventListener('DOMContentLoaded', function() {
    // Set default date to today
    document.getElementById('date').valueAsDate = new Date();

    // Toast functionality
    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        toast.className = `toast ${type}`;
        toastMessage.textContent = message;
        
        // Show toast
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Form submission
    document.getElementById('expenseForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const amount = document.getElementById('amount').value;
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;

        if (!amount || parseFloat(amount) <= 0) {
            showToast('Please enter a valid amount', 'error');
            return;
        }

        // Create expense object
        const expense = {
            amount: parseFloat(amount),
            category,
            date,
            description
        };

        // Log the expense (in a real app, you'd save this to a backend)
        console.log('New expense:', expense);
        
        // Show success message
        showToast('Expense saved successfully');

        // Reset form
        this.reset();
        document.getElementById('date').valueAsDate = new Date();
    });

    // Format amount input
    document.getElementById('amount').addEventListener('input', function(e) {
        if (this.value.length > 0) {
            this.value = parseFloat(this.value).toFixed(2);
        }
    });
});
*/

// Import Firebase SDK components
import { db, auth } from '../firebase.js'; // Import your Firebase initialization file
import { collection, addDoc } from 'firebase/firestore';

document.addEventListener('DOMContentLoaded', function() {
    // Set default date to today
    document.getElementById('date').valueAsDate = new Date();

    // Toast functionality
    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        toast.className = `toast ${type}`;
        toastMessage.textContent = message;
        
        // Show toast
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Form submission
    document.getElementById('expenseForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const amount = document.getElementById('amount').value;
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;

        // Input validation
        if (!amount || parseFloat(amount) <= 0) {
            showToast('Please enter a valid amount', 'error');
            return;
        }

        // Get the current logged-in user
        const user = auth.currentUser;  // Get user from Firebase Authentication

        if (!user) {
            showToast('You must be logged in to save an expense.', 'error');
            return;
        }

        // Create expense object
        const expense = {
            amount: parseFloat(amount),
            category,
            date,
            description,
            userId: user.uid // Associate expense with the logged-in user
        };

        try {
            // Save expense data to Firestore
            await addDoc(collection(db, 'expenses'), expense);
            console.log('Expense saved:', expense);

            // Show success message
            showToast('Expense saved successfully');

            // Reset form
            this.reset();
            document.getElementById('date').valueAsDate = new Date();

        } catch (error) {
            console.error('Error saving expense: ', error);
            showToast('There was an error saving your expense.', 'error');
        }
    });

    // Format amount input (ensuring it’s in the correct format)
    document.getElementById('amount').addEventListener('input', function(e) {
        if (this.value.length > 0) {
            this.value = parseFloat(this.value).toFixed(2);
        }
    });
});
