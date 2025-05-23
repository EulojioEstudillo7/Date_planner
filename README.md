# DatePlanner

A simple full-stack date planning app built with React, Express, and MongoDB.
Deployed on Vercel with a responsive frontend and a RESTful backend API.

## Features

Responsive React frontend with a form to add new date plans perfect for planning a date with your significant other 

Express backend exposing four API endpoints (GET,POST,PUT,DELETE).

MongoDB integration for storing and retrieving date plans.

Frontend communicates with backend using fetch with proper error handling.

Deployed and publicly accessible on Render.


Frontend: React

Backend: Express.js (Node.js)

Database: MongoDB (Atlas)

Deployment: Render

# Getting Started

## Prerequisites
Node.js (v16+ recommended)
npm install
MongoDB Atlas account (for cloud database)

## Installation
Clone the repository: https://github.com/EulojioEstudillo7/Date_planner.git
git clone 
cd dateplanner(if not already in dateplanner)


# Backend
cd api

npm install --save-dev nodemon

npm init -y;npm install express mongoose cors dotenv axios;

Setup environment variables:

Create a .env file in the api folder and add:

MONGO_URI=your_mongodb_connection_string_here
Install dependencies:

# Frontend
cd ../client

npm install

Running Locally

npm run dev

Backend server runs at http://localhost:5000/api

Frontend runs at http://localhost:5173


Open the frontend URL.
Add new date plans via the input form.
The list updates dynamically by fetching data from the backend API.

## API Endpoints

GET /api/dates - Fetch all date plans.

POST /api/dates - Add a new date plan.

PUT /api/dates/:id

DELETE /api/dates/:id

This project is deployed on Render

The React frontend and Express backend are deployed together.
MongoDB Atlas is used as the cloud database.
Environment variables (like MONGO_URI) are configured in the Render dashboard.

Contact

Eulojio Estudillo - Let me know if there are any bugs in this code Feel free to reach out 


