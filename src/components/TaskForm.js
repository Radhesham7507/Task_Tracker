import React, { useState, useEffect } from "react";

function TaskForm({ onSubmit, currentTask }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("not done");

  // Populate form if editing a task
  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setStatus(currentTask.status);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, status });
    setTitle("");
    setStatus("not done");
  };

  return (
    <form onSubmit={handleSubmit}> 
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="not done">Not Done</option>
        <option value="in progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">{currentTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
}

export default TaskForm;