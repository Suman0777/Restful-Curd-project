# nodejs-express-mongodb-crud

A simple and robust RESTful API built with **Node.js**, **Express**, and **MongoDB** that performs basic CRUD (Create, Read, Update, Delete) operations on user data. This project serves as a foundational template for backend development using the MERN stack technologies.

## 🚀 Tech Stack
* **Node.js**: JavaScript runtime environment.
* **Express.js**: Web framework for handling routes and requests.
* **MongoDB**: NoSQL database for storing user data.
* **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
* **Body-Parser**: Middleware for parsing incoming request bodies.
* **Dotenv**: For managing environment variables.

## ✨ Features
* **Create**: Add new users with validation (checks if the user already exists).
* **Read**: Fetch a list of all users from the database.
* **Update**: Modify user details (Name, Email, Address) by ID.
* **Delete**: Remove a user permanently from the database by ID.

## 📂 Folder Structure
```bash
├── controller/
│   └── userController.js  # Logic for handling API requests
├── model/
│   └── userModel.js       # Database Schema definition
├── routes/
│   └── userRoute.js       # API Route definitions
├── index.js               # Entry point and Server configuration
├── .env                   # Environment configurations (Port, DB URL)
└── package.json           # Dependencies and scripts

