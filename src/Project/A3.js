import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const Appi = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, { text: taskText }]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Home Helper App</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Appi;
