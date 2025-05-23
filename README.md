#DatePlanner

A simple full-stack date planning app built with React, Express, and MongoDB.
Deployed on Vercel with a responsive frontend and a RESTful backend API.

##Features

Responsive React frontend with a form to add new date plans perfect for planning a date with your 
Express backend exposing four API endpoints (GET,POST,PUT,DELETE).
MongoDB integration for storing and retrieving date plans.
Frontend communicates with backend using fetch with proper error handling.
Deployed and publicly accessible on Render.


Frontend: React
Backend: Express.js (Node.js)
Database: MongoDB (Atlas)
Deployment: Render
Getting Started

##Prerequisites
Node.js (v16+ recommended)
npm install
MongoDB Atlas account (for cloud database)

##Installation
Clone the repository:
git clone 
cd dateplanner
Setup environment variables:
Create a .env file in the root directory with:

MONGO_URI=your_mongodb_connection_string_here
Install dependencies:
# Backend
cd api
npm install

# Frontend
cd ../client
npm install
Running Locally
To start both backend and frontend concurrently (requires concurrently installed globally or as a dev dependency):

npm run dev
Backend server runs at http://localhost:3000/api
Frontend runs at http://localhost:5173
Usage

Open the frontend URL.
Add new date plans via the input form.
The list updates dynamically by fetching data from the backend API.
API Endpoints

GET /api/dates - Fetch all date plans.
POST /api/dates - Add a new date plan. Request body example:
{
  "title": "Dinner at Italian restaurant"
}
Deployment

This project is deployed on Vercel:

The React frontend and Express backend are deployed together.
MongoDB Atlas is used as the cloud database.
Environment variables (like MONGO_URI) are configured in the Vercel dashboard.
License

This project is open source and available under the MIT License.

Contact

Created by [Your Name] - feel free to reach out for any questions or feedback.

