# Welcome To The Library

## Overview

This project is a Library Management System built using React for the frontend, Express for the backend, and MySQL for the database. The system allows users to store and manage books, manage user accounts, borrow books, receive book recommendations, and view user statistics (for admins).

## Prerequisites

Before running the application, you must have the following installed:

- Node.js
- MySQL

## Installation

To install the required dependencies, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory and create a new `.env` file.
3. In the `.env` file, add your MySQL database credentials in the following format:
    ```
    PORT = port number
    SECRET = secret
    DB_USER = your username
    DB_PASSWORD = your password
    DB_NAME = database name
    HOST = "localhost"
    ```
4. Create a new database named `book_database` in your MySQL instance.
5. In the `backend` directory, run the command `npm i` to install the backend dependencies.
6. Start the backend server by running the command `nodemon .`. The server should now be running on `http://localhost:5000`.

To start the frontend, follow these steps:

1. Navigate to the `frontend` directory.
2. Run the command `npm i` to install the frontend dependencies.
3. Start the frontend server by running the command `npm run dev`. The server should now be running on `http://localhost:5173`.

## Usage

Once the backend and frontend servers are running, you can access the Library Management System by navigating to `http://localhost:5173` in your web browser.

The app includes the following features:

- Book storage system
- User account management
- Borrow management
- Recommendation system
- User statistics for admins

Enjoy exploring the Library Management System!
