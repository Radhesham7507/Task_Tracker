# Task Tracker

<img src="https://github.com/Radhesham7507/Task_Tracker/blob/master/task_tracker.png">

A simple task management application built with Spring Boot (backend) and React (frontend). This application allows users to add, update, delete, and track the status of tasks (e.g., "not done", "in progress", "done").

## Features

### Backend (Spring Boot)
- RESTful API for managing tasks.
- MongoDB for storing tasks.
- Endpoints for:
  - Adding a task.
  - Updating a task.
  - Deleting a task.
  - Marking a task as "done" or "in progress".
  - Listing all tasks or tasks by status.

### Frontend (React)
- User-friendly interface for managing tasks.
- Real-time updates when tasks are added, updated, or deleted.
- Filter tasks by status (e.g., "not done", "in progress", "done").

## Technologies Used

### Backend
- **Spring Boot**: Java framework for building the REST API.
- **MongoDB**: NoSQL database for storing tasks.
- **Spring Data MongoDB**: For interacting with MongoDB.

### Frontend
- **React**: JavaScript library for building the user interface.
- **Axios**: For making HTTP requests to the backend.
- **CSS**: For styling the application.

## Prerequisites
Before running the project, ensure you have the following installed:
- **Java Development Kit (JDK)**: Version 17 or higher.
- **Node.js**: For running the React frontend.
- **MongoDB**: Installed and running locally or remotely.
- **IDE**: IntelliJ IDEA, Eclipse, or any text editor for backend development.
- **Postman (optional)**: For testing the backend API.

## Setup Instructions

### Backend (Spring Boot)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-tracker.git
   cd task-tracker/backend
   ```
2. Configure MongoDB:
   Update the `application.properties` file with your MongoDB connection details:
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/taskdb
   ```
3. Run the Spring Boot application:
   Open the project in your IDE and run the `TaskTrackerApplication.java` file.
   Alternatively, use the command line:
   ```bash
   ./mvnw spring-boot:run
   ```
4. Verify the backend:
   Open `http://localhost:8080/tasks` in your browser or Postman.
   You should see an empty array `[]` if no tasks exist.

### Frontend (React)

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the proxy:
   Ensure the `proxy` field in `package.json` points to the backend URL:
   ```json
   "proxy": "http://localhost:8080"
   ```
4. Run the React app:
   ```bash
   npm start
   ```
5. Access the application:
   Open `http://localhost:3000` in your browser.

## API Endpoints

### Tasks

- **GET** `/tasks`: Get all tasks.
- **GET** `/tasks/status/{status}`: Get tasks by status (e.g., "done", "in progress").
- **POST** `/tasks`: Add a new task.
  ```json
  {
    "title": "Finish project",
    "status": "not done"
  }
  ```
- **PUT** `/tasks/{id}`: Update a task.
  ```json
  {
    "title": "Updated task title",
    "status": "done"
  }
  ```
- **DELETE** `/tasks/{id}`: Delete a task.

## Usage

### Add a Task
1. Enter the task title in the input field.
2. Select the task status (e.g., "not done", "in progress", "done").
3. Click **Add Task**.

### Update a Task
1. Click the **Edit** button next to the task you want to update.
2. Modify the task title or status.
3. Click **Update Task**.

### Delete a Task
1. Click the **Delete** button next to the task you want to delete.

### Mark a Task as Done or In Progress
1. Click the **Mark as Done** or **Mark as In Progress** button next to the task.

## Troubleshooting

### Common Issues

- **Backend not running:**
  - Ensure the Spring Boot application is running on `http://localhost:8080`.

- **CORS errors:**
  - Verify that the `@CrossOrigin` annotation is added to the `TaskController` in the backend.
  - Ensure the `proxy` field in `package.json` is correctly configured.

- **MongoDB connection issues:**
  - Check if MongoDB is running and accessible.
  - Verify the connection URI in `application.properties`.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.



## Acknowledgments
- **Spring Boot**: For providing a robust backend framework.
- **React**: For enabling a dynamic and responsive frontend.
- **MongoDB**: For offering a flexible NoSQL database solution.

Enjoy using the Task Tracker! If you have any questions or feedback, feel free to open an issue or contact the maintainers.

