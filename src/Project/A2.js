import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
