import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  // Fetch all tasks from the backend
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:8080/tasks");
    setTasks(response.data);
  };

  // Add or update a task
  const saveTask = async (task) => {
    if (currentTask) {
      // Update existing task
      await axios.put(`http://localhost:8080/tasks/${currentTask.id}`, task);
    } else {
      // Add new task
      await axios.post("http://localhost:8080/tasks", task);
    }
    fetchTasks(); // Refresh the task list
    setCurrentTask(null); // Reset the form
  };

  // Delete a task
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8080/tasks/${id}`);
    fetchTasks(); // Refresh the task list
  };

  // Mark a task as done or in progress
  const markTask = async (id, status) => {
    await axios.put(`http://localhost:8080/tasks/${id}`, { status });
    fetchTasks(); // Refresh the task list
  };

  // Load tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <TaskForm onSubmit={saveTask} currentTask={currentTask} />
      <TaskList
        tasks={tasks}
        onEdit={setCurrentTask}
        onDelete={deleteTask}
        onMark={markTask} 
      />
    </div>
  );
}

 export default App;