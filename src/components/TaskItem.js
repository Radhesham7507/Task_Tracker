import React from "react";

function TaskItem({ task, onEdit, onDelete, onMark }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onMark(task.id, "done")}>Mark as Done</button>
      <button onClick={() => onMark(task.id, "in progress")}>Mark as In Progress</button>
    </div>
  );
}

export default TaskItem;