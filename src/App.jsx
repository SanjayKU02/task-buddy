import { useEffect, useState } from 'react';
import Taskform from './Components/Taskform.jsx';
import TaskList from './Components/TaskList.jsx';
import Progress from './Components/Progress.jsx';
import './Style.css';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <header>
        <h1>Task Buddy</h1>
        <p>Your friendly Task Manager</p>
      </header>
      <Taskform addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <Progress tasks={tasks} />
      <button onClick={clearAllTasks} className='clear-btn'>Clear All Tasks</button>
    </div>
  );
}