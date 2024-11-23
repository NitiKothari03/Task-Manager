# Task Manager

A simple web-based Task Manager application that allows users to create, view, update, and delete tasks.

## Features

- Add tasks with title, description, due date, and category.
- Mark tasks as complete or incomplete.
- Edit task details.
- Delete tasks.
- Responsive and user-friendly interface.

---

## Project Structure
├── config/
│   └── database.js       # Configuration for database and server port
├── models/
│   └── task.js           # Mongoose schema for tasks
├── public/
│   └── index.html        # Frontend HTML file for the Task Manager
├── routes/
│   └── taskRoutes.js     # API routes for task CRUD operations
└── app.js                # Main application entry point


## Prerequisites

Before running the project, ensure you have the following installed:

Node.js (v14 or later)
MongoDB (running locally or remotely)

## Getting Started

1. Clone the Repository
git clone <repository-url>
cd <repository-folder>
2. Install Dependencies
npm install
3. Setup Environment Variables
Create a .env file in the root directory and add the following (if necessary):

NODE_ENV=development
Note: The default configuration uses a local MongoDB instance.
4. Start MongoDB Server
Make sure your MongoDB server is running on localhost:27017. You can start it with:
mongod

## Running the Application

Run the following command to start the application:
npm run dev

## API Endpoints

Method	Endpoint	Description
GET	/api/tasks	Fetch all tasks
GET	/api/tasks/:id	Fetch a task by ID
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update an existing task
DELETE	/api/tasks/:id	Delete a task
Code Highlights

## Database Configuration
Located in config/database.js:

const config = {
    development: {
        mongodb_uri: 'mongodb://localhost:27017/task-manager',
        port: 3000
    },
};

module.exports = config[process.env.NODE_ENV || 'development'];

## Task Schema
Located in models/task.js:

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  completed: { type: Boolean, default: false },
  dueDate: { type: Date },
  category: { type: String, trim: true }
}, {
  timestamps: true
});

## Additional Information

Frontend: Vanilla JavaScript and basic HTML/CSS.
Backend: Express.js with MongoDB for data storage.
Feel free to extend the functionality or customize the project as needed. If you encounter any issues, please open a pull request or raise an issue.

