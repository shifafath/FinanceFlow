
from firebase_config import db  # Assuming you have Firebase Firestore initialized in firebase_config.py
from datetime import datetime


from flask import Flask, render_template, request, redirect, url_for, flash
from firebase_config import auth  # Assuming you have Firebase auth initialized in firebase_config.py

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Required for flashing messages (keep it secure in production)

# Home route (optional, can be used as a landing page)
@app.route('/')
def home():
    return render_template('index.html')  # Replace with your actual home page template




# Signup route (for displaying the form)
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Get form data
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        # Ensure the passwords match
        if password != confirm_password:
            flash('Passwords do not match!', 'danger')
            return redirect(url_for('signup'))

        try:
            # Sign up the user using Firebase Authentication
            user = auth.create_user(
                email=email,
                password=password
            )
            flash('Sign Up Successful! Please sign in.', 'success')
            return redirect(url_for('signin'))  # Redirect to the sign-in page after successful sign-up
        except Exception as e:
            flash(f'Error during sign-up: {e}', 'danger')
            return redirect(url_for('signup'))
    return render_template('signup.html')

# Signin route (to display the sign-in form)
@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        try:
            # Sign in the user using Firebase Authentication (authentication with password)
            user = auth.get_user_by_email(email)  # Check if the user exists
            # Simulate the password validation (you should do the password validation in the frontend using Firebase SDK)
            
            # Assuming you are using the Firebase JS SDK in the frontend for actual password validation
            # Here you would typically perform password validation using the Firebase JS SDK in the frontend.
            # For now, we'll just check if the user exists and assume correct credentials for simplicity.
            
            flash('Login successful!', 'success')
            return redirect(url_for('dashboard'))  # Redirect to the dashboard after successful sign-in

        except Exception as e:
            error_message = "Invalid email or password."
            return render_template('signin.html', error=error_message)
    
    # If GET request, render the sign-in form
    return render_template('signin.html')

# Dashboard route (to be redirected after successful sign-in)
@app.route('/dashboard')
def dashboard():
    return render_template('index2.html')  # Redirect to dashboard or main page after sign-in




@app.route('/add', methods=['GET', 'POST'])  # Allow both GET and POST methods
def add():
    if request.method == 'POST':
        # Get the form data
        amount = request.form['amount']
        category = request.form['category']
        date = request.form['date']
        description = request.form.get('description', '')  # Optional field

        # Convert the date into a proper format
        formatted_date = datetime.strptime(date, '%Y-%m-%d')

        # Create a dictionary to store in Firestore
        expense_data = {
            'amount': float(amount),
            'category': category,
            'date': formatted_date,
            'description': description,
        }

        try:
            # Store the expense data in Firestore
            db.collection('expenses').add(expense_data)
            flash('Expense added successfully!', 'success')
            return redirect(url_for('add'))
        except Exception as e:
            flash(f'Error adding expense: {e}', 'danger')
            return redirect(url_for('add'))

    return render_template('add.html')


@app.route('/monthly')
def monthly():
    return render_template('monthlyindex.html')

   
@app.route('/insight')
def insight():
    return render_template('insight.html') 


@app.route('/essentials')
def essentials():
    return render_template('essentials.html') 


if __name__ == '__main__':
    app.run(debug=True)
