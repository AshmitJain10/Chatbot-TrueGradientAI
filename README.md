Chatbot Application


Table of Contents
Overview
Features
Technologies Used
Installation
Usage
API Endpoints
Deployment
Contributing
License
Overview
Welcome to the Chatbot Application! This is a full-stack chatbot built using React, Node.js, and MongoDB. It allows users to ask questions and receive responses based on predefined answers. Users can save their queries and responses, which can be reviewed later in the Admin Panel.

Features
Interactive Chatbot Interface: Users can ask questions and receive instant responses.
Save Responses: Users can save their queries and responses for future reference.
Admin Panel: A dedicated section for viewing all saved responses.
Simulated API: A mock API to provide responses based on user queries.
Responsive Design: The application is designed to be responsive and user-friendly.
Technologies Used
Frontend: React, Material UI
Backend: Node.js, Express.js
Database: MongoDB
State Management: Redux
Deployment: GitHub Pages (Frontend), Render (Backend)
Installation
Prerequisites
Node.js (v14 or later)
npm
Clone the Repository
bash
Copy code
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
Install Dependencies
For the frontend:

bash
Copy code
cd frontend
npm install
For the backend:

bash
Copy code
cd backend
npm install
Usage
Running the Backend
Navigate to the backend directory:
bash
Copy code
cd backend
Start the server:
bash
Copy code
node server.js
Your backend will be running on http://localhost:5000.
Running the Frontend
Navigate to the frontend directory:
bash
Copy code
cd frontend
Start the React app:
bash
Copy code
npm start
Your frontend will be accessible at http://localhost:3000.
Interacting with the Chatbot
Open the frontend URL in your browser.
Ask questions in the chatbot interface.
Save responses to view later in the Admin Panel.
API Endpoints
Mock API
POST /api/mock/query
Description: Sends a user query and retrieves the corresponding response.
Request Body:
json
Copy code
{
  "query": "Who is Lionel Messi?"
}
Response:
json
Copy code
{
  "summary": "Lionel Messi is a footballer who plays for Argentina and Inter Miami.",
  "result_text": "He is widely regarded as one of the greatest football players of all time."
}
Deployment
Frontend: Deployed on GitHub Pages. Access it at https://ashmitjain10.github.io/Chatbot-TrueGradientAI/.
Backend: Deployed on Render. Access it at https://chatbot-truegradientai.onrender.com.
Contributing
Contributions are welcome! If you have suggestions for improvements or want to contribute, please fork the repository and create a pull request.

Fork the repo
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a pull request
License
This project is licensed under the MIT License - see the LICENSE file for details.
