import { useState } from 'react';

export default function Taskform({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({ text });
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div id="inp">
        <input
          type="text"
          placeholder="Add a new task..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}