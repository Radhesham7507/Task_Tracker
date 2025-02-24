import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onEdit, onDelete, onMark }) {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onMark={onMark}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;