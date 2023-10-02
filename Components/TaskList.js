// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete }) => {
  if (tasks.length === 0) {
    return <h1>No task available</h1>;
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
};

export default TaskList;
