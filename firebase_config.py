# firebase_config.py
import firebase_admin
from firebase_admin import credentials, firestore, auth

# Use your Firebase project's credentials file
cred = credentials.Certificate("C:/Users/priya/OneDrive/Desktop/Financeflow/financeflow-80071-firebase-adminsdk-fbsvc-23a4d7d1c7.json")

firebase_admin.initialize_app(cred)
db = firestore.client()