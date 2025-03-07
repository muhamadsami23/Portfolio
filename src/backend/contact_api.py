from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# File to store contact form submissions
SUBMISSIONS_FILE = "contact_submissions.csv"

# Initialize CSV file with headers if it doesn't exist
def initialize_csv():
    if not os.path.exists(SUBMISSIONS_FILE):
        with open(SUBMISSIONS_FILE, 'w', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(['Timestamp', 'Name', 'Email', 'Subject', 'Message'])

# Validate form data
def validate_form_data(data):
    errors = []
    
    if not data.get('name'):
        errors.append("Name is required")
    
    if not data.get('email'):
        errors.append("Email is required")
    elif '@' not in data.get('email'):
        errors.append("Invalid email format")
    
    if not data.get('subject'):
        errors.append("Subject is required")
    
    if not data.get('message'):
        errors.append("Message is required")
    
    return errors

@app.route('/api/contact', methods=['POST'])
def submit_contact_form():
    # Initialize CSV file if it doesn't exist
    initialize_csv()
    
    # Get form data from request
    data = request.json
    
    # Validate form data
    errors = validate_form_data(data)
    if errors:
        return jsonify({
            'success': False,
            'errors': errors
        }), 400
    
    # Get current timestamp
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # Save form data to CSV
    try:
        with open(SUBMISSIONS_FILE, 'a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([
                timestamp,
                data.get('name'),
                data.get('email'),
                data.get('subject'),
                data.get('message')
            ])
        
        return jsonify({
            'success': True,
            'message': 'Your message has been submitted successfully!'
        }), 200
    
    except Exception as e:
        return jsonify({
            'success': False,
            'errors': [f"An error occurred: {str(e)}"]
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)