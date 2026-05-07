import React from 'react';

export default function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks yet. Add one above.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <h3>{task.name}</h3>
          {task.description && <p>{task.description}</p>}
          <button onClick={() => onDelete(task.id)} type="button">×</button>
        </li>
      ))}
    </ul>
  );
}