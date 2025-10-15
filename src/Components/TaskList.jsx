import React from 'react';
export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (idx) => {
    const updated = { ...tasks[idx], completed: !tasks[idx].completed };
    updateTask(idx, updated);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, idx) => (
        <li key={idx} className={task.completed ? 'completed' : ''}>
          <span>{task.text}</span>
          <div>
            <button onClick={() => toggleComplete(idx)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(idx)} style={{ color: '#dc2626' }}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}